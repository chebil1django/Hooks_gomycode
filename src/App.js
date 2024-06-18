
import React from 'react';
import Products from './Productus';
import './App.css';
import {Routes,Route} from "react-router-dom"
import { BrowserRouter } from 'react-router-dom';
import Detail from './componants/Detail';
import MovieCard from './componants/MovieCard';
import Header from './layout/Header'
function App() {
  return (
    <div className="content">
     
         <Header/>
         <main>
        <Routes>
        {/* <Route path="/" element={<h1>Welcome to Film box </h1>}/> */}
        <Route path="/" element={<Products/>}/>
        <Route path="/:id" element={<Detail />}/>
        <Route path="/cart" element={<MovieCard/>}/>
      
      </Routes>
      </main>
    </div>
  );
}
export default App;
