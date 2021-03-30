import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';

function Shop() {

    useEffect(() => {
        fetchItems();

    }, []);

    const [items, setItems] = useState([]);
    const fetchItems = async () => {
        const data =await fetch ('https://fortnite-api.theapinetwork.com/upcoming/get');

        const items = await data.json();
        console.log(items.data);
        setItems(items.data)
    }
    return (
      <div >
          {items.map(items =>(
              <h1 key= {items.itemId}>
              <Link to={`/shop/${items.itemId}`}>{items.item.name}</Link>
              </h1>
          ))}
      </div>
    );
  }
  export default Shop;