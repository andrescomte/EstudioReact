import { useState } from "react";
import SearchBox from "./components/SearchBox";
import "./style.css";

export default function Search(){

    const [isAtTop,setIsAtTop]= useState(false);

    const [searchText, setSearchText] = useState("");

    const handleSearchClick= ()=>{
        setIsAtTop(true);//cambiar al valor contrario, entonces cuando sea true se va hacia arriba.
    };
    const handleCloseClick = () => {
        setIsAtTop(false);
    };

    return (
        <div className = {`search ${isAtTop ? "search--top": "search--center"}`}>
            <SearchBox onSearch = {handleSearchClick} onClose={handleCloseClick}/>

        </div>
    );
}