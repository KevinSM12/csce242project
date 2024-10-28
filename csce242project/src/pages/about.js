import '../css/about.css';

const about = ()=>{
    return (
        <div id="about">
            <h1>About Us</h1>
            <div id="about-img">
                <img src="images/team.jpg" />
            </div>
            <h3>The Team</h3>
            <hr />
            <p>
                Welcome to Basketball Records Elite! We are a passionate team of basketball enthusiasts dedicated to celebrating the incredible achievements of players and teams across the sport. With backgrounds in sports analytics, journalism, and graphic design, we bring a unique blend of expertise to our platform. Our mission is to provide fans and players with an engaging and comprehensive resource for basketball records.
            </p>
            <p>
                At Basketball Records Elite, we believe that every record tells a story. Whether its a remarkable season or a legendary player, we aim to capture the essence of what makes basketball special. We meticulously research and curate data to ensure accuracy and depth, allowing fans to dive deep into the sport they love. Join us as we highlight the unforgettable moments that define basketball and inspire future generations to aim for greatness!
            </p>
            <h3>Contact Us</h3>
            <hr />
            <div id="contact">
                <h4>Phone#: (555)-555-5555</h4>
                <h4>Email: eliterecords@email.com</h4>
                <p>
                    <p>Message:</p>
                    <textarea type="text" id="message"></textarea>
                </p>
            </div>
        </div>
    );
}