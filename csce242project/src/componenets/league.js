import '../css/league.css'

const league = (league)=>{
    return(
    <section className="league">
        <h1>{league.name}</h1>
        <img src={league.cover1} />
        <img src={league.cover2} />
    </section>
    );
}

export default league;