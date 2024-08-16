import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Add = () => {
  const [inputdata, Setinputdata] = useState({
    name: "",
    email: "",
    profession: "",
  });
  const nav = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    axios.post("http://localhost:3030/users", inputdata).then((res) => {
      alert("Data Added Successfully");
      nav("/");
    });
  }

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-light p-5">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
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
};

export default Add;
