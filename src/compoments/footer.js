import style from "../footer.module.scss";

function Footer(){
    return (
    <footer className={`${style.footer} d-flex flex-row align-items-center justify-content-center p-20`}>
        <p>Copyright © 2023 Cookchef, Inc.</p>
        
        </footer>);
}

export default Footer;