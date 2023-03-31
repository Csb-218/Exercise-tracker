import React,{useReducer,useEffect,useState} from 'react';
import axios from 'axios';
import {useParams,useNavigate} from 'react-router-dom';


const reducer = (formData,dispatchedObj) => {
  return({
    ...formData,
    [dispatchedObj.name]: dispatchedObj.value
  })
}

const EditExercise = () => {

  const [exercises,setExercises] = useState([]); 
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;

  const [formData, dispatch] = useReducer(reducer,{});

  useEffect(() => {
    axios.get(`http://localhost:3001/exercises/${id}`)
      .then(res => { 
        dispatch({name:'username' , value: res.data.username})
        dispatch({name:'description', value: res.data.description})
        dispatch({name:'activity', value: res.data.activityname})
        dispatch({name:'duration', value: res.data.duration})
        dispatch({name:'date',value: res.data.date.slice(0,10)})
      })
    }, [id])

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);

    axios.post(`http://localhost:3001/exercises/update/${id}`,formData)
    .then(console.log('Updated Exercise'))
    .catch(error => console.log(error));


  }

  useEffect(()=>{
    axios.get('http://localhost:3001/activity')
    .then(res => setExercises(res.data))
    .catch(error => console.log(error))
  },[])

  const handleChange = (event) => {
    dispatch(
      {
        name: event.target.name,
        value: event.target.value
      }
    );
    console.log(event.target.name,event.target.value);
  }

  return (
    <>
    <p className="m-4 text-2xl font-light">Edit Exercise Log</p>
    <form className="m-4" onSubmit={handleSubmit}>

        <div className="my-8">
          <label>Username:</label>
          <br/>
          <input type="text" name="username"  onChange={handleChange} value={formData.username }className="border-[0.5px] border-black rounded-lg w-4/12" required/>
        </div>

        <div className="my-8">
          <label>Activity:</label>
          <br/>
          <select name='activity' onChange={handleChange} required>
          <option value="" >Select an activity</option>
            {
              exercises.map(item => {
                return(<option value={item.activityname}>{item.activityname}</option>)
              })
            }
          </select>
        </div>

        <div className="my-8">
          <label>Description:</label>
          <br/>
          <textarea name="description"  onChange={handleChange}  value={formData.description} className="border-[0.5px] border-black rounded-lg w-8/12" required></textarea>
        </div>

        <div className="my-8">
          <label>Duration:</label>
          <br/>
          <input type="number" name="duration"  onChange={handleChange}  value={formData.duration } className="border-[0.5px] border-black rounded-lg" required />
        </div>

        <div className="my-8">
          <label>Date:</label>
          <br/>
          <input type="date" name="date"  onChange={handleChange}  value={formData.date} className="border-[0.5px] border-black rounded-lg" required/>
        </div>

        <button type="submit"  value="Save Changes" disabled={formData==={}} onClick={()=>setTimeout(()=>navigate('/'),1000)} className="button" >Save Changes</button>
        <input type="reset" className="bg-green-400  rounded-md py-2 px-2 mx-4 text-white"/>

      </form>
      </>
  )
}

export default EditExercise