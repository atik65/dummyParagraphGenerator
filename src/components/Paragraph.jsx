import React, { useState } from "react";
import paraData from "./paraData";

const Paragraph = () => {
  const [value, setValue] = useState("");
  const [para, setPara] = useState([]);

  const handleChange = (e) => {
    const inputValue = parseInt(e.target.value);
    if (inputValue < 0) {
      setValue(0);
    } else {
      setValue(inputValue);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newArray = paraData.slice(0, value);
    if (value === "") {
      newArray = paraData;
    }
    if (value === 0) {
      newArray = [];
    }
    setPara(newArray);
  };

  return (
    <>
      <div className="container text-center mt-5">
        <h1 className="display-4">Dummy Paragraph Generator</h1>
        <div className="row mt-5 px-5">
          <form action="" onSubmit={handleSubmit}>
            <div className="form-group d-flex">
              <input
                type="number"
                className="form-control"
                id="para"
                aria-describedby="helpId"
                value={value}
                onChange={handleChange}
                placeholder="Number of Paragraph"
              />
              <button type="submit" className="btn btn-outline-primary">
                {" "}
                Generate{" "}
              </button>
            </div>
          </form>
        </div>

        <div className="row mt-5 px-5">
          {para.map((data, index) => {
            return (
              <div key={index} className="col-12 px-md-5 mt-4">
                <p> {data}</p>
              </div>
            );
          })}
        </div>

        <p>
          {value > paraData.length ? (
            <div className="alert alert-danger my-5" role="alert">
              <strong>You Have Reached the Limit of Highest ParaGraph</strong>
            </div>
          ) : (
            ""
          )}
        </p>
      </div>
    </>
  );
};

export default Paragraph;
