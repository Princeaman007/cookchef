
import style from "./Header.module.scss";
import logo from "../assets/images/cookchef.jpg";
function Header() {
    return (
        <header className={`${ style.header} d-flex flex-row align-itmes-center`}>
            <i class="fa-solid fa-bars mr-5 m-20"></i>
            <div className="flex-fill">
                <img src={logo} alt="logo cookchef" />
            </div>
            <ul className="m-20">
                <button className="mr-5 btn btn-reverse-primary">
                    <i class="fa-solid fa-cart-shopping mr-5"></i>
                    <span>panier</span>  
                </button>
                <button className=" btn btn-primary">Connexion</button>
            </ul>

        </header>
    );
}

export default Header;