import React from 'react';
import "./Blog.css";
import { IconButton } from '@chakra-ui/react';
import { SearchIcon} from '@chakra-ui/icons';
import Navbar from "./Navbar";
import Footer from "./Footer";


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