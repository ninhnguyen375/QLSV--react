import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Axios from 'axios';
import Student from './views/Student';
import Report from './views/Report';
import ClassView from './views/ClassView';
import ImportFromExcel from './views/ImportFromExcel';

Axios.defaults.baseURL = 'http://localhost:3001';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Student} />
        <Route exact path="/classview" component={ClassView} />
        <Route exact path="/report" component={Report} />
        <Route exact path="/importfromexcel" component={ImportFromExcel} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
