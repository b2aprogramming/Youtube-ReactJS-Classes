import Icon from "../icon/Icon";

function SearchBox(){
    return (
        <div className="search-box">
            <Icon name="search" className="search-box-icon"/>
            <input type="text" placeholder="Search here..."/>
        </div>
    )
}

export default SearchBox;