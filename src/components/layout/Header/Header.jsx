import "./style.css"
import sotLogo from "../../../media/Sea-Of-Thieves-Logo.png";

const Header = () => {
  return (
    <header className="home-header">
      <div style={{margin: "0 150px"}}>
        official game by Rare
      </div>
      <img src={sotLogo} style={{width: "350px", height: "300px"}} />
      <div style={{margin: "0 150px"}}>
        website by Nazar Bylen
      </div>
    </header>
  )
}

export default Header;
