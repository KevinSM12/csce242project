import '../css/home.css';
import { Outlet,Link } from "react-router-dom";
import League from "../componenets/league";

const home = ()=>{
    return (
        <><div id="content">
            <h2>Different Leagues</h2>
            <div id="leagues" className="columns">
                
                    <League name="NBA" cover1="../images/nba-cover-1.jpg" cover2="images/nba-cover-2.jpg" className="one" />
                
                
                    <League name="NCAA" cover1="../images/NCAA-cover-1.jpg" cover2="images/NCAA-cover-2.jpg" className="one" />
              
                
                    <League name="WNBA" cover1="../images/WNBA-cover-1.jpg" cover2="images/WNBA-cover-2.jpg" className="one" />
              
             
                    <League name="FIBA" cover1="../images/FIBA-cover-1.jpg" cover2="images/FIBA-cover-2.jpg" className="one" />
                
            </div>
            <div id="lower-half" className="columns">
                <Link to="/recordspage" className="recordlink"><section className="one">
                    <h4>NBA - Most Points All-Time: Lebron James</h4>
                    <img src="images/most-pts-cover.jpg" />
                </section></Link>
                <Link to="/recordspage" className="recordlink"><section className="one">
                    <h4>NBA - Most TDs All-Time: Russell Westbrook</h4>
                    <img src="images/most-td-cover.jpg" />
                </section></Link>
            </div>
        </div></>
    );
};  

export default home;