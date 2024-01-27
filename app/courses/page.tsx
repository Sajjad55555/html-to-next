import { config, title } from "process";
import Header from "../(components)/header/header";
import clients from "../lib/contentfulClient";
import Card from "./(components)/card";
import TextCard from "./(components)/textCard";
import {client} from "@/sanity/lib/client"
import {createClient} from '@sanity/client'
import Image from "next/image";
// export const client = createClient({
//     projectId: 'aijo4eh6',
//     dataset: 'production',
//     useCdn: true, // set to `false` to bypass the edge cache
//     apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
//     // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
//   })
const fetchBestCourse =async () => {
    let responces = await client.fetch(
        `(*[_type == "courses"])`,
        {},
        {
          // You can set any of the `cache` and `next` options as you would on a standard `fetch` call
          cache: 'no-cache',
         
        },
      )
    
  return responces
     
} 

const fetchCourse =async () => {
    let responce = await clients.getEntries({content_type:"courses"})
    let courses = responce.items.map((item:any)=>{
        return {
            title:item.fields.title,
            descrption:item.fields.descrption
        }
    })
    return courses    
} 
export default async function Courses(){
 const course = await fetchCourse()
 const bestCourse:any = await fetchBestCourse()
    return (
        <div>
            <Header title="Our Courses"/>
              
              {/* <!-- course start --> */}

<section className="course">
    <h1>blog Call from cotentful api</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
    <div className="row ">
    {course.map((items:any)=>{
    return(
    <div className="course-col">
            <h3>{items.title}</h3>
            <p>{items.descrption}</p>
        </div>
  )
})}
 </div>   
</section>

{/* <!-- course end --> */}

{/* <!-- best course start --> */}

<section className="facilities">
    <h1>Best Courses Offer</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

    <div className="row">
    {bestCourse.map((courses:any)=>{
            return(
                <>
                <div className="facilities-col" key={courses.id}>
                {courses.mainImage}
                <h3>{courses.title}</h3>
                <p>{courses.descrption}
                </p>
            </div>
            </>       
            )
        })}
        <Card title="Web Development" source="/img/course1.png"/>
        <Card title="Artificial Intelligence" source="/img/course2.png"/>
        <Card title="Data Science" source="/img/course3.png"/>
    </div>
</section>

{/* <!-- best courses end --> */}

        </div>
    )
}
