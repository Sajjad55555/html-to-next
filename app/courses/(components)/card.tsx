import Image from "next/image"
export default function Card(props:any){
    return(
        <div>
               <div className="facilities-col">
                <Image src={props.source} alt=""
                width={300}
                height={200}/>
                <h3>{props.title}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
                </p>
            </div>
        </div>
    )
}