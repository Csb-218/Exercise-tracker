import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

const ExerciseList = () => {

  const navigate = useNavigate();
  const tableh = ['Username', 'Description', 'Activity', 'Duration', 'Date', 'Action'];
  const [exercise, setEx] = useState([])
  const [deleted,setDeleted] = useState(false)

  useEffect(() => {
    // console.log(process.env.REACT_APP_BASE_URL)
    axios.get(`${process.env.REACT_APP_BASE_URL}/exercises`)
    .then(response => {
      console.log(response.data , exercise, exercise.length !== response.data)
      setDeleted(false)
      return (
        (exercise.length !== response.data.length) && setEx(response.data)
      )
    })
    .catch(err => console.log(err))

  }, [exercise,deleted])

  function deleteEx(id) {
    console.log(id);

    axios.delete(`${process.env.REACT_APP_BASE_URL}/exercises/${id}`)
      .then(response => {
        setDeleted(true)
        console.log('Deleted exercise',response)
      })
      .catch(err => console.error(err));

  }

  return (
    <div className="mx-2 my-2">
      <table className=" table-auto w-full ">
        <thead>
          <tr className="bg-teal-700 ">
            {
              tableh.map(
                (item) => 
                <th key={tableh.indexOf(item)} className=" border-x-4 border-black">
                  {item}
                </th>
              )
            }
          </tr>
        </thead>
        <tbody>

          {
            exercise.map((item) => {
              return (
                <tr key={item._id}>
                  <td >{item.username}</td>
                  <td >{item.description}</td>
                  <td >{item.activity}</td>
                  <td >{item.duration}</td>
                  <td >{item.date.slice(0, 10)}</td>
                  <td >
                    <table>
                      <tbody>

                        <tr >
                      <td className="px-1 border-black  border-t-0 hover:underline ">
                        <button onClick={()=>navigate(`/edit/${item._id}`)} className='button bg-lime-500 hover:bg-lime-700'>
                          Edit
                        </button>
                      </td>
                      <td className="px-1 border-black  border-t-0 hover:underline ">
                        |
                      </td>
                      <td className="px-1 border-black  border-t-0 ">
                        <button 
                          onClick={() => deleteEx(item._id)} 
                          className='button bg-red-500 hover:bg-red-700'>
                          Delete
                        </button>
                      </td>
                      </tr>
                      </tbody>
                      
                    </table>
                    
                  </td>

                </tr>
              )
            })
          }

        </tbody>
      </table>


    </div>
  )
}

export default ExerciseList