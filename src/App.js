import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import  Projects from './components/Projects/projects';
import InsertProject from './components/Projects/insertProject';
import UpdateProject from './components/Projects/updateProject';
import ThemeSwitcher from './components/switcher'
import Boot from './components/boot'
import Supervisors from './components/supervisors/supervisors'
import logo from './logo.svg';
import './App.css';
import AddSupervisor from './components/supervisors/addsupervisor';
import Reports from './components/reports/reports';

function App() {
  return (
    <div className="App">

     <Switch>
        <Route path="/" exact component={(Home)} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/supervisors" exact component={Supervisors} />
          <Route path="/switch" exact component={ThemeSwitcher} />
          <Route path="/boot" exact component={Boot} />
          <Route path="/supervisors/add" exact component={AddSupervisor} />
          <Route path="/reports" exact component={Reports} />

          <Route path="/projectform" exact component={InsertProject} />
          <Route path="/updateproject/:id" exact component={UpdateProject} />


     </Switch>

    </div>
  );
}

export default App;
