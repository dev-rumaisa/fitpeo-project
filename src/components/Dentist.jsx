import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import SimpleAppointmentCard from './SimpleAppointmentCard';
import { dent } from '../data/dentist';
const Dentist = () => {
  const groupedSchedule = dent.reduce((acc, item) => {
    if (!acc[item.day]) acc[item.day] = [];
    acc[item.day].push(item);
    return acc;
  }, {});

  return (
    <Card className="shadow-lg rounded-lg  -mt-52">
      <CardContent className='absolute left-[48rem]'>
        {Object.keys(groupedSchedule).map((day, index) => (
          <div key={index} className="mb-4">
            <Typography variant="body2" className="text-gray-600 mb-2">
              {day}
            </Typography>
            <div className="grid grid-cols-2  gap-2 w-[30rem] h-20 rounded-lg">
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

export default Dentist;