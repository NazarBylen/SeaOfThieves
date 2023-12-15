import "./About.css"
import Header from "../../components/layout/Header/Header"
import Footer from "../../components/layout/Footer/Footer"

const About = ()=> {
  return (
    <div className="about-page">
      <Header/>
      <div className="about-text">
        <div style={{color:"white"}}>
          Sea of Thieves is a 2018 action-adventure game developed by Rare and published by Microsoft Studios.
          The game was released in March 2018 for Windows and Xbox One; it was one of the earliest first-party games
          released for Xbox Game Pass subscribers. The player assumes the role of a pirate who completes voyages from
          different trading companies. The multiplayer game sees players explore an open world via a pirate ship from
          a first-person perspective. Groups of players encounter each other regularly during their adventures, sometimes
          forming alliances, and sometimes going head-to-head.
          Sea of Thieves was conceived in 2014. Rare was inspired by players of PC games such as
          Eve Online (2003), DayZ (2018), and Rust (2018) who used the game tools to create their own stories.
          Rare explored different settings, such as vampires and dinosaurs, before settling on a pirate theme
          inspired by the Pirates of the Caribbean films and The Goonies (1985). The game features a progression
          system that only unlocks cosmetic items as the development team wanted to encourage both casual and
          experienced players to play together. Rare departed from its reputation for secrecy during Sea of Thieves's
          development, inviting fans to test the game's early builds.
          Sea of Thieves received mixed reviews upon launch; critics praised the ship combat, multiplayer, visuals, and physics,
          but criticized the progression, gameplay, and lack of content. Rare envisioned Sea of Thieves as a "game as a service"
          and has released numerous content updates after the initial release, which has improved its overall reception.
          Some of the latest updates include Season 8 releasing a new on-demand player versus player naval battle
          featuring the noble Guardians of Fortune and the opposing faction of the Servants of the Flame.
          Sea of Thieves was a commercial success and became Microsoft's most successful original intellectual
          property of the eighth generation, attracting more than 30 million players by June 2022. An enhanced
          version of the game was released for the Xbox Series X/S in November 2020.
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default About;
