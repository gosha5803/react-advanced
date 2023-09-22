import React from 'react';
import './App.css';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import { useActions } from './hooks/useActions';
import { IUser } from './models/user';

function App() {
  const {setAuth, setUser} = useActions()

  React.useEffect(() => {
    if (localStorage.getItem('username')) {
      setUser({username:localStorage.getItem('username' || '')} as IUser)
      setAuth(true)
    }
  },[])

  return (
    <div className="App">
      <NavBar/>
        <AppRouter/>
      
    </div>
  );
}

export default App;
