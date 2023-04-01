import patrick from "../imgs/patrick.jpg"
import "../Style/Main.css"

export default function Main(){
    return(
        <div className="main">
            <div className="head">
                <img src={patrick} className="patrick"></img>
                <p className="name">Sandro Goginashvili</p>
                <p className="profession">frontend developer</p>
                <p className="website">sandrogoginashvili.website</p>
                <div>
                <button className="email">Email</button>
            </div>
            </div>
            
        </div>
    )
}