import '../css/home.css';
import Link from "react-router-dom";
import League from "league";

const home = ()=>{
    return (
        <><div id="content">
            <h2>Different Leagues</h2>
            <div id="leagues" class="columns">
                <Link to="/recordspage">
                    <League name="NBA" cover1="../images/nba-cover-1" cover2="../image/nba-cover-2" />
                </Link>
                <Link to="/recordspage">
                    <League name="NCAA" cover1="../images/NCAA-cover-1" cover2="../image/NCAA-cover-2" />
                </Link>
                <Link to="/recordspage">
                    <League name="WNBA" cover1="../images/WNBA-cover-1" cover2="../image/WNBA-cover-2" />
                </Link>
                <Link to="/recordspage">
                    <League name="FIBA" cover1="../images/FIBA-cover-1" cover2="../image/FIBA-cover-2" />
                </Link>
            </div>
            <div id="lower-half" class="columns">
                <a href="records.html" class="one"><section>
                    <h4>NBA - Most Points All-Time: Lebron James</h4>
                    <img src="images/most-pts-cover.jpg" />
                </section></a>
                <a href="records.html" class="one"><section>
                    <h4>NBA - Most TDs All-Time: Russell Westbrook</h4>
                    <img src="images/most-td-cover.jpg" />
                </section></a>
            </div>
        </div></>
    );
};  

export default home;