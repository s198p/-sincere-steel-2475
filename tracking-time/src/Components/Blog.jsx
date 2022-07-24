
import React from 'react';
import "./Blog.css";
import { IconButton } from '@chakra-ui/react';
import { SearchIcon} from '@chakra-ui/icons';
import Navbar from "./Navbar";
import Footer from "./Footer";

import { Button, Heading, Input, Link } from '@chakra-ui/react'
import React from 'react';



const Blog = () => {


    const blogTile = [
        {
            id: 1,
            "url": "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/logos/airtable.png",
            head: "Airtable",
            para : "Powerful organizational spreadsheets that works exactly the way you want."
        },
        {
            id: 2,
            "url": "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/logos/anydo.png",
            head: "Any.Do",
            para : "Any.Do helps you get things done with your friends in a simple & elegant way."
        },
        {
            id: 3,
            "url": "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/logos/asana.png",
            head: "Asana",
            para : "Asana puts tasks and conversations together to enable teamwork without email."
        },
        {
            id: 4,
            "url": "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/logos/azendoo.png",
            head: "Azendoo",
            para : "Simplifies projects planning, documents sharing and teamwork synchronization for both your professional activity and your life."
        },
        {
            id: 5,
            "url": "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/logos/azure-devops.png",
            head: "Azure DevOps",
            para : "Continuous Delivery Services for teams to share code, track work, and ship software."
        },
        {
            id: 6,
            "url": "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/logos/basecamp-2.png",
            head: "Basecamp 2",
            para : "Basecamp is a web-based project collaboration tool that allows groups of people to share files."
        },
        {
            id: 7,
            "url": "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/logos/basecamp-3.png",
            head: "Basecamp 3",
            para : "Basecamp 3 is a web-based project collaboration tool that allows groups of people to share files."
        },
        {
            id: 8,
            "url": "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/logos/bitbucket.png",
            head: "Bitbucket",
            para : "Bitbucket is a code hosting site, for the Git and Mercurial version control systems."
        },
        {
            id: 9,
            "url": "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/button/clickup-time-tracking.png",
            head: "Clickup",
            para : "Docs, Reminders, Goals, Calendars, Chat, scheduling and more."
        },
        {
            id: 10,
            "url": "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/button/coda-time-tracking.png",
            head: "Coda",
            para : "Coda blends the flexibility of a document, the power of a spreadsheet."
        },
        {
            id: 11,
            "url": "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/button/dixa-time-tracking.png",
            head: "Dixa",
            para : "Customer service platform that unifies phone, email, chat and messaging apps."
        },
        {
            id: 12,
            "url": "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/button/evernote-time-tracking.png",
            head: "Evernote",
            para : "Create documents, collaborate on projects, and store information all in one place."
        },
        {
            id: 13,
            "url": "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/button/favro.png",
            head: "Favro",
            para : "Balance power and simplicity in the ideal collaboration app for developers."
        },
        {
            id: 14,
            "url": "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/button/figma-time-tracking.png",
            head: "Figma",
            para : "Cloud-based platform that enables businesses to create custom designs."
        },
        {
            id: 15,
            "url": "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/logos/flow.svg",
            head: "Flow",
            para : "Manage tasks, share files, have discussions, and capture ideas all in one place."
        },
        {
            id: 16,
            "url": "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/logos/freshdesk.png",
            head: "Freshdesk",
            para : "Freshdesk is an award-winning, online help desk software that allows you to support customers."
        },
        {
            id: 17,
            "url": "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/logos/github.png",
            head: "GitHub",
            para : "GitHub is a web-based hosting service for projects that use the Git revision control system."
        },
        {
            id: 18,
            "url": "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/logos/gitlab.png",
            head: "GitLab",
            para : "GitLab is a on-premise or hosted Git repository management tool."
        },
        {
            id: 19,
            "url": "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/button/ring-central-time-tracking.png",
            head: "Ring Central",
            para : "Conversation platform for teams to plan, share & organize work tasks."
        },   
        {
            id: 20,
            "url": "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/logos/gmail.png",
            head: "Gmail",
            para : "Gmail is a free search-based web-mail service by Google."
        },
        {
            id: 21,
            "url": "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/button/google-calendar.png",
            head: "Google Calender",
            para : "With Google Calendar, its easy to keep track of all your lifes important events in one place."
        },
        {
            id: 22,
            "url": "https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/logos/gdocs.png",
            head: "Google Docs",
            para : "Google Docs is an online word processor, part of Google Drive."
        },
]   
  return (
    <div>
        <Navbar/>
        <h2 className='head1'>TRACKING TIME BUTTON FOR CHROME</h2>
        <h1 className='head2'>TrackingTime <br />Integrations</h1>
        <h2 className='head3'>TIME TRACKING INTEGRATIONS THAT YOU'LL LOVE</h2> 
        <div className='searchbar'>
            <input type="text" className='search' placeholder='SEARCH YOUR FAVOURITE APP!' />
            <IconButton aria-label='Search database' icon={<SearchIcon />} />        
        </div>
        <div>
            <p className='head4'>Improve your time tracking and increase your productivity with these Integrations.<br/>
See how much time you spend on each task or project! TrackingTime's integrations make it easy to keep track of your <br/> billable and non-billable tasks by integrating with more than 30 apps.<br/><br/>
TrackingTime can be integrated with other apps, such as project management, accounting, and customer support. Get <br/> instant timesheets and analytics with TrackingTime!</p>
        </div>
        <div className='intigrationmapping' >
            {
                blogTile.map((item) => (
                    <div className='intigrationgird' key ={item.id}  style={{textAlign: 'left'}}>
                        <div>
                            <div className='intigrationlogo'>
                            <img src={item.url} alt="" style={{
                                width:"39px", height:"39px"}} />
                            </div>
                            <div style={{marginTop:"20px"}}>
                            <b className='head5'>{item.head}</b>
                            </div>
                            
                            <p className='head6'>{item.para}</p>
                        </div> 
                    </div>
                ))
            }
        </div>

        <div className='TrackEvery'>
            <div>
                <img src="	https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/home/download-section/phone.png" alt="" />
            </div>
            <div>
                <h2 className='head7'>Track Everywhere</h2>
                <p className='head8'>Track your time everywhere you work with our <br /> mobile apps for iOS and Android.</p>  

                
            </div>
        </div>
        <br/>
        <Footer/>
    </div>
  )
};
export default Blog;

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

    const homeTile2=[
        {
            id:1,
            "url":"https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/logos/asana.png",
            head:"Asana",
            para:"Asana puts tasks and conversations together to enable teamwork without email."
        },
        {
            id:2,
            "url":"https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/logos/trello.png",
            head:"Trello",
            para:"Trello is a collaboration tool that organizes your projects into boards."
        },
        {
            id:3,
            "url":"https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/logos/todoist.png",
            head:"Todoist",
            para:"Todoist is a task manager thats useful, fast and easy to use."
        },
        {
            id:4,
            "url":"https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/logos/smartsheet.png",
            head:"Smartsheet",
            para:"Smartsheet is a web-based project and task management and work collaboration software."
        }
    ]

    const homeTile3=[
        {
            id:1,
            "url":"https://trackingtime.co/wp-content/themes/trackingtime-v4/img/keywords/slider-1.svg",
            head:"Timecards Approval",
            para:"Track clock in and out times with no effort."
        },
        {
            id:2,
            "url":"https://trackingtime.co/wp-content/themes/trackingtime-v4/img/keywords/slider-2.svg",
            head:"Budgeting",
            para:"Keep your projects on time and budget."
        },
        {
            id:3,
            "url":"https://trackingtime.co/wp-content/themes/trackingtime-v4/img/keywords/slider-3.svg",
            head:"Work schedules",
            para:"Specify when your employees are expected to be at their job."
        },
        {
            id:4,
            "url":"https://trackingtime.co/wp-content/themes/trackingtime-v4/img/keywords/slider-4.svg",
            head:"Timesheet Audits",
            para:"Avoid data inconsistencies with just one click."
        }
    ]

  return (
    <div>
        <div style={{background:"#f6f8f9"}}>
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
                <Input placeholder="Your Work Email" type="email" style={{width:"250px", border:"1px solid black",background:"white"}}></Input>

                <Button className="fr_btn" style={{background:"#00ad95",color:"white",width:"150px"}}>START FOR FREE</Button>
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
            <div>
                <br/>
            <b style={{fontWeight:"900",fontSize:"20px"}}>THE FEATURES YOUR PROJECT MANAGEMENT APP IS MISSING.</b>
            </div>
            <div style={{display:"flex",gap:"20px",padding:"10rem",marginTop:"-120px"}}>
                
                {
                    homeTile.map((item)=>(
                        
                        <div style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",padding:"1rem",height:"auto",width:"100%"}}
                        key={item.id} >
                            <div style={{width:"100%",}}>
                            <img style={{width:"100%"}}
                            alt="."
                            src={item.url}  />
                            <b>{item.head}</b>
                            <p>{item.para}</p>
                            </div>
                            
                            </div>
                        ))
                        

                }
            </div>
            <div>
                <img style={{height:"180px",marginLeft:"150px"}}
                src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/temp/logos/grupo.svg"
                alt=""
                />
            </div>
            
            <div style={{display:"flex",gap:"20px"}}>
                <div style={{width:"20%",textAlign:"left",marginLeft:"150px"}}>
                    <b style={{fontSize:"28px"}}>Add time tracking to your favorite business apps</b>
                    <p>No matter where your employees work, TrackingTime works with them. Install the TrackingTime Button for Chrome and Firefox and track time right within the productivity apps your employees use everyday.</p>
                    <br/>
                    <Button style={{border:"2px solid black",coloe:"black"}} _hover={{background:"black",color:"white"}} >See All</Button>
                </div>
                <div style={{display:"flex",width:"80%",gap:"20px"}}>
                {
                    homeTile2.map((item)=>(
                        
                        <div style={{textAlign:"left",padding:"50px 0px 0px 0px"}}
                        key={item.id} >
                            <div style={{width:"220px"}}>
                            <img style={{height:"80px"}}
                            alt="."
                            src={item.url}  />
                            <br/>
                            <b>{item.head}</b>
                            <p>{item.para}</p>
                            </div>
                            
                            </div>
                        ))
                        

                }
                </div>
            </div>
            <br/>
            <br/>
            <div style={{display:"flex",gap:"30px",padding:"80px 140px 0px 140px",background:"white"}}>
                {
                    homeTile3.map((item)=>(
                        
                        <div style={{textAlign:"center"}}
                        key={item.id} >
                            <div style={{}}>
                            <img style={{height:"150px",width:"100%"}}
                            alt="."
                            src={item.url}  />
                            <br/>
                            <b style={{fontSize:"20px"}}>{item.head}</b>
                            <p>{item.para}</p>
                            </div>
                            <br/>
                            <br/>
                            </div>
                        ))
                        

                }
                
                </div>
                <br/>
                <br/>
                <div style={{textAlign:"left",marginLeft:"150px"}}>
                        <div >
                            <img style={{height:"70px"}}
                            src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/layout/footer/tt.svg"
                            />
                            <br/>
                            <Heading style={{fontSize:"40px"}}>Get Started</Heading>
                            <br/>
                            <p>Sign up today and join thousands of people around the world using TrackingTime to make the most of their time.</p>
                        </div>
                        <br/>
                    
                        <div style={{display:"flex",gap:"20px",padding:"0.2rem",textAlign:"left"}}>
                            <Input placeholder="Your Work Email" type="email" style={{width:"250px", border:"1px solid black",background:"white"}}></Input>
                            
                            <Button className="fr_btn" style={{background:"#00ad95",color:"white",width:"150px"}}>START FOR FREE</Button>
                        </div>
                        <br/>
                        
                        <div style={{display:"flex", gap:"30px",textAlign:"left"}}>
                            <img className="google"
                            src="https://trackingtime.co/wp-content/themes/trackingtime-v4/img/keywords/google-key.png" 
                            alt="google"/>
                            <Link _hover={{color:"#00ad95",textDecoration:"underline"}}
                            href="https://accounts.google.com/o/oauth2/auth/identifier?approval_prompt=force&client_id=438303160091-2v96mru5mn075n2foabpddbne5ais5ik.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fapp.trackingtime.co%2Fv4%2Fgoogle%2Fsignin%2Fcallback&response_type=code&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&state=google--717121023&flowName=GeneralOAuthFlow" isExternal>
                            <b style={{fontSize:"18px"}}>Sign in with Google</b>
                            </Link>
                        </div>
                </div>
            
            
        </div>
    </div>
  )
}

export default Blog

