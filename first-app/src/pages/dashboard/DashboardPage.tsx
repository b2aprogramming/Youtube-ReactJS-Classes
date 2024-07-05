import { useEffect } from "react";
import Item from "../../shared/components/examples/Item";
import PageTitle from "../../shared/components/pageTitle/PageTitle";
import SearchBox from "../../shared/components/searchBox/SearchBox";
import Categories from "./Categories";
import DashboardRightBlock from "./DashboardRightBlock";
import SchoolCalednarBlock from "./SchoolCalendar";
import SchoolFinanceChart from "./SchoolFinance";
import SchoolPerformanceChart from "./SchoolPerformanceChart";
import StudentsTable from "./StudentTable";

function DashboardPage(){
    // const getUsers = () => {
    //     fetch('http://localhost:3000/users/1')
    //     .then((res) => {
            
    //         res.json().then((data) => {
    //             console.log('@@@ DATA', data);
    //         })
    //     }).catch(() => {

    //     })
    // };

    useEffect(() => {
       // getUsers();
    }, [])

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
                <Item>
                    {(ele) => {
                        return <h4>{ele.name} == {ele.id}</h4>
                    }}
                </Item>
                <Item>
                    {(ele) => {
                        return <h4>{ele.name} == {ele.id}</h4>
                    }}
                </Item>
                <Item>
                    {(ele) => {
                        return <h4>{ele.name}  == {ele.id}</h4>
                    }}
                </Item>
            </div>
           </section>
           <DashboardRightBlock/>
        </div>
    )
}

export default DashboardPage;