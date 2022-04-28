import React from "react";
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Overlay from "./FunctionOverlay";

function About(){
    

    return(
        <div id="aboutContainer">
            <section id = "about">
            <div id = "cardInfo">
                <h1>About</h1>
                <h2>Who am i?</h2>
                <p>I am Julian Fuentes, a software engineer, focus on full stack development (more interest on backend).
                I love to work in team an learn new things each day. I am hardworker person that never gives up
                and always tries to help others.</p>
                <form action="https://drive.google.com/file/d/1F-FK8N9CKLJHInm9qXVGClyyQqK9RlBU/view?usp=sharing">
                    <Button type="submit" variant="outline-warning" size="lg">Download CV</Button>{' '}
                </form>
                
            </div>
            <div id= "skillsInfo">
                <h1>My skills</h1>
                <div id="skillsIcons">
                    <Overlay info={"Intermediate Skills"} img = {"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"}/>
                    <Overlay info={"Intermediate Skills"} img = {"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"}/>
                    <Overlay info={"Intermediate Skills"} img = {"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"}/>
                    <Overlay info={"Intermediate Skills"} img = {"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"}/>
                    <Overlay info={"Intermediate Skills"} img = {"https://camo.githubusercontent.com/7c669e872b214571ae0b5097e8d3db369225a806dc2ce9a436cde3497164310c/687474703a2f2f6d6f6e676f64622d746f6f6c732e636f6d2f696d672f6d6f6e676f6f73652e706e67"}/>
                    <Overlay info={"Intermediate Skills"} img = {"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"}/>
                    <Overlay info={"Intermediate Skills"} img = {"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"}/>
                    <Overlay info={"Intermediate Skills"} img = {"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"}/>
                    <Overlay info={"Intermediate Skills"} img = {"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"}/>
                    <Overlay info={"Intermediate Skills"} img = {"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"}/>
                    <Overlay info={"Intermediate/Beginner Skills"} img = {"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"}/>
                    

                </div>

            </div>
            </section>
            
            
        </div>
    )
}




export default About;