import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
import Categories from '../Categories/Categories';

const Home = () => {
    const category = useContext(CategoryContext)
    return (
        <div>
            <Categories></Categories>
        </div>
    );
};

export default Home;