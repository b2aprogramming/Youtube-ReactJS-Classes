import SearchBox from "../../shared/components/searchBox/SearchBox";

function DashboardPage(){
    return (
        <div className="dashboard-page">
           <section className="dashboard-page-left-block">
                <div className="page-title-block">
                    <h1 className="page-title">Dashboard</h1>
                    <SearchBox/>
                </div>
           </section>
           <aside className="dashboard-page-right-block">right side</aside>
        </div>
    )
}

export default DashboardPage;