import { AppBar, Box, Button, Grid, OutlinedInput, Toolbar, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CallIcon from '@mui/icons-material/Call';
import CircleIcon from '@mui/icons-material/Circle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react'
import FooterComp from '../components/Footer';

const ContactUs = () => {
    const navigate = useNavigate();
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (
        <>
       
        <Grid container>
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
                                    <Typography sx={{ fontSize: '17px', cursor: "pointer", color: 'white' }} onClick={() => {
                                        navigate('/contact'); window.scrollTo({
                                            top: 0,
                                            behavior: "smooth"
                                        })
                                    }} >Contact</Typography>
                                </Box>
                                <Box sx={{ width: '20%', color: '#5c6bc0', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                                    <Button variant='contained' sx={{ bgcolor: '#5c6bc0', color: 'white', fontSize: '13px', borderRadius: '10px' }}>Download</Button>
                                </Box>

                            </Box>

                        </Grid>


                    </Grid>




                </Toolbar>
            </AppBar>
            <Grid item xs={12} sx={{ bgcolor: 'black', mt: '55px', }}>
                <Grid container>
                    <Grid item xs={12} data-aos="fade-up" sx={{ bgcolor: "white", p: "40px 15px 30px 15px", mb: "25px" }}>
                        <Typography align='center' sx={{ color: '#1565c0', fontSize: { lg: '32px', md: '28px', sm: '25px', xs: '24px' }, fontWeight: '800', }}>
                            Contact
                        </Typography>
                        <Typography align='center' sx={{ fontSize: { lg: '18px', xs: '17px' } }} fontWeight={600}>
                            For booking or any queries, feel free to contact us
                        </Typography>
                    </Grid>

                    <Grid item xs={12} lg={6} sx={{ bgcolor: 'black' }}>
                        <Grid container sx={{ bgcolor: "black", p: "20px" }}>

                            <Grid item lg={5.8} md={5.8} sm={12} xs={12} sx={{ border: "3px solid white", bgcolor: "black", p: "40px 15px 30px 15px", borderRadius: '7px', m: '5px' }} data-aos="fade-up" >
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

                            <Grid item lg={5.8} md={5.8} sm={12} xs={12} sx={{ border: "3px solid white", bgcolor: "black", p: "40px 15px 30px 15px", borderRadius: '7px', m: '5px' }} data-aos="fade-up" >
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

                            <Grid item lg={5.8} md={5.8} sm={12} xs={12} sx={{ border: "3px solid white", bgcolor: "black", p: "40px 15px 30px 15px", borderRadius: '7px', m: '5px' }} data-aos="fade-up" >
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

                            <Grid item lg={5.8} md={5.8} sm={12} xs={12} sx={{ border: "3px solid white", bgcolor: "black", p: "40px 15px 30px 15px", borderRadius: '7px', m: '5px' }} data-aos="fade-up" >
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
                                <Button variant='outlined' sx={{ color: '"#1976d2" ', borderRadius: "25px", p: "10px 20px", border: "2px solid #1976d2", }}>Send Message</Button>
                            </Box>
                        </Box>

                    </Grid>

                </Grid>



            </Grid>
        </Grid>
            <FooterComp/>
            </>
    )
}

export default ContactUs