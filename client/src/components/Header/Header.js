import React, {useState} from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import {Link, NavLink} from 'react-router-dom';
import {SidebarOption} from "../../constants/SidebarOption";
import "../../styles/Sidebar.css"
import useStyles from "./styles";

function Header() {
    const [sidebar, setSidebar] = useState(false);
    const classes = useStyles();

    const showSidebar = () => {
        setSidebar(!sidebar);
    }

    return (
        <>
       
        <div className={sidebar === true ? classes.overlay : classes.default}/> 
        
            <div className="header">
                <Link to="#" className={classes.menuBars}>
                    <MenuIcon className={classes.menuIcon} onClick={showSidebar}/>
                </Link>
            </div>
            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className={classes.menuBars}>
                            <CloseIcon className={classes.closeIcon}/>
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
