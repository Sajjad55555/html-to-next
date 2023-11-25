import Link from 'next/link'
var styleObj={
    backgroundColor:'black',
    color:'white'
}
export default function Navbar(){
    return(
       
        <nav>
            <Link href="/" className="logo">Xplore
                <i className="fab fa-staylinked"></i>kill
            </Link>
            <div className="nav-links" id="navLinks">
               
                {/* <i className="fa fa-times" onclick="hideMenu()"></i> */}
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/courses">Course</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
            {/* <i className="fa fa-bars" onclick="showMenu()"></i> */}
          
        </nav>
    )
    
}