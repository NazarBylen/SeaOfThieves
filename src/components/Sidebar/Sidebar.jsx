import "./sidebar.css"
import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = ()=> {
  const [currentClass, setCurrentClass] = useState("closed");

  const changeClass = ()=> {
    if (currentClass === "closed") {
      setCurrentClass("open")
    }
    else {
      setCurrentClass("closed")
    }

  }

  return (
    <div className="sidebar-parent">
        {currentClass==="open"?
          <div className={"sidebar-root"}>
            <div className="sidebar-text">
              More Pages :
            </div>
            <ul>
              <li>
                <Link to="/" style={{color:"white"}}>Home</Link>
              </li>
              <li>
                <Link to="/about" style={{color:"white"}}>About</Link>
              </li>
            </ul>
          </div>
          : null
        }
      <button type={"submit"} onClick={changeClass} style={{backgroundColor:"black", height: "70px", border: "none"}} className="sidebar-text">Menu</button>
    </div>
  )
}

export default Sidebar;
