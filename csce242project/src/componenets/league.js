import '../css/league.css';
import { Outlet,Link } from "react-router-dom";

const league = (league)=>{
    return(
        <Link to="/Recordspage" className="leaguelink"><section className="league">
            <h1>{league.name}</h1>
            <img src={league.cover1} />
            <img src={league.cover2} />
        </section></Link>
    );
}

export default league;