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



const Return= () => {

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
                                           Return, Refund & Cancellation Policy
                                        </Typography>


                                        <Grid container>
                                          <Grid item xs={12} sx={{ mt: '14px' }}>
                                                <Typography sx={{ fontSize: '15px', mt: '8px' }}>Our focus is complete customer satisfaction. In the event, that there is an error in the services provided, we will refund the money, provided the reasons are genuine and proved after investigation. Please read the rules of each tournament before participating, it provides all the details about the services or the product you purchase. Please note that this Return, Refund and Cancellation Policy is part of the Terms and Conditions above.
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12} sx={{ mt: '14px' }}>
                                            <Typography sx={{ fontSize: { lg: '24px', md: '23px', sm: '20px', xs: '20px', fontWeight: 'bold', } }}>Our Policy for the cancellation and refund will be as follows:
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12} sx={{ mt: '14px' }}>
                                                <Typography sx={{ fontSize: { lg: '20px', md: '20px', sm: '18px', xs: '18px', fontWeight: 'bold', } }}>1. Return and Cancellation Policy</Typography>
                                                <Typography sx={{ fontSize: '15px', mt: '8px' }}>For Cancellations please contact us at <a href=''>help@luckyquiz.com.</a>We do not cancel registrations once entered, however, in case of exceptional circumstances wherein the fault may lie with the payment gateway or from our side, we will cancel your participation on request and refund the money to you within a reasonable amount of time.
                                                </Typography>
                                                <Typography sx={{ fontSize: '15px', mt: '8px' }}>In case we cancel your participation at any tournament as a result of this, we will return your participation fee to you within a reasonable amount of time for you to redeem the same by playing other tournaments on LUCKYQUIZ.
                                                </Typography>

                                            </Grid>
                                            <Grid item xs={12} sx={{ mt: '14px' }}>
                                            <Typography sx={{ fontSize: { lg: '24px', md: '23px', sm: '20px', xs: '20px', fontWeight: 'bold', } }}>No other cancellations will be made by Luckyquiz.
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12} sx={{ mt: '14px' }}>
                                                <Typography sx={{ fontSize: { lg: '20px', md: '20px', sm: '18px', xs: '18px', fontWeight: 'bold', } }}>2.Refund Policy

                                                </Typography>
                                                <Typography sx={{ fontSize: '15px', mt: '8px' }}>We will try our best to create the best user experience for our users.
                                                </Typography>
                                                <Typography sx={{ fontSize: '15px', mt: '8px' }}>If paid by credit card, refunds will be issued to the original credit card provided at the time of purchase and in case of payments made through a payment gateway, payments refund will be made to the same account.
                                                </Typography>

                                            </Grid>
                                            <Grid item xs={12} sx={{ mt: '14px' }}>
                                                <Typography sx={{ fontSize: { lg: '20px', md: '20px', sm: '18px', xs: '18px', fontWeight: 'bold', } }}>3.Deposits

                                                </Typography>
                                                <Typography sx={{ fontSize: '15px', mt: '8px' }}>1. In order to comply with extant law relating to deposit regulations, please note that the user must withdraw any idle balance lying in their 'Winnings Wallet' within 365 days of having won that amount. Similarly, users must use any money in their 'Deposit Cash Wallet' within 365 days. If not, the said amounts will have to be forfeited.
                                                </Typography>

                                            </Grid>
                                            <Grid item xs={12} sx={{ mt: '14px' }}>
                                                <Typography sx={{ fontSize: { lg: '20px', md: '20px', sm: '18px', xs: '18px', fontWeight: 'bold', } }}>Return, Refund & Cancellation
                                                </Typography>
                                                <Typography sx={{ fontSize: '15px', mt: '8px' }}>DISCLAIMER LUCKYQUIZ is the owner of, and reserves all rights to the assets, content, services, information, and products and graphics in the website except any third party content.
                                                </Typography>

                                                <Typography sx={{ fontSize: '15px', mt: '8px' }}>LUCKYQUIZ refuses to acknowledge or represent about the accuracy or completeness or reliability or adequacy of the website's third party content. These content, materials, information, services, and products in this website, including text, graphics, and links, are provided "AS IS" and without warranties of any kind, whether expressed or implied.
                                                </Typography>

                                                <Typography sx={{ fontSize: '15px', mt: '8px' }}>LUCKYQUIZ is the biggest gaming app in India based on the number of unity games, special tournaments and formats. Luckyquiz  is available only to people above 18 years of age. Luckyquiz is available in all states where permissible by extant law. Consequently, users located in some states may not be able to access our App or its contests. For an updated list of such states, please download the App
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

                {/* footer sec */}
                <FooterComp />



            </Container>
        </>
    )
}

export default Return