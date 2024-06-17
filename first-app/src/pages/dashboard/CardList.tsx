export interface CardListProps {
    children:  JSX.Element[]
}
function CardList({children}: CardListProps) {
    return (
        <div className="card-list">
            {children}
        </div>
    );
}

export default CardList;