import '../css/message.css';

const message = ()=>{
    return (
        <p id="dis">
            <label for="dis-txt">Message:</label>
            <input type="text" id="dis-txt" />
            <button id="send">&#10148;</button>
        </p>
    );
}
export default message;