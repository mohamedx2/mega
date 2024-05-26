import React, { useState, useEffect } from 'react';
import { Badge, Calendar, Modal, Form, Input, Select, Button, List } from 'antd';
import axios from 'axios';
import { Moment } from 'moment';

const { Option } = Select;

interface CalendarEvent {
  _id: string;
  date: string;
  type: 'success' | 'warning' | 'error';
  content: string;
}

const CalendarComponent: React.FC = () => {
  const [calendarData, setCalendarData] = useState<CalendarEvent[]>([]);
  const [selectedDateEvents, setSelectedDateEvents] = useState<CalendarEvent[]>([]);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  useEffect(() => {
    const fetchCalendarData = async () => {
      try {
        const token = localStorage.getItem('token');
        const { data } = await axios.get('https://backray.onrender.com/api/calendar/user', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setCalendarData(data);
      } catch (error) {
        console.error('Error fetching calendar data:', error);
      }
    };

    fetchCalendarData();
  }, []);

  const handleDateSelect = (value: Moment) => {
    const selectedDate = value.toDate();
    const events = calendarData.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getDate() === selectedDate.getDate() &&
             eventDate.getMonth() === selectedDate.getMonth() &&
             eventDate.getFullYear() === selectedDate.getFullYear();
    });

    setSelectedDateEvents(events);
    setSelectedDate(selectedDate);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const handleFormSubmit = async (values: { type: string; content: string }) => {
    if (!selectedDate) return;
    try {
      const token = localStorage.getItem('token');
      const newEvent = {
        date: selectedDate,
        type: values.type,
        content: values.content
      };

      const { data } = await axios.post('https://backray.onrender.com/api/calendar', newEvent, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setCalendarData([...calendarData, data]);
      setSelectedDateEvents([...selectedDateEvents, data]);
    } catch (error) {
      console.error('Error adding event:', error);
    } finally {
      setIsModalVisible(false);
    }
  };

  const handleDeleteEvent = async (eventId: string) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`https://backray.onrender.com/api/calendar/${eventId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const updatedCalendarData = calendarData.filter(event => event._id !== eventId);
      const updatedSelectedDateEvents = selectedDateEvents.filter(event => event._id !== eventId);
      setCalendarData(updatedCalendarData);
      setSelectedDateEvents(updatedSelectedDateEvents);
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  const dateCellRender = (value: Moment) => {
    const events = calendarData.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getDate() === value.date() &&
             eventDate.getMonth() === value.month() &&
             eventDate.getFullYear() === value.year();
    });

    return (
      <ul className="events">
        {events.map((event) => (
          <li key={event._id} onClick={() => handleDateSelect(value)}>
            <Badge status={event.type} text={event.content} />
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <Calendar dateCellRender={dateCellRender} onSelect={handleDateSelect} />
      <Modal
        title="Events"
        visible={isModalVisible}
        onCancel={handleCloseModal}
        footer={null}
      >
        <List
          itemLayout="horizontal"
          dataSource={selectedDateEvents}
          renderItem={(event) => (
            <List.Item
              actions={[<Button type="link" onClick={() => handleDeleteEvent(event._id)}>Delete</Button>]}
            >
              <List.Item.Meta
                title={<Badge status={event.type} text={event.content} />}
              />
            </List.Item>
          )}
        />
        <Form layout="vertical" onFinish={handleFormSubmit}>
          <Form.Item name="type" label="Type" rules={[{ required: true, message: 'Please select the type' }]}>
            <Select placeholder="Select type">
              <Option value="success">success</Option>
              <Option value="warning">warning</Option>
              <Option value="error">error</Option>
            </Select>
          </Form.Item>
          <Form.Item name="content" label="Content" rules={[{ required: true, message: 'Please enter the content' }]}>
            <Input placeholder="Enter content" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">Add Event</Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default CalendarComponent;
