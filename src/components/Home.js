const Home=()=>{
    return(
        <div id="home">
        <div className="intro">
            <h3>
               Tasty and nutritious snacks for everyone
            </h3>
            <img src="./logo2.png" alt="logo" />
            <a href="#" className="click">Click Here</a>
        </div>
        <div className="homeimage">
            <div className="image">
            <img src="./bacd.png" alt="homeimage" />
            <div className="next">&gt;</div>
            <div className="prev">&lt;</div>
            <div className="name">Burger $20</div>
            </div>
        </div>
        </div>
    )
}

export default Home;