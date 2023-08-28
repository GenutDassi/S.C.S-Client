import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router-dom';
import { GiFlowerPot } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { Badge } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import logo from '../pictures/smallLogo.png'
function Navbar() {
    // const navigate = useNavigate();
    return (
        <>
            <img src={logo} alt="Image" style={{ width: '200px', height: '100px' }} />
            <Nav fill variant="tabs" defaultActiveKey="">
                <Nav.Item>
                    {/* <Nav.Link onClick={() => { navigate("/History") }}><h1 style={{color: 'Black'}}>הסטוריה</h1></Nav.Link> */}
                    <Nav.Link><h5 style={{ color: '#17dfe2' }}>הסטוריה</h5></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    {/* <Nav.Link onClick={() => { navigate("/EndTravel") }}><h1 style={{color: 'Black'}}>למציאת חניה ריווחית</Nav.Link> */}
                    <Nav.Link><h5 style={{ color: '#17dfe2' }}>למציאת חניה ריווחית</h5></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    {/* <Nav.Link onClick={() => { navigate("/BeginTravel") }}><h1 style={{color: 'Black'}}>לתחילת נסיעה</h1></Nav.Link> */}
                    <Nav.Link><h5 style={{ color: '#17dfe2' }}>לתחילת נסיעה</h5></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    {/* <Nav.Link onClick={() => { navigate("/About") }}><h1 style={{color: 'Black'}}>אודותינו</Nav.Link> */}
                    <Nav.Link><h5 style={{ color: '#17dfe2' }}>אודותינו</h5></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    {/* <Nav.Link  onClick={() => { navigate("/Home") }}><h1  style={{color: 'White'}}>דף הבית</h1></Nav.Link> */}
                    <Nav.Link><h5 style={{ color: '#17dfe2' }}>דף הבית</h5></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    {/* <Nav.Link onClick={() => { navigate("/Profile") }}><h1 style={{color: 'Black'}}>פרופיל</h1></Nav.Link> */}
                    <Nav.Link><h5 style={{ color: '#17dfe2' }}>פרופיל</h5></Nav.Link>
                </Nav.Item>
                <br></br><br></br><br></br>
            </Nav>
        </>
    );
}

export default Navbar;