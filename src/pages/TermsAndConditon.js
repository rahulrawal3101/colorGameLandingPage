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



const TermsAndCondition = () => {

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
                                            Terms & Conditions
                                        </Typography>


                                        <Grid container>
                                            <Grid item xs={12} sx={{ mt: '14px' }}>
                                                <Typography sx={{ fontSize: { lg: '20px', md: '20px', sm: '18px', xs: '18px', fontWeight: 'bold', } }}>1. Acceptance of Terms
                                                </Typography>
                                                <Typography sx={{ fontSize: '15px', mt: '8px' }}>By accessing or using Luckyquick (the "Website"), you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our Website.
                                                </Typography>

                                            </Grid>
                                            <Grid item xs={12} sx={{ mt: '14px' }}>
                                                <Typography sx={{ fontSize: { lg: '20px', md: '20px', sm: '18px', xs: '18px', fontWeight: 'bold', } }}>2. User Age Limitation

                                                </Typography>
                                                <Typography sx={{ fontSize: '15px', mt: '8px' }}>You must be at least 18+ years old to use this Website. By using the Website, you represent and warrant that you meet all the age requirements.
                                                </Typography>

                                            </Grid>
                                            <Grid item xs={12} sx={{ mt: '14px' }}>
                                                <Typography sx={{ fontSize: { lg: '20px', md: '20px', sm: '18px', xs: '18px', fontWeight: 'bold', } }}>3. User Accounts

                                                </Typography>
                                                <Typography sx={{ fontSize: '15px', mt: '8px' }}>To access certain features of the Website, you may be required to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
                                                </Typography>

                                            </Grid>
                                            <Grid item xs={12} sx={{ mt: '14px' }}>
                                                <Typography sx={{ fontSize: { lg: '20px', md: '20px', sm: '18px', xs: '18px', fontWeight: 'bold', } }}>4. User Conduct
                                                </Typography>
                                                <Typography sx={{ fontSize: '15px', mt: '8px' }}>You agree not to engage in any of the following prohibited activities:<br />
                                                    • Violating any applicable laws or regulations.<br />
                                                    • Infringing on the rights of third parties.<br />
                                                    • Uploading or transmitting viruses or any other malicious code.<br />
                                                    • Harassing, intimidating, or threatening other users.


                                                </Typography>


                                            </Grid>
                                            <Grid item xs={12} sx={{ mt: '14px' }}>
                                                <Typography sx={{ fontSize: { lg: '20px', md: '20px', sm: '18px', xs: '18px', fontWeight: 'bold', } }}>5. Intellectual Property
                                                </Typography>
                                                <Typography sx={{ fontSize: '15px', mt: '8px' }}>All content and materials available on the Website, including but not limited to text, graphics, logos, images, and software, are the property of luckyquiz and are protected by applicable intellectual property laws.
                                                </Typography><br />

                                            </Grid>
                                            <Grid item xs={12} sx={{ mt: '14px' }}>
                                                <Typography sx={{ fontSize: { lg: '20px', md: '20px', sm: '18px', xs: '18px', fontWeight: 'bold', } }}>6. Game Content

                                                </Typography>
                                                <Typography sx={{ fontSize: '15px', mt: '8px' }}>Games available on the Website are the intellectual property of their respective developers or Luckyquiz. Any reproduction or redistribution of game content without explicit permission is strictly prohibited.
                                                </Typography>

                                            </Grid>

                                            <Grid item xs={12} sx={{ mt: '14px' }}>
                                                <Typography sx={{ fontSize: { lg: '20px', md: '20px', sm: '18px', xs: '18px', fontWeight: 'bold', } }}>7. Termination

                                                </Typography>
                                                <Typography sx={{ fontSize: '15px', mt: '8px' }}>We reserve the right to terminate or suspend your account and access to the Website at our sole discretion, without notice, for conduct that we believe violates these Terms and Conditions or is harmful to other users.
                                                </Typography>

                                            </Grid>

                                            <Grid item xs={12} sx={{ mt: '14px' }}>
                                                <Typography sx={{ fontSize: { lg: '20px', md: '20px', sm: '18px', xs: '18px', fontWeight: 'bold', } }}>8. Privacy

                                                </Typography>
                                                <Typography sx={{ fontSize: '15px', mt: '8px' }}>Your use of the Website is also governed by our Privacy Policy, which can be found.

                                                </Typography>

                                            </Grid>


                                            <Grid item xs={12} sx={{ mt: '14px' }}>
                                                <Typography sx={{ fontSize: { lg: '20px', md: '20px', sm: '18px', xs: '18px', fontWeight: 'bold', } }}>9. Disclaimers


                                                </Typography>
                                                <Typography sx={{ fontSize: '15px', mt: '8px' }}>The Website is provided on an "as-is" and "as-available" basis. We make no warranties, expressed or implied, regarding the reliability, accuracy, completeness, or availability of the Website.

                                                </Typography>

                                            </Grid>

                                            <Grid item xs={12} sx={{ mt: '14px' }}>
                                                <Typography sx={{ fontSize: { lg: '20px', md: '20px', sm: '18px', xs: '18px', fontWeight: 'bold', } }}>10. Limitation of Liability


                                                </Typography>
                                                <Typography sx={{ fontSize: '15px', mt: '8px' }}>In no event shall Luckyquick be liable for any indirect, consequential, incidental, special, or punitive damages arising out of or in connection with your use of the Website.

                                                </Typography>

                                            </Grid>

                                            <Grid item xs={12} sx={{ mt: '14px' }}>
                                                <Typography sx={{ fontSize: { lg: '20px', md: '20px', sm: '18px', xs: '18px', fontWeight: 'bold', } }}>11. Governing Law


                                                </Typography>
                                                <Typography sx={{ fontSize: '15px', mt: '8px' }}>These Terms and Conditions are governed by and construed in accordance with the laws of Assam, without regard to its conflict of law principles.

                                                </Typography>

                                            </Grid>

                                            <Grid item xs={12} sx={{ mt: '14px' }}>
                                                <Typography sx={{ fontSize: { lg: '20px', md: '20px', sm: '18px', xs: '18px', fontWeight: 'bold', } }}>12. Changes to Terms


                                                </Typography>
                                                <Typography sx={{ fontSize: '15px', mt: '8px' }}>We reserve the right to update or modify these Terms and Conditions at any time without prior notice. Your continued use of the Website after any such changes constitutes acceptance of the new Terms and Conditions.

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

export default TermsAndCondition