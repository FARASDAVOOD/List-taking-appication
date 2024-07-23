import logo from './logo.svg';
import './App.css';
import Main from './componets/Main';
import Form from './componets/Form';
import Main1 from './componets/Main';
import { BrowserRouter as Router,Route,Routes, BrowserRouter } from 'react-router-dom';
import EditForm from './componets/EditForm';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './componets/redux/FormSlice';

function App() {

  const {products} = useSelector((state)=>state.form)

  const dispatch = useDispatch()

  useEffect(()=>{

    dispatch(fetchUsers())

  },[products])
  return (
    <div className="App">
      
<Router>
  <Routes>


  <Route path='/' element={<Main/>}/>
  <Route path="/form" element={<Form/>}/>
  
  </Routes>
</Router>


     
    </div>
  );
}

export default App;
