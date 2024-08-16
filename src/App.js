import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useParams } from "react-router-dom";
const App = () => {
  const [data, Setdata] = useState([]);
  const [records, Setrecords] = useState([]);
  const id = useParams();
  useEffect(() => {
    axios.get("http://localhost:3030/users").then((res) => {
      Setdata(Object.keys(res.data[0]));
      Setrecords(res.data);
    });
  }, []);

  return (
    <div className="container mt-5">
      <div className="text-end">
        <Link to="/Add" className="btn btn-primary">
          Add+
        </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            {data.map((c, i) => (
              <th key={i}>{c}</th>
            ))}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {records.map((c, i) => (
            <tr key={i}>
              <td>{c.id}</td>
              <td>{c.name}</td>
              <td>{c.email}</td>
              <td>{c.profession}</td>
              <td>
                <Link to={`update/${c.id}`} className="btn btn-sm btn-success">
                  Update
                </Link>
                <button
                  className="btn btn-sm btn-danger ms-1 "
                  onClick={(e) => handleSubmit(c.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  function handleSubmit(id) {
    const conf = window.confirm("Data has to be delete");
    if (conf) {
      axios.delete("http://localhost:3030/users/" + id).then((res) => {
        alert("Date Deleted Successfully");
        window.location.reload(true)
      });
    }
  }
};

export default App;
