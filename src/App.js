import Home from './pages/Home';
import Mission from './pages/Mission';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/mission' element={<Mission/>} />
          </Routes>
        </Router>
      </div>
    </>);
}

export default App;
