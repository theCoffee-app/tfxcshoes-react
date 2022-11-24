import React from "react";
import { Component } from "react";
// import { Link } from "react-router-dom";
import './Contact.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import PersonIcon from '@mui/icons-material/Person';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import { Paper } from '@mui/material';

const MailTo = ({ email, children }) => {
    return <a href={`mailto:${email}`}>{children}</a>
}


class Contact extends Component {
    render(){
        return(
        <section id="contact" style={{textAlign: "center"}}>
            <Paper elevation={3} className="contact-paper" style={{padding: "10px"}}>               
            {/* </Paper> */}
            <a href="https://www.tfxcshoes.com" target="_blank">
            <img src={"https://tfxcshoes.com/img/tfxc-logo2021%20copy.png"} id="head-shot" />   
            </a>
            <h1>TF XC Shoes</h1>
            </Paper>         
            {/* <Paper className="contact-paper" style={{backgroundColor: "slategrey", padding: "10px"}}>                      
            </Paper> */}
            <Paper elevation={3} className="contact-paper" style={{marginTop: "20px"}}>                
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
            <MailTo email="tfxcshoes@gmail.com">   
                <Paper elevation={3} className="contact-paper">
                    <EmailIcon fontSize="large"></EmailIcon>                   
                    <h4>tfxcshoes@gmail.com</h4>                
                </Paper>
            </MailTo>
        </section>
        )
    }
};

export default Contact;