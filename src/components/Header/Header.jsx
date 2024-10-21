import './Header.css'
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
     <header className='px-4'>  
        <h1>Travilifa</h1>  
        <nav>  
          <ul>  
            <li>  
              <Link className="nav-link" to="/">Home</Link>  
            </li>  
            <li>  
              <Link className="nav-link" to="/discover">Discover</Link> {/* Added routing */}  
            </li>  
            <li>  
              <Link className="nav-link" to="/services">Services</Link> {/* Added routing */}  
            </li>  
            <li>  
              <Link className="nav-link" to="/news">News</Link> {/* Added routing */}  
            </li>  
            <li>  
              <Link className="nav-link" to="/about">About Us</Link> {/* Added routing */}  
            </li>  
            <li>  
              <Link className="nav-link" to="/contact">Contact</Link> 
            </li>  
          </ul>  
        </nav>  

        {/* <div>  
          <select name="lan" className='rounded'>  
            <option value="EN">EN</option>  
            <option value="AR">AR</option>  
          </select>  
        </div>   */}
      </header>  
      </>
  )
}
