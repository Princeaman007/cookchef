import style from "./headerMenu.module.scss";

function HeaderMenu({setPage}){
    return (
        <ul className={`${style.Menucontainer} card p-20 `}>
            <li onClick={() => setPage("Admin")}>ajouter une recette</li>
            <li>Wishlist</li>
            <li>Connexion</li>
        </ul>
    ) ;

}

export default HeaderMenu;