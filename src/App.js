import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './routes/Homepage/Homepage.route';
import Retreat_page from './routes/Retreat_page/Retreat_page.route';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage lang="english"/>}/>
        <Route path="/english" element={<Homepage lang="english"/>}/>
        <Route path="/gm" element={<Homepage lang="german"/>}/>
        <Route path="/sp" element={<Homepage lang="spanish"/>}/>
        <Route path="/Retreat" element={<Retreat_page lang="english"/>}/>
        <Route path="english/Retreat" element={<Retreat_page lang="english"/>}/>
        <Route path="/gm/Retreat" element={<Retreat_page lang="german"/>}/>
        <Route path="/sp/Retreat" element={<Retreat_page lang="spanish"/>}/>
      </Routes>
    </div>
  );
}

export default App;
