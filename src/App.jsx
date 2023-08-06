import React from 'react';
import Button from './components/Button'
import Tooltip from './components/Tooltip'
import './App.css'

const App = () => {
  return (
    <div className="container">
      <div style={{ padding: '50px' }}>
        <Tooltip position="top" text="This is a tooltip">
          <Button text="Hover Me" />
        </Tooltip>&nbsp;&nbsp;
        <br /><br /><br />
        <Tooltip position="bottom" text="This is another tooltip">
          <Button text="Hover Again" />
        </Tooltip>&nbsp;&nbsp;
        <br /><br /><br />
        <Tooltip position="left" text="This is a tooltip on the left">
          <Button text="Hover Left" />
        </Tooltip>&nbsp;&nbsp;
        <br /><br /><br />
        <Tooltip position="right" text="This is a tooltip on the right">
          <Button text="Hover Right" />
        </Tooltip>
      </div>
    </div>
  );
};

export default App;





