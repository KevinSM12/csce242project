import '../css/community.css'
import Message from "../componenets/message"

const community = ()=>{
    return (
        <div id="community-content">
            <h1>Discussion</h1>
            <div id="disscussion">
                <p id="discus-brd"></p>
                <Message />
            </div>
        </div>
    );
}

export default community;