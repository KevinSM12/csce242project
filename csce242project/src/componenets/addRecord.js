import "../css/Dialog.css";
import React, { useState } from "react";

const AddRecord = (props) => {
  const [inputs, setInputs] = useState({});
  const [result, setResult] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values)=>({...values,[name]:value}));
  };

  const handleImageChange = (event) => {
    const name = event.target.name;
    const value = event.target.files[0];
    setInputs((values)=>({...values,[name]:value}));
  };

  const addToServer = async(event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    console.log(...formData);

    const response = await fetch("https://csce242backend.onrender.com",{
      method:"POST",
      body:formData
    });

    if(response.status == 200){
      setResult("Record successfully added!");
      props.showNewRecord(await response.json());
      event.target.reset();
      props.closeDialog();
      console.log(response.status);
      console.log(response);
    } else {
      setResult("Error adding record");
      console.log(response.status);
      console.log(response);
    }
  };


  return (
    <div id="add-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span id="dialog-close" className="w3-button w3-display-topright" onClick={props.closeDialog}>
            &times;
          </span>
          <form id="add-property-form" onSubmit={addToServer}>
            <p>
              <label htmlFor="title">Record title:</label>
              <input type="text" id="title" name="title" required value={inputs.title || ""} onChange={handleChange} />
            </p>
            <p>
              <label htmlFor="desc">Record Description:</label>
              <input type="text" id="desc" name="desc" required value={inputs.desc || ""} onChange={handleChange} />
            </p>
            <p>
              <label htmlFor="holder">Record Holder:</label>
              <input type="text" id="holder" name="holder" required value={inputs.holder || ""} onChange={handleChange} />
            </p>
            <p>
              <label htmlFor="holderDesc">Record Holder Description:</label>
              <input type="text" id="holderDesc" name="holderDesc" required value={inputs.holderDesc || ""} onChange={handleChange} />
            </p>
            <p>
              <label htmlFor="prev">Previous Record Holder:</label>
              <input type="text" id="prev" name="prev" required value={inputs.prev || ""} onChange={handleChange} />
            </p>
            <p>
              <label htmlFor="prevDesc">Previous Record Holder Description:</label>
              <input type="text" id="prevDesc" name="prevDesc" required value={inputs.prevDesc || ""} onChange={handleChange} />
            </p>

            <section className="columns">
              <p id="img-prev-section">
                <img id="img-prev" alt="" src={inputs.recordImage != null ? URL.createObjectURL(inputs.recordImage) : ""}/>
              </p>
              <p id="img-upload">
                <label htmlFor="cover-img">Cover Image:</label>
                <input type="file" id="img" name="cover-img" accept="image/*" onChange={handleImageChange}/>
              </p>
            </section>
            <section className="columns">
              <p id="img-prev-section">
                <img id="img-prev" alt="" src={inputs.holderImage != null ? URL.createObjectURL(inputs.holderImage) : ""}/>
              </p>
              <p id="img-upload">
                <label htmlFor="holder-img">Record Holder Image:</label>
                <input type="file" id="img" name="holder-img" accept="image/*" onChange={handleImageChange}/>
              </p>
            </section>
            <section className="columns">
              <p id="img-prev-section">
                <img id="img-prev" alt="" src={inputs.prevImage != null ? URL.createObjectURL(inputs.prevImage) : ""}/>
              </p>
              <p id="img-upload">
                <label htmlFor="prev-img">Previous Record Holder Image:</label>
                <input type="file" id="img" name="prev-img" accept="image/*" onChange={handleImageChange}/>
              </p>
            </section>
            <p>
              <button type="submit">Submit</button>
            </p>
            <p>{result}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddRecord;