import React from 'react';
import './App.css';
import DashboardLayout from './layout/dashboardLayout';

function App() {
  return (
    <div className="App">
      <DashboardLayout>
        <div>
          <div style={{ height: 1000, background: 'blue' }}>section</div>
          <div style={{ height: 1000, background: 'grey' }}>section</div>
          <div style={{ height: 1000, background: 'cyan' }}>section</div>
        </div>
      </DashboardLayout>
    </div>
  );
}

export default App;
