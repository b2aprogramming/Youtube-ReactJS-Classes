import PageTitle from "../../shared/components/pageTitle/PageTitle";
import SearchBox from "../../shared/components/searchBox/SearchBox";
import Categories from "./Categories";
import DashboardRightBlock from "./DashboardRightBlock";
import SchoolCalednarBlock from "./SchoolCalendar";
import SchoolFinanceChart from "./SchoolFinance";
import SchoolPerformanceChart from "./SchoolPerformanceChart";
import StudentsTable from "./StudentTable";

function DashboardPage(){
    return (
        <div className="dashboard-page">
           <section className="dashboard-page-left-block">
            <PageTitle title="Dashboard">
                <SearchBox/>
            </PageTitle>
            <div className="content">
                <Categories/>

                <SchoolPerformanceChart/>

                <div className="calendar-finance-block">
                    <SchoolCalednarBlock/>
                    <SchoolFinanceChart/>
                </div>
                <StudentsTable/>
            </div>
           </section>
           <DashboardRightBlock/>
        </div>
    )
}

export default DashboardPage;