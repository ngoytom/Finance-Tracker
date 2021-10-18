import React, {useState} from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import {Link, NavLink} from 'react-router-dom';
import {SidebarOption} from "../../constants/SidebarOption";
import "../../styles/Sidebar.css"

function Header() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => {
        setSidebar(!sidebar);
        if (!sidebar){
            document.body.style = "background: linear-gradient(gray, red)";
            document.body.style.transition = "5000ms";
        }
        else{
            document.body.style = "background: white";
            document.body.style.transition = "100ms";
        }

    }
    return (
        <>
            <div class="header">
                <Link to="#" className="menu-bars">
                    <MenuIcon className="menu-icon" onClick={showSidebar}/>
                </Link>
                
            </div>
            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                            <CloseIcon className="sidebar-close-icon"/>
                        </Link>
                    </li>
                    {SidebarOption.map((item,index) => {
                        return (<li key={index} className={item.cName}>
                            <li className="sidebar-bar"><NavLink to={item.path} exact activeStyle={{color:"blue"}}>{item.icon}<span>{item.title}</span></NavLink></li>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </> 
    )
}

export default Header
