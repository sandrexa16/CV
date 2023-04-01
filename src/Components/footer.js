import Faceboob from "../imgs/Facebook.png"
import Instagram from "../imgs/Instagram.png"
import Twitter from "../imgs/Twitter.png"
import Git from "../imgs/GitHub.png"
import "../Style/Footer.css"


export default function Footer(){
    return(
        <footer className="icons">
            <img src={Faceboob}></img>
            <img src={Instagram}></img>
            <img src={Twitter}></img>
            <img src={Git}></img>
        </footer>
    )
}