import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { healthData } from "../data/heathData.js";

const HealthStatusCards = () => {
  return (
    <div className="space-y-2  ">
      {healthData.map((data) => (
        <Card
          key={data.id}
          className="bg-white shadow-lg rounded-lg flex items-center py-10 h-20 w-40 "
        >
          <CardContent className="items-center">
            <div className="flex">
            <span className="text-2xl mr-4 ">{data.icon}</span>
              <Typography className="text-lg">{data.label}</Typography>
              </div>
            <div>
              <Typography variant="body2" className="text-green-600">
                {data.status}
              </Typography>
              <Typography variant="caption" className="text-gray-500">
                Date: {data.date}
              </Typography>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default HealthStatusCards;
