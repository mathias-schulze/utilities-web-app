import React, { useState } from 'react';
import './App.css';
import { AppBar, Tabs, Tab } from '@material-ui/core'
import { TabContext, TabPanel } from '@material-ui/lab'
import { ShowChart, EmojiObjects, Whatshot } from '@material-ui/icons'

function App() {

  const [activeTab, setActiveTab] = useState('stats');

  return (
    <div className="App">
      <TabContext value={activeTab}>
        <AppBar position="static">
          <Tabs onChange={(e,v) => {setActiveTab(v)}}>
            <Tab label="Auswertung" icon={<ShowChart/>} value="stats"/>
            <Tab label="Strom" icon={<EmojiObjects/>} value="power"/>
            <Tab label="Gas" icon={<Whatshot/>} value="gas"/>
          </Tabs>
        </AppBar>
        <TabPanel value="stats">Auswertung</TabPanel>
        <TabPanel value="power">Strom</TabPanel>
        <TabPanel value="gas">Gas</TabPanel>
      </TabContext>
    </div>
  );
}

export default App;
