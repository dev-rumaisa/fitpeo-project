import React from "react";
import { Grid, IconButton, Typography } from "@mui/material";
import AnatomySection from "./AnatomySection";
import HealthStatusCards from "./HealthStatusCards";
import CalendarView from "./CalendarView";
import UpcomingSchedule from "./UpcomingSchedule";
import ActivityFeed from "./ActivityFeed";
import Dentist from "./Dentist";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

const DashboardMainContent = () => {
  return (
    <>
    <div className="p-6 bg-gray-50">
    <div className="flex">
      <Typography variant="h4" className="mb-6">
        Dashboard
      </Typography>
       <IconButton>
        <ArrowBack className="mb-6 ml-[46rem] text-blue-900" />
        <ArrowForward className="mb-6 text-blue-900" />
        </IconButton>
    </div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <AnatomySection />
        </Grid>
        <Grid item xs={12} md={4}>
          <HealthStatusCards />
        </Grid>
        <Grid item xs={12} md={4}>
          <CalendarView />
        </Grid>
        <Grid item xs={12} md={4}>
          {/* <UpcomingSchedule /> */}
          <ActivityFeed />
        </Grid>
        <Grid item xs={12} md={8}>
          <Dentist />
        </Grid>
        <Grid item xs={12} md={8}>
          <UpcomingSchedule />
        </Grid>
      </Grid>
    </div>
    </>
  );
};

export default DashboardMainContent;
