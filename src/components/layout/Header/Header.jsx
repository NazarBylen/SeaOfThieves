import "./style.css"
import sotLogo from "../../../media/Sea-Of-Thieves-Logo.png";

const Header = () => {
  return (
    <header className="header">
      <div>
        official game by Rare
      </div>
      <img className="logo-sot" src={sotLogo} />
      <div>
        website by Nazar Bylen
      </div>
    </header>
  )
}

export default Header;
