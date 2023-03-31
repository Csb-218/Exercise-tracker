import React, { useEffect , useState } from 'react'
import axios from 'axios';


const CreateUser = () => {

  const [users,setusers]=useState([])

  useEffect(()=>{
    axios.get('http://localhost:3001/exercises')
    .then(res => setusers(res.data))
    .catch(err => console.log(err))
  },[])
  return (
    <>
      <div className='relative left-1/4 top-4'>
        <p className="m-4 text-2xl font-light">Logged Users</p>
        <div className="m-4">
          {
            users.map((item) => {
              return (<div>{`${users.indexOf(item) + 1}﹚`} {item.username}</div>)

            })
          }
        </div>
      </div>
    </>
  )
}

export default CreateUser