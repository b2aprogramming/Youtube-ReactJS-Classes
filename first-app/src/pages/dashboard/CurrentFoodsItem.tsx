
export interface CurrentFoodsItemProps{
    title: string;
    subTitle: string;
}

function CurrentFoodsItem({ title, subTitle}: CurrentFoodsItemProps) {
    return (
        <div className="card-list-item-foods">
            <section className="card-list-item-foods-thumbnail">
              
            </section>
            
            <section className="card-list-item-foods-content">
                <strong>{title}</strong>
                <div>{subTitle}</div>
            </section>
        </div>
    );
}

export default CurrentFoodsItem;