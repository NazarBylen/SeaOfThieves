import "./home.css"
import crew from "../../media/crew.jpg"
import Footer from "../../components/layout/Footer/Footer"
import Header from "../../components/layout/Header/Header"

const Home = ()=> {
  return (
    <div className="home-page">
      <Header/>
      <div className="gameplay-sot">
        <div className="gameplay-video">
          <iframe width="420" height="315" src="https://www.youtube.com/embed/d1Lbnm92cDc"></iframe>
        </div>
        <div style={{color:"white", margin: "0 150px"}}>
          The Video here shows the gameplay of Sea Of Thieves and the game main mechanics.
          The multiplayer game sees players explore an open world via a pirate ship from a
          first-person perspective. Groups of players encounter each other regularly during their adventures,
          sometimes forming alliances, and sometimes going head-to-head.
        </div>
      </div>
      <div className="our-crew">
        <div style={{color:"white", margin: "0 150px"}}>
          Our crew consists of many pirates, first three were Nazar Bylen, Kurdzape and Dolbaeb228.
          The trinity of most powerful pirates of Sykhiv ditrict, by the way we have a guild called Сихівська Братва,
          which represents the strengthof our local district pirates, join us right now...
        </div>
        <img className="crew-img" src={crew} />
      </div>
      <Footer />
    </div>
  )
}

export default Home;
