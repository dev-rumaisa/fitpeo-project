import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import SimpleAppointmentCard from './SimpleAppointmentCard';
import { upcomingSchedule } from '../data/upcomingSchedule';

const UpcomingSchedule = () => {
  const groupedSchedule = upcomingSchedule.reduce((acc, item) => {
    if (!acc[item.day]) acc[item.day] = [];
    acc[item.day].push(item);
    return acc;
  }, {});

  return (
    <Card className="bg-white shadow-lg rounded-lg -mt-[21rem]">
      <CardContent className='absolute left-[48rem] py-10'>
        <Typography variant="h6" className="mb-4">
          THE UPCOMING SCHEDULE
        </Typography>
        {Object.keys(groupedSchedule).map((day, index) => (
          <div key={index} className="mb-4">
            <Typography variant="body2" className="text-gray-600 mb-2">
              {day}
            </Typography>
            <div className="grid grid-cols-2 gap-2 w-[30rem] h-16 rounded-lg">
              {groupedSchedule[day].map((appointment, idx) => (
                <SimpleAppointmentCard key={idx} appointment={appointment} />
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default UpcomingSchedule;