import { useState } from "react";
import CardList from "./CardList";
import CurrentFoodsItem from "./CurrentFoodsItem";

function CurrentFoodsList() {

    const [messages] = useState([
        {name: 'Samantha William', className: 'Class VII A', id: 1},
        {name: 'Samantha William2', className: 'Class VII A', id: 2},
        {name: 'Samantha William3', className: 'Class VII A', id: 3},
        {name: 'Samantha William4', className: 'Class VII A', id: 4},
        {name: 'Samantha William5', className: 'Class VII A', id: 5},
        {name: 'Samantha William6', className: 'Class VII A', id: 6},
    ])

    return (
        <section className="current-foods-block">
            <div className="section-title-block">
                <h3 className="card-title">Current Foods Menu</h3>
            </div>
            
            <div className="card-list-wrapper">
                <CardList>
                    {messages.map((ele) => {
                        return (
                            <CurrentFoodsItem title={ele.name} subTitle={ele.className} key={ele.id}/>
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

export default CurrentFoodsList;