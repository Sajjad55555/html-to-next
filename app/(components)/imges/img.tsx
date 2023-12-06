import Image from "next/image"
export default function Img(props:any){
    return(
        
        <div className="campus-col">
        <Image src={props.source} alt=""
                width={300}
                height={200}/>
            <div className="layer">
                <h3>{props.title}</h3>
            </div>
        </div>
       
)}
