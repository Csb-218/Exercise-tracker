import React, { useEffect , useState } from 'react'
import axios from 'axios';


const CreateUser = () => {

  const [users,setusers]=useState([])

  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_BASE_URL}/exercises`)
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
              return (<div key={users.indexOf(item)}>{`${users.indexOf(item) + 1}﹚`} {item.username}</div>)

            })
          }
        </div>
      </div>
    </>
  )
}

export default CreateUser