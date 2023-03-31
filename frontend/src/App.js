import React from 'react';
import Navbar from './Components/Navbar';
import {Routes, Route} from "react-router-dom";
import ExerciseList from './Components/ExerciseList';
import EditExercise from './Components/EditExercise';
import User from './Components/Users';
import CreateExercise from './Components/CreateExercise';
import CreateActivity from './Components/CreateActivity';
import Exercises from './Components/Exercises';
import './App.css';


function App() {
  return (
    <>
      
        <Navbar />
        <Routes >
          <Route path="/" element={<ExerciseList />} />
          <Route path="/edit/:id" element={<EditExercise />} />
          <Route path="/log" element={<CreateExercise />} />
          <Route path="/user" element={<User />} />
          <Route path="/create" element={<CreateActivity />} />
          <Route path="/exercises" element={<Exercises />} />
          

        </Routes>
     
    
    
    </>
  );
}

export default App;