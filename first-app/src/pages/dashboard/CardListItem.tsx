import Icon from "../../shared/components/icon/Icon";

export interface CardListItemProps{
    renderRihtSide: () => JSX.Element;
    title: string;
    subTitle: string;
}

function CardListItem({renderRihtSide, title, subTitle}: CardListItemProps) {
    return (
        <div className="card-list-item">
            <aside className="card-list-content-block">
                <figure>
                    <Icon name="user2"/>
                </figure>
                <section>
                    <strong>{title}</strong>
                    <div>{subTitle}</div>
                </section>
            </aside>
            
            <aside className="card-list-right-block">
                {renderRihtSide()}
            </aside>
        </div>
    );
}

export default CardListItem;