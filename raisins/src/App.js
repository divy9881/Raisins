import React from 'react';
import { Layout, theme } from 'antd';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import RaisinsNavbar from './RaisinsNavbar'
import RaisinsSidebar from './RaisinsSidebar';
import RaisinsDashboard from './RaisinsDashboard';
import RaisinsRunCampaign from './RaisinsRunCampaign';

function App() {
  return (
    <div className="App" style={{ overflow: "hidden" }}>
      <RaisinsNavbar/>
      <Layout style={{ height: '100vh' }}>
        <RaisinsSidebar/>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<RaisinsDashboard/>}/>
            <Route exact path="/run-campaign" element={<RaisinsRunCampaign/>}/>
          </Routes>
        </BrowserRouter>
      </Layout>
    </div>
  );
}

export default App;
