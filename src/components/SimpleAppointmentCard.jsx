import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const SimpleAppointmentCard = ({ appointment }) => {
  return (
    <Card className="bg-blue-50 shadow-md rounded-lg p-2 flex items-center">
      <CardContent className="flex items-center">
        <span className="text-2xl mr-4">{appointment.icon}</span>
        <div>
          <Typography variant="body2" className="text-gray-700">
            {appointment.type}
          </Typography>
          {appointment.doctor && (
            <Typography variant="caption" className="text-gray-500">
              {appointment.doctor}
            </Typography>
          )}
          <Typography variant="body2" className="text-blue-600">
            {appointment.time}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default SimpleAppointmentCard;