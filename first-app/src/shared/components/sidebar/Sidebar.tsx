import { useState } from "react";
import logo from "../../../assets/images/svg/logo.svg";
import Icon from "../icon/Icon";
import { NavLink } from "react-router-dom";

function Sidebar(){
    const [menus] = useState([
        {name: 'Dashboard', id: 1 , icon: 'home', url: '/'},
        {name: 'Students', id: 2, icon: 'user', url: 'students'},
        {name: 'Teachers', id: 3, icon: 'teacher', url: '/teacher'},
        {name: 'Event', id: 4, icon: 'calendar', url: '/calendar'},
        {name: 'Finance', id: 5, icon: 'finance', url: '/finance'},
        {name: 'Food', id: 6, icon: 'food', url: '/food'},
        {name: 'User', id: 7, icon: 'user2', url: '/user'},
        {name: 'Chat', id: 8, icon: 'chat', url: '/chat'},
        {name: 'Lastest Activity', id: 9, icon: 'activity', url: '/activity'},
    ]);
    return (
        <aside className="app-sidebar">
            <div className="logo-block">
                <a>
                    <span>
                        <img src={logo}/>
                    </span>
                    <strong>Akademi</strong>
                </a>
            </div>
            <nav className="side-nav-menus">
                <ul>
                    {menus.map((ele) => {
                        return (
                            <li key={ele.id}>
                                <div>
                                    <NavLink to={ele.url} className={({ isActive }) => {
                                        return isActive ? 'active': ''
                                    }}>
                                        <Icon className="menu-icon"  name={ele.icon}/>
                                        <span>{ele.name}</span>
                                    </NavLink>
                                    
                                </div>
                                
                                
                            </li>
                        )
                    })}
                </ul>
            </nav>

            <div className="sidenav-footer">
                <p>Akademi - School Admission Dashboard</p>
                <p>Made with <span>♥</span> by Peterdraw</p>
            </div>
        </aside>
    );
}


export default Sidebar;