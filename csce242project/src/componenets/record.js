import '../css/record.css';
import useState from "react";

const record = (record)=>{
    return(
        <><section className="item">
            <div className="record-section">
                <img src={record.recordImage} />
                <h4>{record.recordTitle}</h4>
                <p>{record.recordDescription}</p>
                
            </div>
        </section></>
    );
    /*
    const modalpopout = () => {
        console.log("Section clicked");
        <div className="modal">
            <div className="modal-content">
                <h2>{record.recordTitle}</h2>
                <div className="columns record-holders">
                    <section className="one holder-section">
                        <img src="../images/bill-russell.jpg" />
                        <h4>Current Record Holder: </h4>
                        <h3>Bill Russell - </h3>
                    </section>
                </div>
            </div>
        </div>
        const modal = document.createElement("div");
        modal.classList.add("modal");
        document.body.append(modal);
        
        const content = document.createElement("div");
        content.classList.add("modal-content");
        modal.append(content);
        
        const h2 = document.createElement("h2");
        h2.style.marginLeft = "20px";
        h2.innerHTML = record.record_title;
        content.append(h2);
        
        const recordHolders = document.createElement("div");
        recordHolders.classList.add("columns", "record-holders");
        content.append(recordHolders);
        
        const holders = record.record; 
        if (Array.isArray(holders) && holders.length > 0) {
            holders.forEach(holder => {
                const holderSection = document.createElement("section");
                holderSection.classList.add("one", "holder-section");
                recordHolders.append(holderSection);

                const holderImg = document.createElement("img");
                holderImg.src = holder.record_holder_image; 
                holderSection.append(holderImg);

                const h4 = document.createElement("h4");
                h4.innerHTML = "Current Record Holder:";
                holderSection.append(h4);

                const h3 = document.createElement("h3");
                h3.innerHTML = holder.record_holder;
                holderSection.append(h3);

                const p = document.createElement("p");
                p.innerHTML = holder.record_holder_desc; 
                holderSection.append(p);
            });
        }

        
        const prevHolderSection = document.createElement("section");
        prevHolderSection.classList.add("one", "holder-section");
        recordHolders.append(prevHolderSection);

        const prevHolderImg = document.createElement("img");
        prevHolderImg.src = holders[0].prev_record_holder_image; 
        prevHolderSection.append(prevHolderImg);

        const prevh4 = document.createElement("h4");
        prevh4.innerHTML = "Previous Record Holder:";
        prevHolderSection.append(prevh4);

        const prevh3 = document.createElement("h3");
        prevh3.innerHTML = holders[0].prev_record_holder;
        prevHolderSection.append(prevh3);

        const prevp = document.createElement("p");
        prevp.innerHTML = holders[0].prev_record_holder_desc; 
        prevHolderSection.append(prevp);

        modal.onclick = (e) => {
            if (e.target === modal) {
                document.body.removeChild(modal);
            }
        };
    };*/
}

export default record;