import '../css/community.css'
import Message from "../componenets/message"

const community = ()=>{
    return (
        <div id="community-content">
            <h1>Discussion</h1>
            <div id="disscussion">
                <div id="discus-brd">
                    <p id="discus-brd"></p>
                </div>
                <Message />
            </div>
        </div>
    );
}