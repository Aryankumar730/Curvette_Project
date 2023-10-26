import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';
import MainSection from './components/MainSection/MainSection';



function App() {
  return (
    <BrowserRouter>
      <div className='h-full'>
        <div>
          <Navbar />
        </div>
        <div className='flex flex-row h-full'>
          <div className='min-h-full'>
            <Sidebar />
          </div>
          <div className=''>
            <Routes>
              <Route path="/"
                element={<><MainSection /></>} />
              <Route path="/skillstest"
                element={<><MainSection /></>} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
