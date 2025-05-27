import React from 'react';
import { CssBaseline } from '@mui/material';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DashboardMainContent from './components/DashboardMainContent';
import './styles/App.css';

const App = () => {
  return (
    <>
      <CssBaseline />
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <DashboardMainContent />
        </div>
      </div>
    </>
  );
};

export default App;