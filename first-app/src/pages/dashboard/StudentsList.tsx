import { useState } from "react";
import Icon from "../../shared/components/icon/Icon";
import CardList from "./CardList";
import CardListItem from "./CardListItem";

function Studentslist() {

    const [students] = useState([
        {name: 'Samantha William', className: 'Class VII A', id: 1},
        {name: 'Samantha William2', className: 'Class VII A', id: 2},
        {name: 'Samantha William3', className: 'Class VII A', id: 3},
        {name: 'Samantha William4', className: 'Class VII A', id: 4},
        {name: 'Samantha William5', className: 'Class VII A', id: 5},
        {name: 'Samantha William6', className: 'Class VII A', id: 6},
    ])

    return (
        <section className="students-block">
            <div className="section-title-block">
                <h3 className="card-title">Stundets</h3>
                <span className="add-students-icon">
                    <Icon name="plus"/>
                </span>
            </div>
            <div className="section-list-totle">
                You have 456 students
            </div>
            
            <div className="card-list-wrapper">
                <CardList>
                    {students.map((ele) => {
                        return (
                            <CardListItem title={ele.name} subTitle={ele.className} key={ele.id} renderRihtSide={() => {
                                return (
                                    <div className="email-icon">
                                        <Icon name="email"/>
                                    </div>
                                )
                            }}/>
                        )
                    })}
                </CardList>
                <section>
                    <button className="btn full" type="button">View More</button>
                </section>
            </div>
        </section>
    );
}

export default Studentslist;