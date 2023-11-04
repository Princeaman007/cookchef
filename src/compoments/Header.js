
import style from "./Header.module.scss";
import logo from "../assets/images/logo.jpg";
import { useState } from "react";
import HeaderMenu from "./HeaderMenu";

function Header() {

    const [showMenu, setShowMenu] = useState(false);

    return (

        <header className={`${ style.header} d-flex flex-row align-itmes-center`}>
           
            <div className="flex-fill">
                <img src={logo} alt="logo cookchef" />
            </div>
            <ul className= {`${style.headerList} mb-20`}>
                <button className="mr-5 btn btn-reverse-primary">
                    <i class="fa-solid fa-solid fa-heart mr-5"></i>
                    <span>Wishlist</span>  
                </button>
                <button className=" btn btn-primary">Connexion</button>
            </ul>
            <i onClick={() => setShowMenu(true)} class= { `fa-solid fa-bars ${style.headerXs}` }></i>
            {showMenu && (
                <>
                <div onClick={() =>setShowMenu(false)} className="clac"></div>
                    <HeaderMenu/>
                
                </>

            
            
            )}
        </header>
    );
}

export default Header;