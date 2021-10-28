import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Shipment from './components/Shipment/Shipment';
import { createContext, useState } from 'react';

export const CategoryContext = createContext()

function App() {
  const [category, setCategory] = useState('')
  return (
    <CategoryContext.Provider value={[category, setCategory]}>
      <div className="App">
        <h1>App JS Count : {category}</h1>
        <hr />
        <Header></Header>
        <hr />
        <Home></Home>
        <hr />
        <Shipment></Shipment>
      </div>
    </CategoryContext.Provider>
  );
}

export default App;
