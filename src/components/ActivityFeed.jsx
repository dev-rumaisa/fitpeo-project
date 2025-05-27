import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const ActivityFeed = () => {
  const days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
  const activityData = [5, 10, 3, 8, 4, 6, 2]; // Mock data for bar heights

  return (
    <Card className="bg-white shadow-lg rounded-lg w-[30rem] p-4">
      <CardContent>
        <Typography variant="h6" className="mb-4">
          ACTIVITY
        </Typography>
        <div className="flex justify-between items-end h-32">
          {activityData.map((height, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className="bg-blue-500 w-6 rounded-t-lg"
                style={{ height: `${height * 10}px` }}
              ></div>
              <Typography variant="caption" className="text-gray-600 mt-2">
                {days[index]}
              </Typography>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivityFeed;