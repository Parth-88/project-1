import React from 'react';
import { CssBaseline } from '@mui/material';
import {Route,Routes } from 'react-router-dom';
import Home from './Home';
import Actors from './components/Actors/Actors';
import Movies from './components/Movies/Movies';
import Movieinfo from './components/Movieinfo/Movieinfo';
import Profile from './components/Profile/Profile';
import Navbar from './components/NavBar/Navbar';




const App = () => (

    <div>
        <CssBaseline/>
        <Navbar/>
        <main>
            <>
            <Routes>

            <Route exact path="/" element={<Home />} /> 
            <Route path="/Actors/:id" element={<Actors />} />
            <Route exact path="/Movieinfo" element={<Movieinfo />} /> 
            <Route exact path="/Movies" element={<Movies />} /> 
            <Route exact path="/Profile" element={<Profile />} /> 
            </Routes>
            </>
        </main>



    </div>
);

export default App;