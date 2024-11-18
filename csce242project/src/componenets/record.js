import '../css/record.css';
import React, { useState } from "react";
import Popout from "react-popout";

const Record = ({
    recordImage, recordTitle, recordDesc,
    recordHolder, holderImage, holderDesc,
    prevHolder, prevImage, prevDesc
}) => {
    const [isPopoutOpen, setIsPopoutOpen] = useState(false);

    const togglePopout = () => setIsPopoutOpen(!isPopoutOpen);

    return (
        <>
            <section className="item">
                <div onClick={togglePopout} className="record-section">
                    <img src={recordImage} alt={recordTitle} />
                    <h4>{recordTitle}</h4>
                    <p>{recordDesc}</p>
                </div>
            </section>
            {isPopoutOpen && (
                <Popout title="RecordHolders" onClose={togglePopout}>
                    <div className="columns">
                        <section className="one">
                            <h3>{recordHolder}</h3>
                            <p>{holderDesc}</p>
                        </section>
                        <section className="one">
    
                            <h3>{prevHolder}</h3>
                            <p>{prevDesc}</p>
                        </section>
                    </div>
                </Popout>
            )}
        </>
    );
};

export default Record;
