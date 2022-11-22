import React from "react";
import { Component } from "react";
// import { Link } from "react-router-dom";
import './Contact.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import PersonIcon from '@mui/icons-material/Person';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import { Paper } from '@mui/material';

// function youtubeRedirect() {
//     window.location.replace("www.youtube.com/@tfxcShoes");
// }

class Contact extends Component {
    render(){
        return(
            <section id="contact" style={{textAlign: "center"}}>
            <div>
                <h1>TF XC Shoes</h1>
            </div>
            <img src={"https://tfxcshoes.com/img/tfxc-logo2021%20copy.png"} id="head-shot" />
            {/* <img src={"https://cmumavericks.com/images/2017/8/21//Graf_HS.jpg?width=300"} id="head-shot" /> */}
            <Paper elevation={3} className="contact-paper">                
                <PersonIcon fontSize="large"></PersonIcon>                
                <h4>Blake Graf</h4>            
            </Paper>
            <a href="https://www.instagram.com/tfxcshoes/" target="_blank">
            <Paper elevation={3} className="contact-paper">
                <InstagramIcon fontSize="large"></InstagramIcon>                
               <h4>@tfxcshoes</h4>
            </Paper>
            </a>
            <a href="https://www.youtube.com/@tfxcShoes" target="_blank">
            <Paper elevation={3} className="contact-paper">                
                <YouTubeIcon fontSize="large"></YouTubeIcon>                
                <h4 style={{textDecoration: "none"}}>YouTube.com/@tfxcShoes</h4>                
            </Paper>
            </a>
            <Paper elevation={3} className="contact-paper">
                <EmailIcon fontSize="large"></EmailIcon>            
                <h4>tfxcshoes@gmail.com</h4>
            </Paper>
        </section>
        )
    }
};

export default Contact;