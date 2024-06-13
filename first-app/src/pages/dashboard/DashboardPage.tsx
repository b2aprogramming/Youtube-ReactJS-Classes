import PageTitle from "../../shared/components/pageTitle/PageTitle";
import SearchBox from "../../shared/components/searchBox/SearchBox";
import DashboardRightBlock from "./DashboardRightBlock";

function DashboardPage(){
    return (
        <div className="dashboard-page">
           <section className="dashboard-page-left-block">
            <PageTitle title="Dashboard">
                <SearchBox/>
            </PageTitle>
           </section>
           <DashboardRightBlock/>
        </div>
    )
}

export default DashboardPage;