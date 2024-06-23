import Icon from "../../shared/components/icon/Icon";

export interface CatetgoryItemPrps{
    data: any;
}

function CatetgoryItem({data}: CatetgoryItemPrps) {
    return (
        <aside className="category-item">
            <figure  style={{backgroundColor: data.color}}>
                <Icon name={data.iconName}/>
            </figure>
            <section>
                <label>{data.categoryName}</label>
                <strong>{data.total}</strong>
            </section>
        </aside>
    );
}

export default CatetgoryItem;   