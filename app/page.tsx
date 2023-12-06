import Image from 'next/image'
import Header from './(components)/header/header'
import Navbar from './(components)/navbar/navbar'
import Button from './(components)/button/button'
import Link from 'next/link'
import TextCard from './courses/(components)/textCard'
import Img from './(components)/imges/img'
import Card from './courses/(components)/card'
import StudentCard from './(components)/studentcard/studentcard'

export default function Home() {
  return (
<div>


    {/* <!-- Created BY - Sagar Developer --> */}
    {/* <!-- Created BY - Sagar Developer --> */}
    <section className="header">
        <Navbar/>
        {/* <Image src={"/img/banner1.png"} alt=''
        width={1243} height={1100}/> */}


        <div className="text_box">
            <h2>GET READY</h2>
            <p id="headtext">TO DISCOVER CAMPUS</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit consequuntur corrupti sapiente aut porro
                <br/> esse blanditiis in quae perspiciatis quo.
            </p>
            <Link href="/" > <Button title="Visit Us To Know More"/></Link>
        </div>
    </section>

    {/* <!-- Course Section Start --> */}
    <section className="course">
        <div className="PageBlock">
            <div className="verticalLine"></div>
            <div className="Clear"></div>
        </div>
        <h1>EXPLORE OUR 60+ <br/> MAJOR PROGRAMS</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
            <div className="course-col">
            <TextCard title="Undergraduate Programs" />
            </div>
            <div className="course-col">
                <TextCard title="Graduate Programs" />
            </div>
            <div className="course-col">
            <TextCard title="Adult Learning & Degree Completion" />
            </div>
        </div>
    </section>
    {/* <!-- Course Section End --> */}
    {/* <!-- Campus Section Start--> */}

    <section className="campus">
        <div className="PageBlock">
            <div className="verticalLine"></div>
            <div className="Clear"></div>
        </div>
        <h1>TAKE OUR VIRTUAL TOUR</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
            
                <Img title="DELHI" source="/img/Campus1.png"/>
            <Img title="HYDERABAD" source="/img/Campus2.png"/>
            <Img title="MUMBAI" source="/img/Campus3.png"/>
           
        </div>
    </section>
    {/* <!-- Campus Section End --> */}

    {/* <!-- Facilities Section Start --> */}
    <section className="facilities">
        <div className="PageBlock">
            <div className="verticalLine"></div>
            <div className="Clear"></div>
        </div>
        <h1>Our Facilities</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
            <Card title="Best Libary" source="/img/libary.png"/>
            <Card title="Athletics" source="/img/playground.png"/>
            <Card title="Tasty and Healthy Food" source="/img/food.png"/>
           </div>
    </section>
    {/* <!-- Facilities Section End --> */}

    {/* <!-- Testimonials Section Start --> */}
    <section className="testimonials">
        <div className="PageBlock">
            <div className="verticalLine"></div>
            <div className="Clear"></div>
        </div>
        <h1>What Our Student Says</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
        <StudentCard title="Student Name" source="/img/user.png"/>
        <StudentCard title="Student Name" source="/img/user.png"/>
        </div>
    </section>
    {/* <!-- Testimonials Section End --> */}

    {/* <!-- Call To Action Section Start --> */}
    <section className="cta">
        <h1>GET READY FOR A BRIGHT FUTURE</h1>
        <a href="contact.html" className="hero_btn">CONTACT US</a>
    </section>
    {/* <!-- Call To Action Section End --> */}

    

    <script src="script.js"></script>

    </div>
  )
}
