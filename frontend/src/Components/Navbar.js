import React from 'react'

import { Link} from "react-router-dom";


const Navbar = () => {
  return (
    <div className="bg-slate-800 mx-3 h-10 p-2 flex gap-6">
        <p className="text-xl">ExerTracker</p>
            <Link to="/">Exercise Logs</Link>
            <Link to="/log">Log Exercise </Link>
            <Link to="/user" > User</Link>
            <Link to="/create">Create Exercise</Link>
            <Link to="/exercises">Exercises</Link>
    </div>
  )
}

export default Navbar