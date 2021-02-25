import React from 'react'
import {Button,Grid} from "@material-ui/core"
import "./footer.css"

function Footer() {
    return (
        <div className="footer">
            <div class="footer__content">
                <h3>Join the adventure news letter to receive our best vacacions deals</h3>
                <p>You can unsubscribe at any time</p>
                <div class="footer__field">
                    <div class="field__left">
                        <input type="text" placeholder="Your email"/>
                    </div>
                    <div class="field__right">
                        <Button variant="outlined" style={{color:"white",border:"1px solid white"}}>Subscribe</Button>
                    </div>
                </div>
                <Grid container spacing={3} >
                    <Grid item xs={3}>
                        <div class="footer__details">
                            <h3>About us</h3>
                            <p>How it works</p>
                            <p>Testimonials</p>
                            <p>Careers</p>
                            <p>Investors</p>
                            <p>Terms of service</p>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div class="footer__details">
                            <h3>Contact us</h3>
                            <p>Contact</p>
                            <p>Support</p>
                            <p>Destinations</p>
                            <p>Sponsorships</p>
                       
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div class="footer__details">
                            <h3>Videos</h3>
                            <p>Submit video</p>
                            <p>Ambassador</p>
                            <p>Agency</p>
                            <p>Inluencer</p>
                       
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div class="footer__details">
                            <h3>Social Media</h3>
                            <p>Instagram</p>
                            <p>Facebook</p>
                            <p>Youtube</p>
                            <p>Twitter</p>
                       
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
