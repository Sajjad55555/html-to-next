import Header from "../(components)/header/header";
import Card from "./(components)/card";
import TextCard from "./(components)/textCard";
function Courses(){
    return (
        <div>
            <Header title="Our Courses"/>
              
              {/* <!-- course start --> */}

<section className="course">
    <h1>Course We Offer</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
    <div className="row">
    <TextCard title="Undergraduate Programs" />
    <TextCard title= "Graduate Programs"/>
    <TextCard title= "Adult Learning & Degree Completion"/>
    </div>
</section>

{/* <!-- course end --> */}

{/* <!-- best course start --> */}

<section className="facilities">
    <h1>Best Courses</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

    <div className="row">
        <Card title="Web Development" source="/img/course1.png"/>
        <Card title="Artificial Intelligence" source="/img/course2.png"/>
        <Card title="Data Science" source="/img/course3.png"/>
    </div>
</section>

{/* <!-- best courses end --> */}

        </div>
    )
}
export default  Courses;