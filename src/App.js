import logo from './logo.svg';
import './App.css';
import Dashboard from './component/Dashboard';
import PartnerApp from './component/PartnerApp';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path='/*' element={<Dashboard />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/partner-app' element={<PartnerApp />} />
      </Routes>
    </div>
  );
}

export default App;
