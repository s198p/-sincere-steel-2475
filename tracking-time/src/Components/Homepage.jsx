import { Button, Heading, Input, Link } from '@chakra-ui/react'
import React from 'react';
import "./Homepage.css";

const Homepage = () => {

const homeTile=[
    {
        id:1,
        "url":"https://trackingtime.co/wp-content/themes/trackingtime-v4/img/keywords/article-1.svg",
        head:"Measure your teams productivity",
        para:"Get a record of the worked hours and keep your projects in order, be abreast of ongoing or completed projects with our super friendly app."
    },
    {
        id:2,
        "url":"https://trackingtime.co/wp-content/themes/trackingtime-v4/img/keywords/article-2.svg",
        head:"The most flexible reporting engine",
        para:"Project budgeting, client billing, payroll, productivity analytics and much more: No matter what kind of reports you need, TrackingTime has got you covered."
    },
    {
        id:3,
        "url":"https://trackingtime.co/wp-content/themes/trackingtime-v4/img/keywords/article-3.svg",
        head:"Monitor your teams workload, in real time",
        para:"See every work in progress and measure the productivity of your team by monitoring them in real time"
    }
]

  return (
    <div>
        <div>
            <div>
                <b style={{color:"#00ad95"}}>TRACKINGTIME TIME TRACKER SOFTWARE</b>
                <br/>
                <br/>
                <br/>
                
                <b style={{fontSize:"30px",fontWeight:"bold"}}>SET AND FORGET TIME TRACKING</b>
                <br/>
                <br/>
                <Heading style={{fontSize:"74px"}}>Bring your productivity </Heading>
                <Heading style={{fontSize:"74px"}}>to the next level.</Heading>
            </div>
            <div style={{display:"flex",gap:"20px",padding:"1rem",justifyContent:"center"}}>
                <Input placeholder="Your Work Email" type="email" style={{width:"250px", border:"1px solid black"}}></Input>
                <Button className="fr_btn" style={{background:"#00ad95",color:"white"}}>START FOR FREE</Button>
            </div>
            <br/>
            <br/>
            <div style={{display:"flex", gap:"30px",justifyContent:"center"}}>
                <img className="google"
                src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/keywords/google-key.png" 
                alt="google"/>
                <Link _hover={{color:"#00ad95",textDecoration:"underline"}}
                href="https://accounts.google.com/o/oauth2/auth/identifier?approval_prompt=force&client_id=438303160091-2v96mru5mn075n2foabpddbne5ais5ik.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fapp.trackingtime.co%2Fv4%2Fgoogle%2Fsignin%2Fcallback&response_type=code&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&state=google--717121023&flowName=GeneralOAuthFlow" isExternal>
                <b style={{fontSize:"20px"}}>Sign in with Google</b>
                </Link>
            </div>
            <div>
                <img style={{objectFit:"contain",width:"80%"}}
                src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/layout/header/ilus-header-2.svg"
                alt="cover"
                />
            </div>
            <div style={{display:"flex",gap:"20px",padding:"10rem"}}>
                {
                    homeTile.map((item)=>(
                        
                        <div style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",padding:"1rem",height:"auto",width:"100%"}}
                        key={item.id} >
                            <div style={{width:"100%",}}>
                            <img style={{width:"100%"}}
                            src={item.url}  />
                            <b>{item.head}</b>
                            <p>{item.para}</p>
                            </div>
                            
                            </div>
                        ))
                        

                }
            </div>
            
        </div>
    </div>
  )
}

export default Homepage