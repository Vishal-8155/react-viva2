import './App.css';
import { Route,Routes } from 'react-router-dom';
import Form from './Component/Form';
import Home from './Component/Home';

function App() {
  return (
    <div>
      <div>
        <Routes>
          <Route path='/' element={<Home />}>Home</Route>
          <Route path='/form' element={<Form />}>Form</Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
