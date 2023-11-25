import { log } from "console";
import Navbar from "../navbar/navbar";

function Header(props:any){
    console.log("props", props.title)
    return (
        <div>
           
            <section className="Sub-header">
                <Navbar/>
            <h1>{props.title}</h1>
    </section>
        </div>
    )
}
export default Header;