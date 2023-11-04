import style from "./headerMenu.module.scss";

function HeaderMenu(){
    return (
        <ul className={`${style.Menucontainer} card p-20`}>
            <li>Wishlist</li>
            <li>Connexion</li>
        </ul>
    ) ;

}

export default HeaderMenu;