import React from 'react'
import Header from "./components/Header";
import Main from "./components/Main";
import Login from './components/login/Login';
import Baitonghop from './components/baitaptonghop/Baitonghop';
import Admin from './components/admin/Admin';



export default function App() {
  return (
    <div>App
      {/* <Header></Header>
      <Main></Main>
      <Login></Login> */}
      <Baitonghop></Baitonghop>
      <Admin></Admin>
    </div>
  )
}

