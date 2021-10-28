import React from 'react';

const CategoriesDetail = (props) => {
    const {name, category} = props.product
    return (
        <div>
            <h5>This is your category detail {category}</h5>
            <h6>Selected product : {name}</h6>
        </div>
    );
};

export default CategoriesDetail;