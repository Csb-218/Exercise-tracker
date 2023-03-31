import React, { useEffect , useState } from 'react'
import axios from 'axios';


const Exercises = () => {

  const [exercises,setExercises]=useState([])

  useEffect(()=>{
    axios.get('http://localhost:3001/activity')
    .then(res => setExercises(res.data))
    .catch(err => console.log(err))
  },[])
  return (
    <>

    <div className='relative left-1/4 top-4'>
    <p className=" text-2xl font-light">Exercises</p>
      {
        exercises.map((item)  => {
          return(<div>{`${exercises.indexOf(item)+1}﹚`} {item.activityname}</div>)
        
         })
      }
    </div>
    </>
  )
}

export default Exercises