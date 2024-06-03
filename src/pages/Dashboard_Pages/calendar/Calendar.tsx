import React, { useState, useEffect } from 'react';
import { Badge, Calendar, Modal, Form, Input, Select, Button, List, BadgeProps } from 'antd';
import type { Dayjs } from 'dayjs';
import axios from 'axios';
import { Moment } from 'moment';
import { SelectInfo } from 'antd/es/calendar/generateCalendar';
import { error } from 'console';

const { Option } = Select;

interface CalendarEvent {
  _id: string;
  date: string;
  type: 'success' | 'warning' | 'error';
  content: string;
}

const dummyData: CalendarEvent[] = [
  {
    _id: '1',
    date: '2023-10-26',
    type: 'success',
    content: 'Project deadline met',
  },
  {
    _id: '2',
    date: '2023-10-28',
    type: 'warning',
    content: 'Meeting with client, prepare presentation',
  },
  {
    _id: '3',
    date: '2023-11-01',
    type: 'error',
    content: 'Server maintenance, website unavailable',
  },
  {
    _id: '4',
    date: '2023-11-05',
    type: 'success',
    content: 'New product launch',
  },
  {
    _id: '5',
    date: '2023-11-10',
    type: 'warning',
    content: 'Team meeting, discuss project progress',
  }  
];

const CalendarComponent: React.FC = () => {
  const [calendarData, setCalendarData] = useState<CalendarEvent[]>(dummyData);
  const [selectedDateEvents, setSelectedDateEvents] = useState<CalendarEvent[]>([]);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const [workers, setWorkers] = useState<any[]>([]);
  const [selectedWorker, setSelectedWorker] = useState<string | null>(null);

  console.log(workers)

  useEffect(() => {
    const fetchWorkers = async () => {
      const authToken = localStorage.getItem("token");
      axios.get("https://backray.onrender.com/api/users/profile", {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((res)=>{
        setWorkers(res.data)
        console.log("workers ", res.data)
      })
      .catch((err)=>{
        console.log("error ", err)
      })
    }

    fetchWorkers()
  },[])

  const getListData = (value: Dayjs) => {
    const date = `${value.year()}-${value.month() + 1}-${value.date()}`;
    const ListData = calendarData.filter((event) => event.date === date);
    return ListData
  }

  useEffect(() => {
    const fetchCalendarData = async () => {
      try {
        const token = localStorage.getItem('token');
        const { data } = await axios.get('http://localhost:8000/api/calendar/user', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        console.log("data ", data)
        setCalendarData(dummyData);
      } catch (error) {
        console.error('Error fetching calendar data:', error);
      }
    };

    fetchCalendarData();
  }, []);

  const handleDateSelect = (date: Dayjs, selectInfo: SelectInfo) => {
    if(selectInfo.source !== "date") return
    const events = calendarData.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getDate() === date.date() &&
             eventDate.getMonth() === date.month() &&
             eventDate.getFullYear() === date.year();
    });

    setSelectedDateEvents(events);
    setSelectedDate(`${date.year()}-${date.month() + 1}-${date.date()}`);
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

      axios.post('http://localhost:8000/api/calendar', newEvent, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then((res)=>{
        // el res.data hya el return json mta3 el api lazem tkoun de type CalendarEvent
        setCalendarData([...calendarData, res.data]);
        setSelectedDateEvents([...selectedDateEvents, res.data]);
      })
      .catch(error=>{
        console.error('Error adding event:', error);
      })
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

  const dateCellRender = (value: Dayjs) => {
    if(selectedWorker === null) return
    const listData = getListData(value);

    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type as BadgeProps['status']} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <div className='w-[400px]'>
        <Select className='w-full' placeholder="Select worker" onSelect={setSelectedWorker}>
          {workers.map((user) => <Option value={user._id}>{user.email}</Option>)}
        </Select>
      </div>
      <Calendar onSelect={handleDateSelect} cellRender={(date, info)=>{
        if(info.type === "date"){
          return dateCellRender(date)
        }
        return null
      }} />
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
