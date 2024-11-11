import '../css/recordspage.css';
import Record from "../componenets/record";
import React, {useState, useEffect} from "react";
import axios from "axios";

const Recordspage = ()=>{
    const [records, setRecords] = useState([]);

useEffect(() => {
    (async () => {
        try {
            const response = await axios.get("https://csce242backend.onrender.com/api/records");
            console.log("Full response data:", response.data);
            setRecords(response.data);
        } catch (error) {
            console.error("Error fetching records:", error);
        }
    })();
}, []);


    return (
        <div id="content">
            <h1>Elite Records</h1>
            <hr />
            <div id="records" className="container columns">
                {records.map((record)=>(
                    <Record
                    key={record.record_id}
                    recordImage={record.record_image} 
                    recordTitle={record.record_title}
                    recordDesc={record.record_description}
                    recordHolder={record.record_holder}
                    holderImage={record.record_holder_image}
                    holderDesc={record.record_holder_desc}
                    prevHolder={record.prev_record_holder}
                    prevImage={record.prev_record_holder_image}
                    prevDesc={record.prev_record_holder_desc}
                    />
                ))}
            </div>
            <hr />
        </div>
    );
}

export default Recordspage;