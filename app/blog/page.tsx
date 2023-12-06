import Header from "../(components)/header/header";
import Navbar from "../(components)/navbar/navbar";
import Input from "../(components)/input/input";
import Button from "../(components)/button/button";
import Image from "next/image";
export default function Blog(){
    return (
        <div>
          <Header title="Blog"/>
  

   

    <section className="blog-content">
        <div className="row">
            <div className="blog-left">
                <h2>Our Certificate & Online Program</h2>
                <h5>Aug 1, 2021</h5>
                <Image src="/img/post.png" alt=""
                width={500}
                height={420}/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolor consequatur, nobis quae obcaecati delectus at aspernatur, placeat quasi iure mollitia. Repellendus a ut nostrum dolore velit odit cumque, quos doloribus sint id aperiam eius aliquam quo modi sequi rem quia exercitationem laborum, ratione expedita! Deleniti velit officia incidunt illum.</p>
                <br/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore corrupti blanditiis deserunt
                    incidunt itaque ut laudantium a amet omnis nihil, dolor doloribus. Voluptatum, accusantium? Quo,
                    aperiam nobis labore pariatur, esse vitae amet repellendus libero architecto nisi facere unde
                    ducimus perspiciatis, laudantium alias porro. Sapiente voluptatem eligendi at voluptatum optio
                    facilis?</p>
                <br/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore corrupti blanditiis deserunt
                    incidunt itaque ut laudantium a amet omnis nihil, dolor doloribus. Voluptatum, accusantium? Quo,
                    aperiam nobis labore pariatur, esse vitae amet repellendus libero architecto nisi facere unde
                    ducimus perspiciatis, laudantium alias porro. Sapiente voluptatem eligendi at voluptatum optio
                    facilis?</p>
                <br/>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore corrupti blanditiis deserunt
                    incidunt itaque ut laudantium a amet omnis nihil, dolor doloribus. Voluptatum, accusantium? Quo,
                    aperiam nobis labore pariatur, esse vitae amet repellendus libero architecto nisi facere unde
                    ducimus perspiciatis, laudantium alias porro. Sapiente voluptatem eligendi at voluptatum optio
                    facilis?</p>

                <div className="content-col">
                    <h3>Leave a Comment</h3>
                    <form>
                    <Input title="enter your name" type="text"/>
                    <Input title="enter your email" type="email"/>
                    <textarea rows={5} placeholder="Message" required></textarea>
                    <Button title="POST COMMENT" type="submit"/>
                </form>
                </div>
            </div>

            <div className="blog-right">
                <h3>Post Categories</h3>
                <div>
                    <span>Business Analytics</span>
                    <span>12</span>
                </div>
                <div>
                    <span>Machine Learning</span>
                    <span>29</span>
                </div>
                <div>
                    <span>Computer Science</span>
                    <span>15</span>
                </div>
                <div>
                    <span>Data Analytics</span>
                    <span>22</span>
                </div>
                <div>
                    <span>Full Stack</span>
                    <span>20</span>
                </div>
            </div>
        </div>
    </section>

   
    
    

    <script src="script.js"></script>

        </div>
    )
}
