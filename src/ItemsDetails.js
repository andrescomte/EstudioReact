import React, {useEffect, useState} from "react";
import "./App.css";

function ItemsDetails({match}) {

    useEffect(() => {
        fetchItem();
        //console.log(match);
    }, []);

    
    const [items, setItems] = useState({});

    const fetchItem = async() => {
        const fetchItem = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`);
        const item = await fetchItem.json();
        setItems(item.data);
        console.log(item.data);
        console.log(item);
    }
    return (
        !items ? <div>Cargando</div> : <div> <h1>{items.item.name} </h1> </div>
    );
  }
  export default ItemsDetails;