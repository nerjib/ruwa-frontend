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
import ReportDetails from './components/reports/reportDetails';
import LocalSup from './components/supervisors/localsupers'
import Analytics from './components/analytics/'
import Contractors from './components/contractors/contractors'
import AddContractor from './components/contractors/addcontractor';
import Paginat from './components/Projects/pagination';
import Login from './Login'
import SignOut from './signout';
import ProjectDetails from './components/Projects/projectdeails'
function App() {
  return (
    <div className="App">

     <Switch>
        <Route path="/home" exact component={(Home)} />
        <Route path="/" exact component={(Login)} />
        <Route path="/signout" exact component={(SignOut)} />

          <Route path="/projects" exact component={Projects} />
          <Route path="/supervisors" exact component={Supervisors} />
          <Route path="/switch" exact component={ThemeSwitcher} />
          <Route path="/boot" exact component={Boot} />
          <Route path="/supervisors/add" exact component={AddSupervisor} />
          <Route path="/reports" exact component={Reports} />
          <Route path="/reports/:id" exact component={ReportDetails} />
          <Route path="/projectform" exact component={InsertProject} />
          <Route path="/updateproject/:id" exact component={UpdateProject} />
          <Route path="/localsup/:id" exact component={LocalSup} />
          <Route path='/analytics' exact component={Analytics} />
          <Route path='/contractors' exact component={Contractors} />
          <Route path='/contractors/add' exact component={AddContractor} />
          <Route path='/paginat' exact component={Paginat} />
          <Route path='/projectdetails/:id' exact component={ProjectDetails}/>

     </Switch>

    </div>
  );
}

export default App;
