import React, { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../../App';
import CategoriesDetail from '../CategoriesDetail/CategoriesDetail';

const allProducts = [
    { name: 'Dell', category: 'laptop' }, { name: 'Hp', category: 'laptop' }, { name: 'Asus', category: 'laptop' },
    { name: 'Apple', category: 'mobile' }, { name: 'Nokia', category: 'mobile' }, { name: 'Samsung', category: 'mobile' },
    { name: 'Canon', category: 'camera' }, { name: 'Sony', category: 'camera' }, { name: 'Nikon', category: 'camera' },
]

const Categories = () => {
    const [category] = useContext(CategoryContext)
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        const matchedData = allProducts.filter(pd => pd.category.toLowerCase() === category.toLowerCase())
        setProducts(matchedData)
    }, [category])
  

    return (
        <div>
            <h3>Your Selected Category is : {category}</h3>
            {
               products.map(product => <CategoriesDetail product={product}></CategoriesDetail>)
            }
        </div>
    );
};

export default Categories;