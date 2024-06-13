import Icon from "../../icon/Icon";

function HeaderRightSideNav() {
    return (
        <nav className="header-right-nav">
            <ul>
                <li className="header-right-nav-icons-block">
                    <div className="header-right-nav-bell-icon">
                        <Icon name="bell"/>
                    </div>
                    <div className="header-right-nav-settings-icon">
                        <Icon name="settings"/>
                    </div>
                    
                </li>
                <li className="user-block">
                    <section className="user-block-names">
                        <strong>Nabila A.</strong>
                        <div>Admin</div>
                    </section>
                    <figure>
                        <Icon name="user2"/>
                    </figure>
                </li>
            </ul>
        </nav>
    );
}

export default HeaderRightSideNav;