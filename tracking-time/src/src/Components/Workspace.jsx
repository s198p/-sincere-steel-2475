import React, { useEffect, useState } from 'react'
// import Modal from 'react-bootstrap/Modal'
// import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import {SearchIcon,AddIcon,DownloadIcon,QuestionOutlineIcon,ChevronDownIcon,ArrowForwardIcon} from "@chakra-ui/icons"
import {Button, Avatar,Menu,
    MenuButton,DrawerBody,DrawerHeader,DrawerContent,DrawerOverlay,Drawer,DrawerFooter,Input,FormLabel,Switch,FormControl,
    MenuList,DrawerCloseButton,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,useDisclosure } from "@chakra-ui/react"
import "./Workspace.css"

const Workspace = () => {

    const [logindata, setLoginData] = useState([]);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef()
    

    const history = useNavigate();

    const [show, setShow] = useState(false);

    var todayDate = new Date().toISOString().slice(0, 10);


    // const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const Birthday = () => {
        const getuser = localStorage.getItem("user_login");
        if (getuser && getuser.length) {
            const user = JSON.parse(getuser);
        
            setLoginData(user);


            const userbirth = logindata.map((el, k) => {
                return el.date === todayDate
            });

            if (userbirth) {
                setTimeout(() => {
                    console.log("ok");
                    handleShow();
                }, 3000)
            }
        }
    }

    const userlogout = ()=>{
        localStorage.removeItem("user_login")
        history("/");
    }

    useEffect(() => {
        Birthday();
    }, [])

    return (
        <div>
            {
                logindata.length === 0 ? "errror" :
                    <>
                        

                        



<div className="worknav">
                <div style={{display:"flex",gap:"20px"}} className="nav1">
                    <div>
                        <img style={{height:"15px"}}
                        src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/layout/header/logo.svg"
                        />
                    </div>
                    <div style={{display:"flex",gap:"20px"}} className="navlink">
                        <b>Hours</b>
                        <b>Projects</b>
                        <b>Reports</b>
                        <b>Manage</b>
                        <SearchIcon/>
                    </div>
                </div>
                <div className="nav2" style={{display:"flex",gap:"20px",padding:"0.1rem"}}>
                    <div style={{display:"flex",gap:""}}>
                        <img
                        src="https://cdn3.iconfinder.com/data/icons/audio-video-7/205/play-circle-128.png"
                        />
                        <AddIcon boxSize={3} style={{background:"#f5f4f4",borderRadius:"50%",marginTop:"6px"}}/>                       
                    </div>
                    <div style={{display:"flex",gap:"10px"}}>
                    <Button size="xs" style={{background:"white",color:"#00ad95",border:"2px solid #00ad95"}} _hover={{background:"#00ad95",color:"white"}} >TRY IT FREE</Button>
                    <DownloadIcon style={{color:"#00ad95",marginTop:"4px"}}/>                    
                    <Menu>
                        <MenuButton size="xs" as={Button} style={{background:"none",}}>
                            <Avatar name={logindata[0].email} size="xs" src='https://bit.ly/broken-link' />
                        </MenuButton>
                        <MenuList minWidth='100px' bg="white">
                            <MenuItem><p>Settings</p></MenuItem>
                            <MenuItem><p>Apps</p></MenuItem>
                            <hr/>
                            <MenuItem><p>Need help?</p></MenuItem>
                            <MenuItem><p>Feedback</p></MenuItem>
                            <hr/>
                            <MenuItem><Button size="xs" style={{ background:"none",}} onClick={userlogout}>Logout</Button><ArrowForwardIcon/></MenuItem>
                        </MenuList>
                    </Menu>
                    
                    </div>
                    

                </div>
</div>
<div className="workspace">
                <div className="workdiv1">
                    <div style={{width:"100%",textAlign:"left"}}>
                    <p style={{color:"black",fontWeight:"900"}}>MY TASKS</p>
                    <hr style={{width:"100%"}}/>
                    <br/>
                    
                    <div style={{display:"flex",gap:"110px"}}>
                        <b>PROJECTS <ChevronDownIcon/></b>
                        <Button style={{background:"white",border:"0.5px solid black"}}size="xs" ref={btnRef}  onClick={onOpen}> <AddIcon/>  PROJECT</Button>
                    </div>
                    <hr style={{width:"100%",marginTop:"10px",textDecoration:"underline"}}/>
                    <div style={{display:"flex",gap:"10px",}}>
                        <p style={{textDecoration:"underline",color:"black"}}>ALL<ChevronDownIcon/></p>
                        <p style={{textDecoration:"underline",color:"black"}}>BY ORDER <ChevronDownIcon /></p>
                    </div>
    {/* ......................................Add Project Drawer.............................................................................. */}
                    
                    
                    <Drawer
                        isOpen={isOpen}
                        placement='right'
                        onClose={onClose}
                        finalFocusRef={btnRef}
                    >
                        <DrawerOverlay />
                        <DrawerContent>
                        <DrawerCloseButton />
                        <br/>
                        <br/>
                        {/* <DrawerHeader>Create your account</DrawerHeader> */}
                        <div>
                            <DrawerBody>
                                <Input placeholder='Project name' />
                            </DrawerBody>
                        <br/>
                        <FormControl display='flex' gap='10px' alignItems='center' padding="0px 0px 0px 25px" >
                            <Switch  />
                            <FormLabel  mb='0'>
                            PUBLIC
                            </FormLabel>
                        </FormControl>
                        <br/>
                            <Input variant='flushed' placeholder='Client' padding="0px 0px 0px 25px" />
                        <br/><br/>
                        
                        <div>
                            <p style={{fontSize:"14px",paddingLeft:"25px"}}>Estimated time</p>
                            <Input placeholder="00:00" padding="0px 0px 0px 25px"/>
                        </div>    
                        </div>
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                        <br/><br/>
                            <DrawerFooter>
                                <Button variant='outline' mr={3} onClick={onClose}>
                                Cancel
                                </Button>
                                <Button style={{color:"white",background:"black"}}>Save</Button>
                            </DrawerFooter>
                            </DrawerContent>
                        </Drawer>
                        
        {/* ....................................................Add Project Drawer end............................................................... */}
                    </div>
                    <div className="project">

                    </div>
                </div>
                <div className="workdiv2">
                    <div>
                        <b style={{fontSize:"15px"}}>Tasks</b>
                    </div>
                    <div style={{display:"flex",gap:"10px"}}>
                        <QuestionOutlineIcon boxSize={3} style={{marginTop:"5px"}}/>
                        <Menu >
                            <MenuButton size="xs" as={Button} rightIcon={<ChevronDownIcon />}>
                                By project
                            </MenuButton>
                            <MenuList >
                                <MenuItem>By project</MenuItem>
                                <MenuItem>By client</MenuItem>
                                <MenuItem>By priority</MenuItem>
                                <MenuItem>By date</MenuItem>
                                <MenuItem>By closed</MenuItem>
                            </MenuList>
                        </Menu>
                        <Menu>
                            <MenuButton size="xs" as={Button} leftIcon={<AddIcon boxSize={3} />}>
                                Tasks
                            </MenuButton>
                            
                        </Menu>
                        <Menu>
                            <MenuButton size="xs" as={Button} rightIcon={<ChevronDownIcon />}>
                            
                            </MenuButton>
                            <MenuList>
                                <MenuItem>Add multiple tasks</MenuItem>
                                <MenuItem>Add to calender</MenuItem>
                            </MenuList>
                        </Menu>
                    </div>
                    
                </div>
                <hr style={{marginTop:"10px"}}></hr>

        
        
        
</div>
                    </>
            }


        

            
        </div>
    )
}

export default Workspace






















