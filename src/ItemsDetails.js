import React, { useEffect, useState } from "react";
import "./App.css";

function ItemsDetails({ match }) {
  const [items, setItems] = useState({});

  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = () => {
    return fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`
    )
      .then((response) => response.json())
      .then((json) => {
        console.log("THIS IS THE FUCKING JSON", json);
        setItems(json.data);
      });
  };

  return !items ? (
    <div>Cargando</div>
  ) : (
    <div>
      {" "}
      <h1>{items.item.name} </h1>{" "}
    </div>
  );
}
export default ItemsDetails;
