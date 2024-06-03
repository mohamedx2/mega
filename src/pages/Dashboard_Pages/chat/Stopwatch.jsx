// src/Stopwatch.js
import React, { useState, useRef } from 'react';
import { Button } from 'antd';
import { PlayCircleOutlined, PauseCircleOutlined, ReloadOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 40vh;
  background-color: #f0f2f5;
`;

const TimeDisplay = styled.div`
  font-size: 48px;
  margin-bottom: 24px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
`;

const PausedTimes = styled.div`
  margin-top: 24px;
  font-size: 16px;
`;

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [pausedTimes, setPausedTimes] = useState([]);
  const intervalRef = useRef(null);
  const startTimeRef = useRef(null);
  const pauseTimeRef = useRef(null);

  const start = () => {
    if (!running) {
      setRunning(true);
      startTimeRef.current = Date.now() - time * 1000;
      intervalRef.current = setInterval(() => {
        setTime(Math.floor((Date.now() - startTimeRef.current) / 1000));
      }, 1000);
    }
  };

  const stop = () => {
    if (running) {
      clearInterval(intervalRef.current);
      setRunning(false);
    }
  };

  const reset = () => {
    clearInterval(intervalRef.current);
    setTime(0);
    setRunning(false);
    setPausedTimes([]);
  };

  const pause = () => {
    if (running) {
      clearInterval(intervalRef.current);
      setRunning(false);
      pauseTimeRef.current = Date.now();
    } else {
      const pauseDuration = Math.floor((Date.now() - pauseTimeRef.current) / 1000);
      setTime(time + pauseDuration);
      setRunning(true);
      intervalRef.current = setInterval(() => {
        setTime(time + Math.floor((Date.now() - startTimeRef.current) / 1000));
      }, 1000);
    }
  };

  const formatTime = (time) => {
    const getSeconds = `0${time % 60}`.slice(-2);
    const minutes = `${Math.floor(time / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(time / 3600)}`.slice(-2);

    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };

  return (
    <Container>
      <TimeDisplay>{formatTime(time)}</TimeDisplay>
      <ButtonContainer>
        {running ? (
          <Button type="primary" onClick={pause} icon={<PauseCircleOutlined />} />
        ) : (
          <Button type="primary" onClick={start} icon={<PlayCircleOutlined />} />
        )}
        <Button onClick={stop} icon={<PauseCircleOutlined />} disabled={!running} />
        <Button onClick={reset} icon={<ReloadOutlined />} />
      </ButtonContainer>
      {pausedTimes.length > 0 && (
        <PausedTimes>
          <h3>Paused Times:</h3>
          {pausedTimes.map((pausedTime, index) => (
            <div key={index}>{formatTime(pausedTime)}</div>
          ))}
        </PausedTimes>
      )}
    </Container>
  );
};

export default Stopwatch;
