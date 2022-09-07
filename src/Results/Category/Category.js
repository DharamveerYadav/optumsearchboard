import React from 'react';
import './Category.css';

import CategorySection from './CategorySection/CategorySection';

const categoryData = [{
    heading: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    link: "https://getbootstrap.com/docs/5.0/utilities/flex/#justify-content",
    detail: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
},
{
    heading: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    link: "https://getbootstrap.com/docs/5.0/utilities/flex/#justify-content",
    detail: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
},
{
    heading: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    link: "https://getbootstrap.com/docs/5.0/utilities/flex/#justify-content",
    detail: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
}]

const Category = (props) => {

    return (
        <div className="d-flex flex-column mt-4 category-container">
        <h3>Categroy A</h3>
        <div className="category mt-4">
        {categoryData.map((data, i) => (<CategorySection data={data} key={i} />))}
        </div>

        </div>

    )
}

export default Category;