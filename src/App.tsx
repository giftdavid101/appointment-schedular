import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import DashboardLayout from './layout/dashboardLayout';
import Notfound from './pages/notfound';
import Calendar from './pages/manage/calendar';

const ManagePatients = lazy(() => import('./pages/manage/managePatients'));
const Settings = lazy(() => import('./pages/manage/settings'));
const TestComponents = lazy(() => import('./pages/testComponents'));

function App() {
  return (
    <div className="App">
      <DashboardLayout>
        <Suspense fallback={<div style={{ background: 'red' }}>Loading ankora...</div>}>
          <Switch>
            <Route exact path={'/patients'} component={ManagePatients} />
            <Route exact path={'/settings'} component={Settings} />
            <Route exact path={'/components'} component={TestComponents} />
            <Route exact path={'/'} component={Calendar} />
            <Route path={'*'} component={Notfound} />
          </Switch>
        </Suspense>
      </DashboardLayout>
    </div>
  );
}

export default App;
