import { useState } from "react";
import CardList from "./CardList";
import CardListItem from "./CardListItem";

function MessageList() {

    const [messages] = useState([
        {name: 'Samantha William', className: 'Class VII A', id: 1},
        {name: 'Samantha William2', className: 'Class VII A', id: 2},
        {name: 'Samantha William3', className: 'Class VII A', id: 3},
        {name: 'Samantha William4', className: 'Class VII A', id: 4},
        {name: 'Samantha William5', className: 'Class VII A', id: 5},
        {name: 'Samantha William6', className: 'Class VII A', id: 6},
    ])

    return (
        <section className="message-block">
            <div className="section-title-block">
                <h3 className="card-title">Messages</h3>
            </div>
            
            <div className="card-list-wrapper">
                <CardList>
                    {messages.map((ele) => {
                        return (
                            <CardListItem title={ele.name} subTitle={ele.className} key={ele.id} renderRihtSide={() => {
                                return (
                                    <span className="time-block">12:45 PM</span>
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

export default MessageList;