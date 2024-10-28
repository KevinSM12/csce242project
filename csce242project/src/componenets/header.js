const header = ()=>{
    return (
        <><h3>Basketball Records Elite</h3><div id="logo-div">
            <img src="images/basketball-logo-removebg-preview.png" id="logo" />
            </div><nav id="main-nav">
                <div id="toggle-nav" class="hide-big">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <ul id="nav-items" class="columns hide">
                    <a href="index.html" class="one"><li><p>Home</p></li></a>
                    <a href="records.html" class="one"><li><p>Records</p></li></a>
                    <a href="about.html" class="one"><li><p>About Us</p></li></a>
                    <a href="form.html" class="one"><li><p>Add Form</p></li></a>
                    <a href="community.html" class="one"><li><p>Community</p></li></a>
                </ul>
            </nav></>
    );
}

export default header;