import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { calendarAppointments } from '../data/calendarAppoinments.js';

const CalendarView = () => {
  return (
    <Card className="bg-white shadow-lg rounded-lg h-40 w-[30rem] -ml-36 p-5  ">
      <CardContent>
        <Typography variant="h6" className="mb-4">
          October 2021  
        </Typography>
        <div className="grid grid-cols-7 gap-2 text-center">
          {calendarAppointments.map((day, index) => (
            <div key={index} className="p-2">
              <Typography variant="body2" className="text-gray-600">
                {day.day}
              </Typography>
              {day.appointments.map((appointment, idx) => (
                <Typography key={idx} variant="caption" className="text-blue-600">
                  {appointment.time}
                </Typography>
              ))}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CalendarView;