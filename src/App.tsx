import React, { useState } from 'react';
import './App.css';
import { AppBar, Tabs, Tab } from '@material-ui/core'
import { ShowChart, EmojiObjects, Whatshot } from '@material-ui/icons'
import ReadingList from './features/ReadingList'
import moment from 'moment'
import 'moment/locale/de'
import Box from '@material-ui/core/Box';

moment.locale('de')

export const POWER = "power";
export const GAS = "gas";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


function App() {

  const [value, setValue] = useState(0);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="App">
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Auswertung" icon={<ShowChart/>} {...a11yProps(0)} />
          <Tab label="Strom" icon={<EmojiObjects/>} {...a11yProps(1)} />
          <Tab label="Gas" icon={<Whatshot/>} {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Auswertung
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ReadingList type={POWER}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ReadingList type={GAS}/>
      </TabPanel>
    </div>
  );
}

export default App;
