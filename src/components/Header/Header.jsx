import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import routes from "./../../routes/routes.json";
import { NavLink, useNavigate } from "react-router-dom";
import Header1 from "./Header1";
import styles from './Header1.module.css'
const Header = () => {
  return (
    <>
      <div>
        <Navbar bg="primary" data-bs-theme="dark">
          <Container>
            <Navbar.Brand>
              <NavLink
                to={routes.HOME} >
               <span style={{color:"white"}}>Home</span> 
              </NavLink>
            </Navbar.Brand>

          <div className={styles.end}>
  <Nav.Link>
              <NavLink className='me-4'
                to={routes.CARTPAGE} >
                <span style={{color:"white"}}> <i class="bi bi-cart-check-fill"></i></span>
              </NavLink>
            </Nav.Link>


            <Nav.Link>
              <NavLink
                to={routes.LOGINPAGE} >
                <span style={{color:"white"}}> Login</span>
              </NavLink>
            </Nav.Link>
          </div>
          

                    
          </Container>
        </Navbar>
      </div>
      <Header1 />
    </>
  );
};
export default Header;
