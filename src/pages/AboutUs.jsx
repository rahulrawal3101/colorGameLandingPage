import CheckIcon from '@mui/icons-material/Check';
import { Accordion, AccordionDetails, AccordionSummary, AppBar, Box, Button, Container, Grid, OutlinedInput, Paper, Rating, TextareaAutosize, Toolbar, Typography } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import '../master.css';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CallIcon from '@mui/icons-material/Call';
import CircleIcon from '@mui/icons-material/Circle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import TwitterIcon from '@mui/icons-material/Twitter';
import av1 from '../assets/av1.avif';
import av2 from '../assets/av2.avif';
import black from '../assets/hero.avif';

import av3 from '../assets/av3.avif';
import game1 from '../assets/game1.png';
import game2 from '../assets/game2.png';
import game3 from '../assets/game3.png';
import game4 from '../assets/game4.png';
import game5 from '../assets/game5.png';
import game6 from '../assets/game6.png';
import game7 from '../assets/game7.png';
import quote from '../assets/quote.png';
import { useNavigate } from 'react-router-dom';
import FooterComp from '../components/Footer';








const AboutUs = () => {
    const navigate=useNavigate()
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    const handleNavigator =(ele)=>{
        navigate(ele)
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
    // 
    return (
        <>
            <Container maxWidth={'xl'} disableGutters >
            <AppBar sx={{bgcolor:'black',borderBottom:"2px solid white"}}>
                    <Toolbar>
                    
                        <Grid container sx={{ justifyContent: 'space-between', alignItems: 'center', padding: '10px 5px ', }}>
                            <Grid item xs={3} sx={{ display: 'flex',cursor:"pointer" }} onClick={()=>{navigate('/')}}>
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
                                        <Typography sx={{ fontSize: '17px',cursor:"pointer", color:'white' }} onClick={()=>{navigate('/');window.scrollTo({top:0,
                                        behavior:"smooth"})}}>Home</Typography>
                                    </Box>
                                    <Box sx={{ width: '20%', color: '#5c6bc0', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                                        <Typography sx={{ fontSize: '17px',cursor:"pointer",color:'white' }} onClick={()=>{navigate('/about');window.scrollTo({top:0,
                                        behavior:"smooth"})}}>About</Typography>
                                    </Box>
                                    <Box sx={{ width: '20%', color: '#5c6bc0', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                                        <Typography sx={{ fontSize: '17px',cursor:"pointer",color:'white' }}>Gallery</Typography>
                                    </Box>
                                    <Box sx={{ width: '20%', color: '#5c6bc0', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                                        <Typography sx={{ fontSize: '17px' ,cursor:"pointer",color:'white'}} onClick={()=>{navigate('/contact');window.scrollTo({top:0,
                                        behavior:"smooth"})}}>Contact</Typography>
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
                <Grid container sx={{ justifyContent: "center", alignItems: "center", bgcolor: "#f1f3f6", overflow: "hidden",pt:{lg:"60px",md:"60px",sm:"60px",xs:"55px"} }}>
                <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundImage: `url(${black})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%', height: '400px', }}>
                        <Grid item lg={6} md={6} sm={12} xs={12} data-aos='fade-up'   >
                            <Typography sx={{ color: '#f5f5f5', fontSize: { lg: '30px', md: '28px', sm: '25px', xs: '23px' }, fontWeight: '800', textAlign: 'center' }}>Luckyquiz is one of the best skill based  game in india.</Typography>
                            <Typography sx={{ fontSize: '15px', mt: '5px', textAlign: 'center', color: '#aed581' }}>"Luckyquiz enables you to earn iq by applying your skills. The iq earned can be withdrawn easily."</Typography>
                        </Grid>

                        {/* <Grid item data-aos='fade-up' lg={6} md={6} sm={12} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Box sx={{ width: { lg: '45%', md: '70%', sm: '50%', xs: '75%' }, height: { lg: '500px', md: "470px", sm: "430px", xs: "390px" } }}>
                                <img src={game5} width={'100%'} height={'100%'} alt='game1' style={{ borderRadius: '10px' }} />
                            </Box>

                        </Grid> */}


                    </Grid>







                    <Grid item xs={12} sx={{ mt: "20px" }}>
                        <Grid container className='resultScroll' sx={{ overflow: "hidden", height: "100%", bgcolor: "#f1f3f6", p: "0px 20px" }}>
                        <Grid item xs={12} sx={{ mb: "20px" }}>
                            <Box >
                                <Paper sx={{ p: "15px" }}>

                                    <Typography align='center' sx={{ color: "#1976d2", fontSize: "35px", letterSpacing: "2px", fontWeight: "900" }}>
                                        About Us
                                    </Typography>
                                    <Typography sx={{ fontSize: "15px", mt: "7px" }}>
                                        Any person utilizing the Portal ("User" or "you" or "your") or any of its features including participation in the various contests, games (including fantasy games ("Game") ("Services") being conducted on the Portal shall be bound by the terms of this privacy policy (“Privacy Policy”).

                                    </Typography>
                                    <Typography sx={{ mb: "10px", fontSize: "15px", mt: "7px" }}>
                                        All capitalised terms not defined herein shall have the meaning ascribed to them in the Terms.

                                    </Typography>
                                    <Typography sx={{ mb: "10px", fontSize: "15px", mt: "7px" }}>
                                        Luckyquiz respects the privacy of its Users and is committed to protect it in all respects. With a view to offer an enriching and holistic internet experience to its Users, Luckyquiz offers a vast repository of Services. Kindly take time to read the 'About Us' section to know more about Luckyquiz. Most of the Services are offered for free but you may need registration to participate in the Games. The information about the User is collected by Luckyquiz as (i) information supplied by Users and (ii) information automatically tracked during User's navigation on Luckyquiz.

                                    </Typography>

                                    <Typography sx={{ mb: "10px", fontSize: "15px", mt: "7px" }}>
                                        Before you submit any information to the Portal, please read this Privacy Policy for an explanation of how we will treat your information. By using any part of the Portal, you consent to the collection, use, disclosure and transfer of your information for the purposes outlined in this Privacy Policy and to the collection, processing and maintenance of this information. Your use of any part of the Portal indicates your acceptance of this Privacy Policy and of the collection, use and disclosure of your information in accordance with this Privacy Policy. While you have the option not to provide us with certain personal information, withdraw your consent to collect certain information, request temporary suspension of collection of personal information or request deletion of personal information collected, kindly note that in such an event you may not be able to take full advantage of the entire scope of features and services offered to you and we reserve the right not to provide you with our services.
                                    </Typography>

                                    <Typography sx={{ mb: "10px", fontSize: "15px", mt: "7px" }}>
                                        In the ever-evolving medium of the internet, We may periodically review and change our Privacy Policy to incorporate such future changes as may be considered appropriate. We will notify you of the change. Any changes to our Privacy Policy will be posted on this page, so you are always aware of what information we collect, how we use it, how we store it and under what circumstances we disclose it.


                                    </Typography>

                                    <Typography sx={{ mb: "10px", fontSize: "15px", mt: "7px", lineHeightStep: "20px" }}>

                                        <strong style={{ fontSize: '20px' }}>Purpose and Usage:</strong>
                                        <br />
                                        To avail certain Services on the Portal, Users would be required to provide certain information for the registration process, namely:
                                        <br />
                                        1. Username<br />
                                        2. Email address<br />
                                        3. Date of birth<br />
                                        4. State<br />
                                        5. Government ID such as aadhaar card or driving license or voter id



                                    </Typography>
                                    <Typography sx={{ mb: "10px", fontSize: "15px", mt: "7px" }}>
                                        Additionally in the course of providing you with access to the Services, and in order to provide you access to the features offered through the Portal and to verify your identity, secure your account details, you may give us the permission to capture, record your device related information, operating system information, network information, location information etc. You may choose to allow us to gather information in relation to the apps installed on your device in order for us to better our Services and your experience on the Portal. You may also be required to furnish additional information, including your Permanent Account Number.



                                    </Typography>

                                    <Typography sx={{ mb: "10px", fontSize: "15px", mt: "7px" }}>
                                        In certain instances, we may also collect sensitive personal information from you on the Portal. SPI means such personal information which consists of information relating to your financial information, such as information regarding the payment instrument/modes used by you to make such payments, which may include cardholder name, credit/debit card number (in encrypted form) with expiration date, banking details, wallet details etc (“SPI”) This information is presented to you at the time of making a payment to enable you to complete your payment expeditiously.


                                    </Typography>

                                    <Typography sx={{ mb: "10px", fontSize: "15px", mt: "7px" }}>

                                        Except for any financial information that you choose to provide while making payment for any Services on the Portal, Luckyquiz does not collect any other SPI in the course of providing the Services. Any SPI collected by Luckyquiz shall not be disclosed to any third-party service provider without your express consent, save as otherwise set out in this Privacy Policy or as provided in a separate written agreement between Luckyquiz and you or as required by law. It is clarified that this condition shall not apply to publicly available information, including SPI, in relation to you on the Portal.



                                    </Typography>

                                    <Typography sx={{ mb: "10px", fontSize: "15px", mt: "7px" }}>
                                        We collect and use personal information provided by you (that is, information that may be used to identify you and that is not otherwise publicly available) to operate, provide, develop, and improve the Services, keeping you informed of Our offerings, and the products and/or services of our affiliates and group entities, and to enable Our affiliates and group entities to reach out to you in relation to the products and services offered by them.


                                    </Typography>

                                    <Typography sx={{ mb: "10px", fontSize: "15px", mt: "7px" }}>
                                        In the course of providing the Services, Users may invite other existing Users or other users ("Invited Users") to participate in any of the Services through any social media platform including without limitation, Facebook, WhatsApp, Instagram etc. We may thereafter use this information to contact the Invited User and invite such user to register with Luckyquiz (if such Invited User is not an existing User) and participate in the Game in relation to which such person was invited by you. The participation of the Invited User in any Game shall be subject to the terms of this Privacy Policy and the Terms and Conditions for the use of the Portal. You hereby represent that the Invited Users have consented and agreed to such disclosure of their information with us, our affiliates and/ or our group entities. You may also choose to invite your friends by syncing your phonebook and inviting them directly from the Portal to play the Game and utilize the Services.


                                    </Typography>

                                    <Typography sx={{ mb: "10px", fontSize: "15px", mt: "7px" }}>
                                        All required information is specific and based on the kind of Game/ Services the User wishes to participate in or access, and will be utilized to provide services, including but not limited to the Services requested by the User.
                                    </Typography>

                                    <Typography sx={{ mb: "10px", fontSize: "15px", mt: "7px" }}>
                                        <strong style={{ fontSize: '20px' }}> Disclosure/Sharing:</strong>
                                        <br />

                                        Luckyquiz may share information as provided by you and data concerning your usage of the Services and participation in the Games with its affiliates and group entities to enable its affiliates and group entities to reach out to you in relation to the products and/ or services offered by them. Luckyquiz may also share such information with third party service providers engaged by Luckyquiz, for the purpose of data analytics or for the purpose of storage, improving the services (including product enhancements) and to help Luckyquiz serve you better. Provided that affiliate, group entity and third-party service provider (as may be applicable) with whom the information is shared will be required, on best efforts basis, to comply with the same standards as applicable to Luckyquiz in relation to maintaining the security of the information.
                                    </Typography>


                                    <Typography sx={{ mb: "10px", fontSize: "15px", mt: "7px" }}>
                                        By using the Portal, you hereby expressly agree and grant consent to the collection, use and storage of your information by Luckyquiz. Luckyquiz reserves the right to share, disclose and transfer information collected hereunder with its affiliates and group entities. In the event Luckyquiz sells or transfers all or a portion of its business assets, consumer information may be one of the business assets that are shared, disclosed or transferred as part of the transaction. You hereby expressly grant consent and permission to Luckyquiz for disclosure and transfer of personal information to such third parties.
                                    </Typography>


                                    <Typography sx={{ mb: "10px", fontSize: "15px", mt: "7px" }}>
                                        Luckyquiz may share information and data concerning usage of the Services and participation in the Game with its commercial partners for the purpose of facilitating user engagement, for marketing and promotional purposes and other related purposes. Further, Luckyquiz reserves the right to disclose/ share information with affiliates, group entities and third parties in limited circumstances, including for the purposes of complying with applicable law, responding to duly authorized legal process, governmental requests, preventing fraud or imminent harm, and ensuring the security of our network and services.
                                    </Typography>


                                    <Typography sx={{ mb: "10px", fontSize: "15px", mt: "7px" }}>
                                        <strong style={{ fontSize: '20px' }}> Use of Cookies:</strong>
                                        <br />

                                        To improve the effectiveness and usability of the Portal for our Users, we use "cookies", or such similar electronic tools to collect information to assign each visitor a unique random number as a User Identification (User ID) to understand the User's individual interests using the identified device. Unless the User voluntarily identifies himself/herself (e.g., through registration), Luckyquiz has no way of knowing who the User is, even if we assign a cookie to the User's device. The only information a cookie can contain is information supplied by the User. A cookie cannot read data off the User's device hard drive. Luckyquiz’s advertisers may also assign their own cookies to the User's device (if the User clicks on their ad banners), a process that Luckyquiz does not control.
                                    </Typography>

                                    <Typography sx={{ mb: "10px", fontSize: "15px", mt: "7px" }}>
                                        Luckyquiz's web servers automatically collect limited information about User's device connection to the Internet, including User's IP address, when the User uses the Portal. (User's IP address is a number that lets devices attached to the Internet know where to send data to the User -- such as the web pages viewed by the User). The User's IP address does not identify the User personally. Luckyquiz uses this information to deliver its web pages to Users upon request, to tailor its Portal to the interests of its users, to measure traffic within the Portal and let advertisers know the geographic locations from where Luckyquiz's visitors come..
                                    </Typography>

                                    <Typography sx={{ mb: "10px", fontSize: "15px", mt: "7px" }}>
                                        <strong style={{ fontSize: '20px' }}> Security Procedures:</strong>
                                        <br />

                                        All information gathered on Luckyquiz is securely stored within the Luckyquiz-controlled database. The database is stored on servers secured behind a firewall; access to such servers being password-protected and strictly limited based on need-to-know basis. However, we understand that as effective as our security measures are, no security system is impenetrable. Thus, we cannot guarantee the security of our database, nor can we guarantee that information you supply will not be intercepted while being transmitted to us over the Internet. Further, any information you include in a posting to the discussion areas will be available to anyone with internet access. By using the Portal, you understand and agree that your information may be used in or transferred to countries other than India.
                                    </Typography>


                                    <Typography sx={{ mb: "10px", fontSize: "15px", mt: "7px" }}>
                                        <strong style={{ fontSize: '20px' }}>Advertising:</strong>
                                        <br />

                                        When Luckyquiz presents information to its online advertisers - to help them understand its audience and confirm the value of advertising on the Portal - it is usually in the form of aggregated anonymized data (information that cannot be used to trace a user) of Users that may include statistics and/or data concerning User traffic, User responsiveness and User behaviour to such advertisements on our Portal. When you register with Luckyquiz, we contact you from time to time about updating your content to provide features which we believe may benefit you.
                                    </Typography>


                                    <Typography sx={{ mb: "10px", fontSize: "15px", mt: "7px" }}>
                                        <strong style={{ fontSize: '20px' }}>Disclaimer:</strong>
                                        <br />

                                        Several deceptive emails, websites, blogs etc. claiming to be from or associated with Luckyquiz may or are circulating on the Internet (“Deceptive Communication”). Such Deceptive Communication may include our logo, photos, links, content or other information. Some Deceptive Communication may call the User requesting the User to provide login name, password etc. or inform the User that the User has won a prize/ gift or provide a method to commit an illegal/ unauthorized act or deed or request detailed personal information or a payment of some kind. The sources and contents of these Deceptive Communications and accompanying materials are in no way associated with Luckyquiz. For your own protection, we strongly recommend not responding to such Deceptive Communication. You agree that we shall not be liable for any loss, damage and harm that you may suffer by relying and/or acting upon such Deceptive Communications.

                                    </Typography>

                                    <Typography sx={{ mb: "10px", fontSize: "15px", mt: "7px" }}>
                                        Except, as provided for the purpose of verification, as set out under the Terms and Conditions, we and/or our employees will not contact you to divulge your SPI.

                                    </Typography>

                                    <Typography sx={{ mb: "10px", fontSize: "15px", mt: "7px" }}>
                                        <strong style={{ fontSize: '20px' }}>Conditions of Use:</strong>

                                        <br />

                                        Luckyquiz DOES NOT WARRANT THAT THIS PORTAL, IT’S SERVERS, OR EMAIL SENT BY US OR ON OUR BEHALF ARE VIRUS FREE. Luckyquiz WILL NOT BE LIABLE FOR ANY DAMAGES OF ANY KIND ARISING FROM THE USE OF THIS PORTAL, INCLUDING, BUT NOT LIMITED TO COMPENSATORY, DIRECT, INDIRECT, INCIDENTAL, PUNITIVE, SPECIAL AND CONSEQUENTIAL DAMAGES, LOSS OF DATA, GOODWILL, BUSINESS OPPORTUNITY, INCOME OR PROFIT, LOSS OF OR DAMAGE TO PROPERTY AND CLAIMS OF THIRD PARTIES. IN NO EVENT WILL Luckyquiz BE LIABLE FOR ANY DAMAGES WHATSOEVER IN AN AMOUNT IN EXCESS OF AN AMOUNT OF INR 100.
                                    </Typography>

                                    <Typography sx={{ mb: "10px", fontSize: "15px", mt: "7px" }}>
                                        <strong style={{ fontSize: '20px' }}> Retention of Data:</strong>
                                        <br />

                                        Your personal information may be retained and may continue to be used until: (i) the relevant purposes for the use of your personal information described in this Privacy Policy are no longer applicable; and (ii) we are no longer required by applicable law, regulations, contractual obligations or legitimate business purposes to retain your personal information and the retention of your personal information is not required for the establishment, exercise or defense of any legal claim.
                                    </Typography>

                                    <Typography sx={{ mb: "10px", fontSize: "15px", mt: "7px" }}>
                                        <strong style={{ fontSize: '20px' }}>User Account and Data Deletion:</strong>
                                        <br />

                                        Users are entitled to request Luckyquiz to delete their User accounts and their personal information by sending an email with their written request to helpdesk@Luckyquiz.com<br />

                                        We will do our best to respond promptly and in any event within one month of the following:<br />

                                        Our receipt of your written request; or<br />
                                        Our receipt of any further information we may ask you to provide, to enable us to comply with your request, whichever is later.<br />
                                        As an alternative to account deletion, by writing to helpdesk@Luckyquiz.com, you also have the option to request either:<br />


                                    </Typography>

                                    <Typography sx={{ mb: "10px", fontSize: "15px", mt: "7px" }}>
                                        (i) the suspension of your account, after which you will not be able to play paid contests on your User account but will continue to have access to other parts of the Portal; or<br />
                                        (ii) temporary deactivation of your account, where you will no longer be able to log into the Portal but which allows you to request reactivation of your account with all your account data.<br />
                                        If you proceed with permanent deactivation of your account, you will lose access to the Portal and the Services, including any User data and personal information associated with your account. Users may request for account restoration within six (6) months from the date of notification of account deletion by Luckyquiz by writing to helpdesk@Luckyquiz.com<br />

                                        When you request deletion of your data, we follow a deletion process that ensures that your data is safely and completely removed from our servers or retained only in anonymised form. We try to ensure that our services protect information from accidental or malicious deletion. Because of this, there may be delays between when you request deletion and when copies are deleted from our active and backup systems.<br />

                                        Applicable Law and Jurisdiction:<br />

                                        By visiting this Portal, you agree that the laws of the Republic of India without regard to its conflict of laws principles, govern this Privacy Policy and any dispute arising in respect hereof shall be subject to and governed by the dispute resolution process set out in the Terms and Conditions.<br />

                                        Updating Information:<br />

                                        You will promptly notify Luckyquiz if there are any changes, updates or modifications to your personal information. Further, you may also review, update or modify your personal information and User preferences by logging into your profile page on the Portal<br />
                                    </Typography>

                                    <Box>
                                        <Typography align='center' sx={{ color: "#1976d2", fontSize: "30px", letterSpacing: "2px", fontWeight: "600" }}>
                                            Our Vision
                                        </Typography>

                                        <Typography align='center' sx={{ mb: "10px", fontSize: "15px", mt: "7px" }}>
                                            <Typography align='center' sx={{ mb: "10px", fontSize: {lg:"20px", md:'18px', sm:'17px', xs:'15px'}, mt: "7px", fontWeight:'bold' }}>MAKE QUIZ BETTER</Typography>
                                            “We are proud to continually serve our growing community of avid Quiz fans with the latest innovative offerings and contribute to the overall expansion of the Indian Quiz  ecosystem” - siddharth, CEO & Co Founder, luckyquiz

                                        </Typography>
                                    </Box>
                                </Paper>
                            </Box>
                        </Grid>





                        <Grid item xs={12} sx={{bgcolor:'black'}}>

<Grid container>
    <Grid item xs={12} data-aos="fade-up" sx={{ bgcolor: "white", p: "40px 15px 30px 15px", mb: "25px" }}>
        <Typography align='center' sx={{ fontSize: "35px",color: "#1976d2",fontWeight:"bold" }}>
            Contact
        </Typography>
        <Typography align='center' sx={{ mt: "10px" }}>
            For booking or any queries, feel free to contact us
        </Typography>
    </Grid>

    <Grid item xs={12} lg={6} sx={{bgcolor:'black'}}>
        <Grid container sx={{ bgcolor: "black", p: "20px"}}>

            <Grid item lg={6} md={6} sm={12} xs={12} sx={{ border: "3px solid white", bgcolor: "black", p: "40px 15px 30px 15px" ,borderRadius:'7px' }} data-aos="fade-up" >
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <LocationOnIcon sx={{ fontSize: "50px", color: "#1976d2" }} />
                </Box>
                <Typography align='center' sx={{ fontSize: "25px", color: "#1976d2" }}>
                    ADDRESS
                </Typography>
                <Typography align='center' sx={{color:'white'}}>
                   BLOCK 231C, KACHARUPURIA, BUGDOI BRIDGE, JORHAT, 785001, ASSAM
                </Typography>
            </Grid>

            <Grid item lg={6} md={6} sm={12} xs={12} sx={{ border: "3px solid white", bgcolor: "black", p: "40px 15px 30px 15px" ,borderRadius:'7px'}} data-aos="fade-up" >
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <CallIcon sx={{ fontSize: "50px", color: "#1976d2" }} />
                </Box>
                <Typography align='center' sx={{ fontSize: "25px", color: "#1976d2" }}>
                    Call Us
                </Typography>
                <Typography align='center' sx={{color:'white'}}>
                    +91 8099851924
                </Typography>
            </Grid>

            <Grid item lg={6} md={6} sm={12} xs={12} sx={{ border: "3px solid white", bgcolor: "black", p: "40px 15px 30px 15px" , borderRadius:'7px'}} data-aos="fade-up" >
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <MailIcon sx={{ fontSize: "50px", color: "#1976d2" }} />
                </Box>
                <Typography align='center' sx={{ fontSize: "25px", color: "#1976d2" }}>
                    Email Us
                </Typography>
                <Typography align='center' sx={{color:'white'}}>
                    daichsenyo@gmail.com
                </Typography>
            </Grid>

            <Grid item lg={6} md={6} sm={12} xs={12} sx={{ border: "3px solid white", bgcolor: "black", p: "40px 15px 30px 15px", borderRadius:'7px' }} data-aos="fade-up" >
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <AccessTimeIcon sx={{ fontSize: "50px", color: "#1976d2" }} />
                </Box>
                <Typography align='center' sx={{ fontSize: "25px", color: "#1976d2" }}>
                    Working Hours
                </Typography>
                <Typography align='center' sx={{color:'white'}}>
                    Mon-Fri:9AM to 5PM
                </Typography>
                <Typography align='center' sx={{color:'white'}}>
                    Sun:9AM to 1PM
                </Typography>
            </Grid>




        </Grid>
    </Grid>

    <Grid item lg={6} xs={12} sx={{ bgcolor: "black", p: "25px 10px 30px 10px" }}>

        <Box component={'div'} data-aos="fade-up">
            <OutlinedInput placeholder='Your Name' sx={{ height: "50px" , border:'1px solid #1976d2', color:'white', outline:'none'}} fullWidth />
            <OutlinedInput placeholder='Your Email' sx={{ height: "50px", mt: "10px",  border:'1px solid #1976d2', color:'white'}} fullWidth />
            <OutlinedInput placeholder='Subject' sx={{ height: "50px", mt: "10px", border:'1px solid #1976d2', color:'white' }} fullWidth />
            <textarea  placeholder='Message' style={{ width: "98.9%", marginTop: "10px", border:'1px solid #1976d2', color:'white', backgroundColor:'transparent',height:"100px" }}  />
            <Box variant="outlined" sx={{ display: "flex", justifyContent: "center", mt: "20px" }} >
                <Button variant='outlined' sx={{color:'"#1976d2" ', borderRadius: "25px", p: "10px 20px", border: "2px solid #1976d2", color: "white" }}>Send Message</Button>
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
             

             {/* footer comp */}
              <FooterComp/>

              
            </Container>
        </>
    )
}

export default AboutUs