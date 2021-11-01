/**import logo from './logo.svg';*/
import './App.css';
/** */
import { Switch } from '@mui/material';

function App() {
  return (
    <div className="App">
      <header className="App-header">
<div className="SwitchBoard">
<div className="SwitchRow"> <div className="col6">CHEQ</div> <Switch color="success" defaultChecked /> </div>
<div className="SwitchRow"> <div className="col6">CHM</div> <Switch color="success" defaultChecked /> </div>
<div className="SwitchRow"> <div className="col6">Harvesting</div>  <Switch color="success" defaultChecked /> </div>
<div className="SwitchRow"> <div className="col6">Topography</div>  <Switch color="success" defaultChecked /> </div>
<div className="SwitchRow"> <div className="col6">DFM</div>  <Switch color="success" defaultChecked /> </div>
<div className="SwitchRow"> <div className="col6">LCM</div> <Switch color="success" defaultChecked /> </div>
<div className="SwitchRow"> <div className="col6">INTViewer</div> <Switch color="success" defaultChecked /> </div>
</div>
      </header>
    </div>
  );
}

export default App;
