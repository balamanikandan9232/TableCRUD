import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {
  const [inputdata, Setinputdata] = useState([])
  const{id}= useParams()
  const nav = useNavigate()
 
  useEffect(()=>{
   axios.get("http://localhost:3030/users/"+id)
   .then(res=>Setinputdata(res.data))
  },[])


function handleSubmit(event){
 event.preventDefault()
 axios.put("http://localhost:3030/users/" +id ,inputdata)
 .then((res)=>{
  alert("Data Updated Successfully")
  nav("/")
 })
}
  

  return (
    
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
    <div className="w-50 border bg-light p-5">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">ID:</label>
          <input
            type="text"
            disabled name="name"
            className="form-control"
              value={inputdata.id}
          />
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={inputdata.name}

            onChange={(e) =>
              Setinputdata({ ...inputdata, name: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="name">Email:</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={inputdata.email}

            onChange={(e) =>
              Setinputdata({ ...inputdata, email: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="name">profession</label>
          <input
            type="text"
            name="profession"
            className="form-control"
            value={inputdata.profession}

            onChange={(e) =>
              Setinputdata({ ...inputdata, profession: e.target.value })
            }
          />
        </div>
        <br />
        <button className="btn btn-info">Submit</button>
      </form>
    </div>
  </div>
);
}

export default Update