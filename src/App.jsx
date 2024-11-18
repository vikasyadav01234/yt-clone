import React from 'react';
import Navbar from './components/Navbar.jsx';
import Sidebar from './components/Sidebar.jsx';
import { useAuth } from './context/AuthProvider.jsx';
function App(){
  const {loading, data} = useAuth();
  console.log(loading);
  console.log(data);
  return (
    <div><Navbar/>
    <Sidebar/>
    </div>

    )
}
export default App;