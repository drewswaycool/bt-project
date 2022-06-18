import React from 'react'
import './App.scss';
import Card from './components/Card';
import OrganizationHeader from './components/OrganizationHeader';
import Repos from './components/Repos';
import Members from './components/Members';
import Events from './components/Events';
import WebHooks from './components/WebHooks';
import Issues from './components/Issues';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <OrganizationHeader endpoint="https://api.github.com/orgs/BoomTownROI" />
      <Dashboard>
      <Card title="Repos">
        <Repos endpoint="https://api.github.com/orgs/BoomTownROI/repos"/>
      </Card>
      <Card title="Events">
        <Events endpoint="https://api.github.com/orgs/BoomTownROI/events"/>
      </Card>
       <Card title="Members">
        <Members endpoint="https://api.github.com/orgs/BoomTownROI/members"/>
      </Card>
        <Card title="WebHooks">
          <WebHooks endpoint="https://api.github.com/orgs/BoomTownROI/hooks"/>
        </Card>
        <Card title="Issues">
          <Issues endpoint="https://api.github.com/orgs/BoomTownROI/issues"/>
        </Card>
      </Dashboard>
    </div>
  );
}

export default App;
