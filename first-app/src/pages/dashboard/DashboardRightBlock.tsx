import HeaderRightSideNav from "../../shared/components/header/headerRightSideNav/HeaderRightSideNav";
import CurrentFoodsList from "./CurrentFoodsList";
import MessageList from "./MessageList";
import Studentslist from "./StudentsList";

function DashboardRightBlock() {
    return (  
        <aside className="dashboard-page-right-block">
            <HeaderRightSideNav/>
            <Studentslist/>
            <MessageList/>
            <CurrentFoodsList/>
        </aside>
    );
}

export default DashboardRightBlock;