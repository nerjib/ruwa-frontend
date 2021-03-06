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
//import Login2 from './login2'
import SignOut from './signout';
import ProjectDetails from './components/Projects/projectdeails'
import WeeklyReports from './components/reports/weeklyreports';
import WeeklyReportDetails from './components/reports/weeklyreportdetails';
import DailyMap from './components/map/dailymap';
import UpdateSupervisor from './components/supervisors/updatesupervisor';
import ProjectsSupervisors from './components/Projects/projectsSupervisors'
import ReportsView from './components/reports/reportView'
import AddProjectsSupervisor from './components/Projects/addProjectsSupervisor'
import UpdateContractors from './components/contractors/updateContractors'
import Performance from './components/supervisors/performance'
import PhaseSupervisors from './components/supervisors/phaseSupervisors'
import SupervisorDetails from './components/supervisors/supervisorDetails'
import PhaseSupervisors7 from './components/supervisors/phase7sup'
import Monitors from './components/reports/monitors';
import Print from './components/reports/Monitoring/watreports'
import ProjectsMap from './components/map/projectsMap'
import WatReports from './components/reports/Monitoring/watreports';
import SolarEvalReports from './components/reports/Monitoring/solarreports';
import SanEvalReports from './components/reports/Monitoring/sanreports';
import HomePage from './components/homepage';
import Maps from './components/map/maps';
import SiteMap from './components/map/sitemap';
import FunctionalityReports from './components/reports/functionality/functionality';
import FunctionalityDetails from './components/reports/functionality/functionalitydetails';

function App() {
  return (
    <div className="App">

     <Switch>
        <Route path="/home" exact component={(Home)} />
        <Route path="/" exact component={(Login)} />
        <Route path="/signout" exact component={(SignOut)} />

          <Route path="/projects" exact component={Projects} />
          <Route path="/allsupervisors" exact component={Supervisors} />
          <Route path="/supervisors" exact component={PhaseSupervisors} />
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
          <Route path='/weeklyreports' exact component={WeeklyReports}/>
          <Route path='/weeklyreportdetails/:id' exact component={WeeklyReportDetails}/>
          <Route path='/dailymap' exact component={DailyMap}/>
          <Route path='/updatesupervisor/:id' exact component={UpdateSupervisor}/>
          <Route path='/projectsupa' exact component={ProjectsSupervisors}/>
          <Route path='/reportsview' exact component={ReportsView}/>
          <Route path='/addprojectssupervisor' exact component={AddProjectsSupervisor}/>
          <Route path='/updatecontractor/:id' exact component={UpdateContractors}/>
          <Route path='/performance' exact component={Performance}/>
          <Route path='/supervisor/:id' exact component={SupervisorDetails}/>
          <Route path="/supervisors7" exact component={PhaseSupervisors7} />
          <Route path="/monitors" exact component={Monitors} />
          <Route path="/print/:id" exact component={Print} />
          <Route path="/pmap" exact component={ProjectsMap} />
          <Route path="/waterevalreport/:id" exact component={WatReports} />
          <Route path="/solarevalreport/:id" exact component={SolarEvalReports} />
          <Route path="/sanevalreport/:id" exact component={SanEvalReports} />
          <Route path="/newhome"  component={HomePage}/>
          <Route path="/mapp"  component={Maps}/>
          <Route path="/sitemap/:id"  component={SiteMap}/>
          <Route path="/functionality"  component={FunctionalityReports}/>
          <Route path="/functionalitydetails/:id"  component={FunctionalityDetails}/>





     </Switch>

    </div>
  );
}

export default App;
