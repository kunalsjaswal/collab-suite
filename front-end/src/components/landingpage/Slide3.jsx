import React from 'react'
import { SlideThree } from './Style'
import Blob1 from "../../images/blobs/blob-1.png"


const Slide3 = () => {
    return (
        <SlideThree data-aos="fade-left" data-aos-duration="500">
            <div className='heading'>
                <h1>ABOUT US</h1>
            </div>
            <div className='content'>
                <img className='blob1' src={Blob1} alt="" />
                <div>
                    <h2>Welcome to Remote Team Collaboration Suite</h2>
                    <p>At Remote Team Collaboration Suite, we believe in the power of connection, regardless of distance. In today's dynamic work environment, teams are no longer confined to a single office space. Instead, they span across cities, countries, and even continents. This is where our suite comes in.</p>
                </div>
                <div>
                    <h2>Our Mission</h2>
                    <p>Remote Team Collaboration Suite is a comprehensive platform designed to streamline remote team collaboration. From communication tools to project management features, we've got everything your team needs to succeed in the virtual workspace.</p>
                </div>
                <div>
                    <h2>Key Features</h2>
                    <ul>
                        <li>
                            Real-time Communication: Stay connected with your team through instant messaging, video conferencing, and voice calls. Our platform ensures smooth communication, no matter where your team members are located.
                        </li>
                        <li>Project Management: Keep projects on track with our intuitive project management tools. Assign tasks, set deadlines, and track progress with ease, all within a single platform.</li>
                        <li>
                            File Sharing and Collaboration: Share files, documents, and presentations effortlessly. Collaborate in real-time, provide feedback, and make edits together, fostering a sense of teamwork and camaraderie.
                        </li>
                        <li>
                            Customizable Workspaces: Tailor your workspace to suit your team's unique needs. Create channels, groups, and projects, and customize permissions to ensure that everyone has access to the right information.
                        </li>
                    </ul>
                </div>
            </div>
        </SlideThree>
    )
}

export default Slide3