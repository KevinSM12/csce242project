const home = ()=>{
    return (
        <><div id="content">
            <h2>Different Leagues</h2>
            <div id="leagues" class="columns">
                <a href="/csce242/projects/part3/Records/index.html" class="one"><section id="league-nba">
                    <h1>NBA</h1>
                    <img src="images/nba-cover-1.jpg" />
                    <img src="images/nba-cover-2.jpg" />
                </section></a>
                <a href="/csce242/projects/part3/Records/index.html" class="one"><section id="league-ncaa">
                    <h1>NCAA</h1>
                    <img src="images/NCAA-cover-1.jpg" />
                    <img src="images/NCAA-cover-2.jpg" />
                </section></a>
                <a href="/csce242/projects/part3/Records/index.html" class="one"><section id="league-wnba">
                    <h1>WNBA</h1>
                    <img src="images/WNBA-cover-1.jpg" />
                    <img src="images/WNBA-cover-2.jpg" />
                </section></a>
                <a href="/csce242/projects/part3/Records/index.html" class="one"><section id="league-fiba">
                    <h1>FIBA</h1>
                    <img src="images/FIBA-cover-1.jpg" />
                    <img src="images/FIBA-cover-2.jpg" />
                </section></a>
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