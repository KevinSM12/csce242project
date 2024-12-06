import "../css/Dialog.css";
import React, { useState } from "react";

const RemoveRecord = (props) => {
  const [result, setResult] = useState("");

  // const RemoveRecord = async() => {
  //   const response = await fetch(`https://loaclhost:3001/api/records/${props._id}`,{
  //    method:"DELETE"
  //   });
  const RemoveRecord = async() => {
   const response = await fetch(`https://csce242backend.onrender.com/api/records/${props._id}`,{
    method:"DELETE"
   });

   if(response.status === 200){
    setResult("Record successfully delete");
    props.hideRecord();
    props.closeDialog();
   } else {
    setResult("Sorry, we couldn't delete your record at this time.");
   }
  };

  return (
    <div id="delete-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
            onClick={props.closeDialog}
          >
            &times;
          </span>
          <div id="delete-content">
            <h3>Are you sure you want to delete the {props.name}</h3>
            <section>
              <button onClick={props.closeDialog}>No</button>            
              <button onClick={RemoveRecord}>Yes</button>
            </section>
            <span>{result}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoveRecord;