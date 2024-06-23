import { useState } from "react";
import CatetgoryItem from "./CategoryItem";

function Categories() {
    const [categories] = useState([
        {categoryName: 'Students', color:'#4D44B5', iconName: 'user', total: 932},
        {categoryName: 'Teachers', color:'#FB7D5B', iconName: 'teacher', total: 74},
        {categoryName: 'Events', color:'#FCC43E', iconName: 'calendar', total: 40},
        {categoryName: 'Foods', color:'#303972', iconName: 'food', total: 20},
    ])
    return (
        <section className="category-block">
            {categories.map((ele) => {
                return (
                    <CatetgoryItem key={ele.categoryName} data={ele} />
                )
            })}
            
        </section>
    );
}

export default Categories;