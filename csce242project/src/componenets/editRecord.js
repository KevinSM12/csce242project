import "../css/Dialog.css";
import React, { useState } from "react";

const EditRecord = (props) => {
  const [inputs, setInputs] = useState({
    _id: props._id,
    name: props.name,
    size: props.size,
    bedrooms: props.bedrooms,
    bathrooms: props.bathrooms,
    prev_img: props.main_image,
  });
  const [result, setResult] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleImageChange = (event) => {
    const name = event.target.name;
    const value = event.target.files[0];
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const onSubmit = async(event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    console.log(...formData);
    const response = await fetch(`https://localhost:3001/api/records/${props._id}`,{
      method:"PUT",
      body:formData
    });
    // const response = await fetch(`https://csce242backend.onrender.com/api/records/${props._id}`,{
    //   method:"PUT",
    //   body:formData
    // });

    if(response.status === 200){
      setResult("Record successfully updated");
      event.target.reset();
      props.updateHouse(await response.json());
      props.closeDialog();
    } else {
      setResult("Error edditing your record. We're sorry");
    }
  };

  return (
    <div id="edit-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
            onClick={props.closeDialog}
          >
            &times;
          </span>
          <form id="edit-property-form" onSubmit={onSubmit}>
            <p id="header">
              Edit Record
            </p>
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
                <img
                  id="img-prev"
                  src={
                    inputs.img != null
                      ? URL.createObjectURL(inputs.img)
                      : inputs.prev_img != null
                      ? `http://localhost:3001/images/${inputs.prev_img}`
                      : ""
                  }
                  alt=""
                />
              </p>
              <p id="img-upload">
                <label htmlFor="img">Upload Image:</label>
                <input
                  type="file"
                  id="img"
                  name="img"
                  onChange={handleImageChange}
                  accept="image/*"
                />
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

export default EditRecord;