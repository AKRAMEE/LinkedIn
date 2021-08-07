import React from 'react';
import './App.css';
import { useSelector } from "react-redux";
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { selectUser } from './features/userSlice';
import Login from './Login';
function App() {
  const user = useSelector(selectUser);
  return (
    <div className="app">

      {!user ? <Login /> : (
        <div className="app__body">
          {/**Header*/}
          <Header />
          {/*sidebar */}
          <Sidebar />

          {/**feed */}
          <Feed />
          {/**widget */}
        </div>
      )}



    </div>
  );
}

export default App;