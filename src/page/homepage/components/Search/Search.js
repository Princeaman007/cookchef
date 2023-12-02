import style from "./search.module.scss";

function Search({setFilter}) {
    function handleIpunt(e){
        const filter =e.target.value;
        setFilter(filter.trim().toLowerCase());
    }
    return(
        <div className={`d-flex flex-rowjustify-content-center align-items-center my-30 ${style.searchBar}`}>
        <i className="fa-sharp fa-solid fa-magnifying-glass mr-15"></i>
        <input onInput={handleIpunt} className="flex-fill" type="text" placeholder="Rechercher" />
    </div> 
    )

}

export default Search;