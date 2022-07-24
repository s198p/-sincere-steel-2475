import React from 'react';
import "./Navbar.css";
import {Menu,MenuButton,MenuList,MenuItem,Button} from '@chakra-ui/react'
import {ChevronDownIcon} from "@chakra-ui/icons";
import { useNavigate,NavLink } from 'react-router-dom';

const Navbar = () => {
    const history = useNavigate();


  return (
    <div className="navmain">
        <div style={{padding:"2rem",cursor:"pointer"}}>
            <img 
            onClick={() => history("/")}
            className="logo"
            src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/layout/header/logo.svg"
            alt="logo"/>
        </div>
        <div className="navsub">
            <div className="ctg"><NavLink to="/integration">INTEGRATIONS</NavLink></div>
            <div className="ctg"><NavLink to="/blog">BLOG</NavLink></div>
            <div>
            <Menu>
                <MenuButton style={{background:"none"}}
                as={Button} 
                rightIcon={<ChevronDownIcon style={{color:"#00ad95"}}/>}>
                    <b>FEATURES</b>
                </MenuButton>
                <MenuList className="menulist">
                    <MenuItem ><b>Time Tracker</b></MenuItem>
                    <br/>
                    <MenuItem><b>Project Managment</b></MenuItem>
                    <br/>
                    <MenuItem><b>Online Timesheet</b></MenuItem>
                    <br/>
                    <MenuItem><b>Time Cards</b></MenuItem>
                    <br/>
                    <MenuItem><b>TimeReporting</b></MenuItem>
                </MenuList>
            </Menu>
            </div>
            <div >
                <Button className="free_nbtn" style={{background:"white",color:"#00ad95",border:"2px solid #00ad95"}} >TRY IT FREE</Button>
            </div>
            <div >
                <Button onClick={()=>history("/login")} className="log_nbtn" style={{background:"#00ad95"}}>LOGIN</Button>
            </div>
        </div>
    </div>
)
}

export default Navbar