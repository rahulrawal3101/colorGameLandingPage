import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import { AppBar, Box, Button, Container, Grid, OutlinedInput, Paper, Toolbar, Typography } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import game5 from '../assets/game5.png';
import black from '../assets/hero.avif';
import FooterComp from '../components/Footer';
import '../master.css';








const PrivacyPolicy = () => {

    const navigate = useNavigate()
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    const handleNavigator = (ele) => {
        navigate(ele)
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    // 
    return (
        <>
            <Container maxWidth={'xl'} disableGutters >

                <AppBar sx={{ bgcolor: 'black', borderBottom: "2px solid white" }}>
                    <Toolbar>

                        <Grid container sx={{ justifyContent: 'space-between', alignItems: 'center', padding: '10px 5px ', }}>
                            <Grid item xs={3} sx={{ display: 'flex', cursor: "pointer" }} onClick={() => { navigate('/') }}>
                                <Typography sx={{ color: 'lightgreen', fontSize: '22px', fontWeight: '800' }}>L</Typography>
                                <Typography sx={{ color: 'yellow', fontSize: '22px', fontWeight: '800' }}>u</Typography>
                                <Typography sx={{ color: 'skyblue', fontSize: '22px', fontWeight: '800' }}>c</Typography>
                                <Typography sx={{ color: 'white', fontSize: '22px', fontWeight: '800' }}>k</Typography>
                                <Typography sx={{ color: '#ef6c00', fontSize: '22px', fontWeight: '800' }}>y</Typography>
                                <Typography sx={{ color: 'lightpink', fontSize: '22px', fontWeight: '800' }}>Q</Typography>
                                <Typography sx={{ color: 'orange', fontSize: '22px', fontWeight: '800' }}>u</Typography>
                                <Typography sx={{ color: 'lightgrey', fontSize: '22px', fontWeight: '800' }}>i</Typography>
                                <Typography sx={{ color: 'white', fontSize: '22px', fontWeight: '800' }}>z</Typography>
                            </Grid>
                            <Grid item xs={7}>
                                <Box sx={{ width: '100%', display: { lg: 'flex', md: 'flex', sm: 'none', xs: 'none' } }}>
                                    <Box sx={{ width: '20%', color: '#5c6bc0', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                        <Typography sx={{ fontSize: '17px', cursor: "pointer", color: 'white' }} onClick={() => {
                                            navigate('/'); window.scrollTo({
                                                top: 0,
                                                behavior: "smooth"
                                            })
                                        }}>Home</Typography>
                                    </Box>
                                    <Box sx={{ width: '20%', color: '#5c6bc0', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                                        <Typography sx={{ fontSize: '17px', cursor: "pointer", color: 'white' }} onClick={() => {
                                            navigate('/about'); window.scrollTo({
                                                top: 0,
                                                behavior: "smooth"
                                            })
                                        }}>About</Typography>
                                    </Box>
                                    <Box sx={{ width: '20%', color: '#5c6bc0', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                                        <Typography sx={{ fontSize: '17px', cursor: "pointer", color: 'white' }}>Gallery</Typography>
                                    </Box>
                                    <Box sx={{ width: '20%', color: '#5c6bc0', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                                        <Typography sx={{ fontSize: '17px', cursor: "pointer", color: 'white' }}>Contact</Typography>
                                    </Box>
                                    <Box sx={{ width: '20%', color: '#5c6bc0', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                                        <Button variant='contained' sx={{ bgcolor: '#5c6bc0', color: 'white', fontSize: '13px', borderRadius: '10px' }}>Download</Button>
                                    </Box>

                                </Box>

                            </Grid>


                        </Grid>




                    </Toolbar>
                </AppBar>
                {/* one  */}
                <Grid container sx={{ justifyContent: "center", alignItems: "center", bgcolor: "#f1f3f6", overflow: "hidden", pt: { lg: "60px", md: "60px", sm: "60px", xs: "55px" } }}>
                    <Grid container sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap-reverse', backgroundImage: `url(${black})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%', p: '20px 8px' }}>
                        <Grid item lg={6} md={6} sm={12} xs={12} data-aos='fade-up' sx={{ mt: '-30px' }}  >
                            <Typography sx={{ color: '#f5f5f5', fontSize: { lg: '30px', md: '28px', sm: '25px', xs: '23px' }, fontWeight: '800', textAlign: 'center' }}>Luckyquiz is one of the best skill based  game in india.</Typography>
                            <Typography sx={{ fontSize: '15px', mt: '5px', textAlign: 'center', color: '#aed581' }}>Luckyquiz allows you to earn money by applying ur skill The amount earned can be withdraw easily.</Typography>
                        </Grid>

                        <Grid item data-aos='fade-up' lg={6} md={6} sm={12} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Box sx={{ width: { lg: '50%', md: '70%', sm: '50%', xs: '80%' }, height: { lg: '470px', md: "470px", sm: "430px", xs: "400px" }, }}>
                                <img src={game5} width={'100%'} height={'100%'} alt='game1' style={{ borderRadius: '10px' }} />
                            </Box>

                        </Grid>


                    </Grid>







                    <Grid item xs={12} sx={{ mt: "20px" }}>
                        <Grid container className='resultScroll' sx={{ overflow: "hidden", height: "100%", bgcolor: "#f1f3f6", p: "0px 20px" }}>
                            <Grid item xs={12} sx={{ mb: "20px" }}>
                                <Box >
                                    <Paper sx={{ p: "15px" }}>

                                        <Typography align='center' sx={{ color: "#1976d2", fontSize: "35px", letterSpacing: "2px", fontWeight: "900" }}>
                                            Privacy Policy
                                        </Typography>
                                        <Typography sx={{ fontSize: "15px", mt: "7px" }}>
                                            This Privacy Policy governs the manner in which<a href=''>http://www.luckyquiz.in/</a>  collects,
                                            uses, maintains and discloses information collected from users (each, a User) of
                                            the <a href=''>http://www.luckyquiz.in/</a> website (Site). This privacy policy applies to the Site,
                                            all products and services offered by <a href=''>http://www.luckyquiz.in/</a>.


                                        </Typography>

                                        <Grid container>
                                            <Grid item xs={12} sx={{ mt: '14px' }}>
                                                <Typography sx={{ fontSize: { lg: '20px', md: '20px', sm: '18px', xs: '18px', fontWeight: 'bold', } }}>Personal Identification Information
                                                </Typography>
                                                <Typography sx={{ fontSize: '15px', mt: '8px' }}>We may collect personal identification information from Users in a variety of ways,
                                                    including, but not limited to, when Users visit our site, subscribe to the newsletter, and
                                                    in connection with other activities, services, features or resources we make available
                                                    on our Site. Users may be asked for, as appropriate, name, email address. Users may,
                                                    however, visit our Site anonymously. We will collect personal identification
                                                    information from Users only if they voluntarily submit such information to us. Users
                                                    can always refuse to supply personally identification information, except that it may
                                                    prevent them from engaging in certain Site related activities.
                                                </Typography>

                                            </Grid>
                                            <Grid item xs={12} sx={{ mt: '14px' }}>
                                                <Typography sx={{ fontSize: { lg: '20px', md: '20px', sm: '18px', xs: '18px', fontWeight: 'bold', } }}>Non-personal Identification Information

                                                </Typography>
                                                <Typography sx={{ fontSize: '15px', mt: '8px' }}>We may collect non-personal identification information about Users whenever they
                                                    interact with our Site. Non-personal identification information may include the
                                                    browser name, the type of computer and technical information about Users means of
                                                    connection to our Site, such as the operating system and the Internet service providers
                                                    utilized and other similar information
                                                </Typography>

                                            </Grid>
                                            <Grid item xs={12} sx={{ mt: '14px' }}>
                                                <Typography sx={{ fontSize: { lg: '20px', md: '20px', sm: '18px', xs: '18px', fontWeight: 'bold', } }}>Web Browser Cookies

                                                </Typography>
                                                <Typography sx={{ fontSize: '15px', mt: '8px' }}>Our Site may use “cookies” to enhance User experience. User’s web browser places
                                                    cookies on their hard drive for record-keeping purposes and sometimes to track
                                                    information about them. User may choose to set their web browser to refuse cookies,
                                                    or to alert you when cookies are being sent. If they do so, note that some parts of the
                                                    Site may not function properly.
                                                </Typography>

                                            </Grid>
                                            <Grid item xs={12} sx={{ mt: '14px' }}>
                                                <Typography sx={{ fontSize: { lg: '20px', md: '20px', sm: '18px', xs: '18px', fontWeight: 'bold', } }}>How We Use Collected Informations?
                                                </Typography>
                                                <Typography sx={{ fontSize: '15px', mt: '8px' }}>http://www.luckyquiz.in/ collects and uses Users personal information for the
                                                    following purposes:<br />


                                                </Typography>
                                                <Typography sx={{ fontSize: '15px', mt: '8px' }}>– To improve our Site
                                                    we continuously strive to improve our website offerings based on the information and
                                                    feedback we receive from you. </Typography>
                                                <Typography sx={{ fontSize: '15px', mt: '8px' }}>– To improve customer service
                                                    Your information helps us to more effectively respond to your customer service
                                                    requests and support needs.</Typography>

                                            </Grid>
                                            <Grid item xs={12} sx={{ mt: '14px' }}>
                                                <Typography sx={{ fontSize: { lg: '20px', md: '20px', sm: '18px', xs: '18px', fontWeight: 'bold', } }}>How We Protect Your Information?
                                                </Typography>
                                                <Typography sx={{ fontSize: '15px', mt: '8px' }}>We adopt appropriate data collection, storage and processing practices and security
                                                    measures to protect against unauthorized access, alteration, disclosure or destruction
                                                    of your personal information, username, password, transaction information and data
                                                    stored on our Site.
                                                </Typography><br />
                                                <Typography sx={{ fontSize: '15px', mt: '8px' }}>Sensitive and private data exchange between the Site and its Users happens over a
                                                    SSL secured communication channel and is encrypted and protected with digital
                                                    signatures. Our Site is also in compliance with PCI vulnerability standards in order to
                                                    create as secure of an environment as possible for Users.
                                                </Typography>

                                            </Grid>
                                            <Grid item xs={12} sx={{ mt: '14px' }}>
                                                <Typography sx={{ fontSize: { lg: '20px', md: '20px', sm: '18px', xs: '18px', fontWeight: 'bold', } }}>Sharing Your Personal Information

                                                </Typography>
                                                <Typography sx={{ fontSize: '15px', mt: '8px' }}>We do not sell, trade, or rent Users personal identification information to others. We
                                                    may share generic aggregated demographic information not linked to any personal
                                                    identification information regarding visitors and users with our business partners,
                                                    trusted affiliates and advertisers for the purposes outlined above.
                                                </Typography>

                                            </Grid>

                                            <Grid item xs={12} sx={{ mt: '14px' }}>
                                                <Typography sx={{ fontSize: { lg: '20px', md: '20px', sm: '18px', xs: '18px', fontWeight: 'bold', } }}>Compliance with Children’s Online Privacy Protection Act

                                                </Typography>
                                                <Typography sx={{ fontSize: '15px', mt: '8px' }}>Protecting the privacy of the very young is especially important. For that reason, we
                                                    never collect or maintain information at our Site from those we actually know are
                                                    under 13, and no part of our website is structured to attract anyone under 13.
                                                </Typography>

                                            </Grid>

                                            <Grid item xs={12} sx={{ mt: '14px' }}>
                                                <Typography sx={{ fontSize: { lg: '20px', md: '20px', sm: '18px', xs: '18px', fontWeight: 'bold', } }}>Changes to This Privacy Policy

                                                </Typography>
                                                <Typography sx={{ fontSize: '15px', mt: '8px' }}><a href=''>http://www.luckyquiz.in/</a> has the discretion to update this privacy policy at any time.
                                                    When we do, we will post a notification on the main page of our Site. We encourage
                                                    Users to frequently check this page for any changes to stay informed about how we
                                                    are helping to protect the personal information we collect. You acknowledge and
                                                    agree that it is your responsibility to review this privacy policy periodically and
                                                    become aware of modifications.

                                                </Typography>

                                            </Grid>

                                            
                                            <Grid item xs={12} sx={{ mt: '14px' }}>
                                                <Typography sx={{ fontSize: { lg: '20px', md: '20px', sm: '18px', xs: '18px', fontWeight: 'bold', } }}>You’re Consent


                                                </Typography>
                                                <Typography sx={{ fontSize: '15px', mt: '8px' }}>By using our site, you consent to our privacy policy.

                                                </Typography>

                                            </Grid>
                                        </Grid>

                                    </Paper>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sx={{ bgcolor: 'black' }}>

                                <Grid container>
                                    <Grid item xs={12} data-aos="fade-up" sx={{ bgcolor: "white", p: "40px 15px 30px 15px", mb: "25px" }}>
                                        <Typography align='center' sx={{ color: "#1976d2", fontSize: "35px", letterSpacing: "2px", fontWeight: "900" }}>
                                            Contact
                                        </Typography>
                                        <Typography align='center' sx={{ mt: "10px" }}>
                                            For booking or any queries, feel free to contact us
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12} lg={6} sx={{ bgcolor: 'black' }}>
                                        <Grid container sx={{ bgcolor: "black", p: "20px" }}>

                                            <Grid item lg={6} md={6} sm={12} xs={12} sx={{ border: "3px solid white", bgcolor: "black", p: "40px 15px 30px 15px", borderRadius: '7px' }} data-aos="fade-up" >
                                                <Box sx={{ display: "flex", justifyContent: "center" }}>
                                                    <LocationOnIcon sx={{ fontSize: "50px", color: "#1976d2" }} />
                                                </Box>
                                                <Typography align='center' sx={{ fontSize: "25px", color: "#1976d2" }}>
                                                    ADDRESS
                                                </Typography>
                                                <Typography align='center' sx={{ color: 'white' }}>
                                                    BLOCK 231C, KACHARUPURIA, BUGDOI BRIDGE, JORHAT, 785001, ASSAM
                                                </Typography>
                                            </Grid>

                                            <Grid item lg={6} md={6} sm={12} xs={12} sx={{ border: "3px solid white", bgcolor: "black", p: "40px 15px 30px 15px", borderRadius: '7px' }} data-aos="fade-up" >
                                                <Box sx={{ display: "flex", justifyContent: "center" }}>
                                                    <CallIcon sx={{ fontSize: "50px", color: "#1976d2" }} />
                                                </Box>
                                                <Typography align='center' sx={{ fontSize: "25px", color: "#1976d2" }}>
                                                    Call Us
                                                </Typography>
                                                <Typography align='center' sx={{ color: 'white' }}>
                                                    +91 8099851924
                                                </Typography>
                                            </Grid>

                                            <Grid item lg={6} md={6} sm={12} xs={12} sx={{ border: "3px solid white", bgcolor: "black", p: "40px 15px 30px 15px", borderRadius: '7px' }} data-aos="fade-up" >
                                                <Box sx={{ display: "flex", justifyContent: "center" }}>
                                                    <MailIcon sx={{ fontSize: "50px", color: "#1976d2" }} />
                                                </Box>
                                                <Typography align='center' sx={{ fontSize: "25px", color: "#1976d2" }}>
                                                    Email Us
                                                </Typography>
                                                <Typography align='center' sx={{ color: 'white' }}>
                                                    daichsenyo@gmail.com
                                                </Typography>
                                            </Grid>

                                            <Grid item lg={6} md={6} sm={12} xs={12} sx={{ border: "3px solid white", bgcolor: "black", p: "40px 15px 30px 15px", borderRadius: '7px' }} data-aos="fade-up" >
                                                <Box sx={{ display: "flex", justifyContent: "center" }}>
                                                    <AccessTimeIcon sx={{ fontSize: "50px", color: "#1976d2" }} />
                                                </Box>
                                                <Typography align='center' sx={{ fontSize: "25px", color: "#1976d2" }}>
                                                    Working Hours
                                                </Typography>
                                                <Typography align='center' sx={{ color: 'white' }}>
                                                    Mon-Fri:9AM to 5PM
                                                </Typography>
                                                <Typography align='center' sx={{ color: 'white' }}>
                                                    Sun:9AM to 1PM
                                                </Typography>
                                            </Grid>




                                        </Grid>
                                    </Grid>

                                    <Grid item lg={6} xs={12} sx={{ bgcolor: "black", p: "25px 10px 30px 10px" }}>

                                        <Box component={'div'} data-aos="fade-up">
                                            <OutlinedInput placeholder='Your Name' sx={{ height: "50px", border: '1px solid #1976d2', color: 'white', outline: 'none' }} fullWidth />
                                            <OutlinedInput placeholder='Your Email' sx={{ height: "50px", mt: "10px", border: '1px solid #1976d2', color: 'white' }} fullWidth />
                                            <OutlinedInput placeholder='Subject' sx={{ height: "50px", mt: "10px", border: '1px solid #1976d2', color: 'white' }} fullWidth />
                                            <textarea placeholder='Message' style={{ width: "98.9%", marginTop: "10px", border: '1px solid #1976d2', color: 'white', backgroundColor: 'transparent', height: "100px" }} />
                                            <Box variant="outlined" sx={{ display: "flex", justifyContent: "center", mt: "20px" }} >
                                                <Button variant='outlined' sx={{ color: '"#1976d2" ', borderRadius: "25px", p: "10px 20px", border: "2px solid #1976d2", color: "white" }}>Send Message</Button>
                                            </Box>
                                        </Box>

                                    </Grid>

                                </Grid>



                            </Grid>




                            {/* <Grid item xs={12} sx={{ mt: "30px" }}>

                                <Box sx={{ mt: "15px", p: "10px 10px 30px 10px" }}>
                                    <Typography align='center' sx={{ color: "#757575" }}>© Copyright Adelsocial Pvt Ltd. All Rights Reserved</Typography>
                                    <Typography align='center' sx={{ color: "#757575" }}>
                                        Designed and Developed by Adelsocial
                                    </Typography>
                                </Box>

                            </Grid> */}
                        </Grid>
                    </Grid>
                </Grid>
                {/* <Box sx={{ mt: "70px", p: "15px 30px", bgcolor: "black" }}>
                    <Grid container sx={{ p: "5px 10px 20px 10px" }}>
                        <Grid item lg={4} md={4} sm={6} xs={12} sx={{ display: "flex", justifyContent: { lg: "center", md: "center", sm: "left", xs: "left" } }}>
                            <Box sx={{ mt: "20px" }}>
                                <Typography sx={{ fontSize: "25px", color: "white" }}>
                                    LuckyQuiz
                                </Typography>
                                <Typography sx={{ color: "white" }}>
                                    BLOCK 231C, KACHARUPURIA, BUGDOI BRIDGE,JORHAT,785001,ASSAM
                                </Typography>

                                <Typography sx={{ mt: "15px", color: "white" }}>
                                    <span>Phone:</span>+91 -8099851924
                                </Typography>
                                <Typography sx={{ color: "#757575", color: "white" }}>
                                    <span >Email:</span>DAICHSENYO@GMAIL.COM
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item lg={3} md={3} sm={6} xs={12} sx={{ display: "flex", justifyContent: { lg: "center", md: "center", sm: "left", xs: "left" } }}>
                            <Box sx={{ mt: "20px" }}>
                                <Typography sx={{ fontSize: "25px", color: "#212121", color: "white" }}>
                                    Useful Links
                                </Typography>
                                <Typography sx={{ color: "#757575", display: "flex", alignItems: "center", mt: "10px", cursor: "pointer", color: "white" }} onClick={() => { handleNavigator('/') }}>
                                    <KeyboardArrowRightIcon sx={{ mr: "5px" }} />Home
                                </Typography>
                                <Typography sx={{ color: "#757575", display: "flex", alignItems: "center", mt: "10px", cursor: "pointer", color: "white" }} onClick={() => { handleNavigator('/about') }}>
                                    <KeyboardArrowRightIcon sx={{ mr: "5px" }} />About us
                                </Typography>
                                <Typography sx={{ color: "#757575", display: "flex", alignItems: "center", mt: "10px", cursor: "pointer", color: "white" }} onClick={() => { handleNavigator('/') }}>
                                    <KeyboardArrowRightIcon sx={{ mr: "5px" }} />Team
                                </Typography>
                                <Typography sx={{ color: "#757575", display: "flex", alignItems: "center", mt: "10px", cursor: "pointer", color: "white" }} onClick={() => { handleNavigator('/') }}>
                                    <KeyboardArrowRightIcon sx={{ mr: "5px" }} />Terms of Use
                                </Typography>
                                <Typography sx={{ color: "#757575", display: "flex", alignItems: "center", mt: "10px", cursor: "pointer", color: "white" }} onClick={() => { handleNavigator('/privacy') }}>
                                    <KeyboardArrowRightIcon sx={{ mr: "5px" }} />Privacy Policy
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item lg={5} md={5} sm={6} xs={12} sx={{ display: "flex", justifyContent: { lg: "center", md: "center", sm: "left", xs: "left" } }}>
                            <Box sx={{ mt: "20px" }}>
                                <Typography align='center' sx={{ fontSize: "25px", color: "#212121", color: "white" }}>
                                    Our Social Networks
                                </Typography>
                                <Typography align='center' sx={{ mt: "15px", color: "white" }}>
                                    Connect with us via our Social Network Accounts
                                </Typography>
                                <Box sx={{ display: "flex", justifyContent: "Center" }}>
                                    <Box>
                                        <TwitterIcon sx={{ cursor: "pointer", fontSize: "40px", color: "white", "&:hover": { color: "#2979ff" }, m: "10px" }} />
                                        <FacebookIcon sx={{ cursor: "pointer", fontSize: "40px", color: "white", "&:hover": { color: "#1e88e5" }, m: "10px" }} />
                                        <InstagramIcon sx={{ cursor: "pointer", fontSize: "40px", color: "white", "&:hover": { color: "#ff1744" }, m: "10px" }} />
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box> */}
                <FooterComp/>



            </Container>
        </>
    )
}

export default PrivacyPolicy