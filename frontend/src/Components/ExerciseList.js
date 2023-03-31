import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

const ExerciseList = () => {

  const navigate = useNavigate();
  const tableh = ['Username', 'Description', 'Activity', 'Duration', 'Date', 'Action'];
  const [exercise, setEx] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/exercises/')
      .then(response => setEx(response.data))
      .catch(err => console.log(err))
  }, [exercise])

  function deleteEx(id) {
    console.log(id);

    axios.delete(`http://localhost:3001/exercises/${id}`)
      .then(response => console.log('Deleted exercise'))
      .catch(err => console.log(err));

  }

  return (
    <div className="mx-2 my-2">
      <table className=" table-auto w-full ">
        <thead>
          <tr className="bg-teal-700 ">
            {
              tableh.map((item) => <th className=" border-x-4 border-black">{item}</th>)
            }
          </tr>
        </thead>
        <tbody>

          {
            exercise.map((item) => {
              return (
                <tr >
                  <td key={item.id}>{item.username}</td>
                  <td key={item.id}>{item.description}</td>
                  <td key={item.id}>{item.activity}</td>
                  <td key={item.id}>{item.duration}</td>
                  <td key={item.id}>{item.date.slice(0, 10)}</td>
                  <td >
                    <tr >
                      <td className="px-1 border-black  border-t-0 hover:underline "><button onClick={()=>navigate(`/edit/${item._id}`)} className='button bg-lime-500 hover:bg-lime-700'>Edit</button></td>
                      <td className="px-1 border-black  border-t-0 hover:underline ">|</td>
                      <td className="px-1 border-black  border-t-0 "><button onClick={() => deleteEx(item._id)} className='button bg-red-500 hover:bg-red-700'>Delete</button></td>
                    </tr>
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