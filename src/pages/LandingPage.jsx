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
import av3 from '../assets/av3.avif';
import game1 from '../assets/game1.png';
import game2 from '../assets/game2.png';
import game3 from '../assets/bg2.png';
import game4 from '../assets/bg3.png';
import game5 from '../assets/bg2.png';
import game6 from '../assets/bg1.png';
import game7 from '../assets/bg7.png';
import quote from '../assets/quote.png';
import md1 from '../assets/img3.png'
import md2 from '../assets/img4.png'
import md3 from '../assets/img5.png'
import lg1 from '../assets/img1.png'
import lg2 from '../assets/img2.png'
import black from '../assets/hero.avif'
import { useNavigate } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import FooterComp from '../components/Footer';






const LandingPage = () => {

    const navigate = useNavigate()


    const smImgArr = [{ img: game7 }, { img: game6 }, { img: game3 }, { img: game4 }, { img: game2 }, { img: game1 }, { img: game3 }]
    const imagesArr = [{ img: lg1 }, { img: lg2 }]
    const mdImgArr = [{ img: md1 }, { img: md2 }, { img: md3 }]

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
            <Container maxWidth={'xl'} disableGutters sx={{ overflow: "hidden" }}>

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
                                        }}>Contact</Typography>
                                    </Box>
                                    <Box sx={{ width: '20%', color: '#5c6bc0', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                                        <Button variant='contained' sx={{ bgcolor: '#5c6bc0', color: 'white', fontSize: '13px', borderRadius: '10px' }}>Download</Button>
                                    </Box>

                                </Box>

                            </Grid>


                        </Grid>




                    </Toolbar>
                </AppBar>
                <Grid container sx={{ justifyContent: "center", alignItems: "center", bgcolor: "#f1f3f6", overflow: "hidden", pt: { lg: "60px", md: "60px", sm: "60px", xs: "55px" } }}>
                    {/* one  */}
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

                    {/* two  */}
                    <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: '20px 10px', }}>
                        <Grid item xs={12} sx={{ textAlign: 'center' }}>
                            <Typography sx={{ color: '#1565c0', fontSize: { lg: '32px', md: '28px', sm: '25px', xs: '24px' }, fontWeight: '800', mt: '10px' }}>WHY LUCKY QUIZ</Typography>

                        </Grid>
                        <Grid item xs={11.8} sx={{ textAlign: 'center' }}>

                            <Typography sx={{ color: "#212121", mt: "16px", fontWeight: 'bold', fontSize: { lg: '17px', md: '16px', sm: '15px', xs: '15px' } }}>"Luckyquiz is one of the best quiz-based games. It is a calculation-based game where many people have shared their personal experiences with quiz games. You can play online by downloading the Luckyquiz game, and you can earn 20k to 30k IQ monthly using your analytical skills."</Typography>
                        </Grid>
                        <Grid container sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center', flexWrap: 'wrap-reverse', mt: "25px" }}>
                            <Grid item lg={6} md={6} sm={12} xs={12} >

                                <Grid container sx={{ padding: '2px', mt: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                    <Grid item xs={3} data-aos='fade-right' sx={{ textAlign: 'center' }} >
                                        <ThumbUpOffAltIcon sx={{ fontSize: { lg: '60px', md: '55px', sm: '50px', xs: '40px' }, color: '#1565c0' }} />
                                    </Grid>
                                    <Grid item xs={9} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column', mb: '20px' }}>

                                        <Box data-aos='fade-up' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                                            <CircleIcon sx={{ fontSize: '12px', color: '#1565c0' }} />
                                            <Typography sx={{ fontSize: '14px', ml: '8px', fontWeight: 'bold', }}>Start quiz with only 1 Iq</Typography>
                                        </Box>

                                        <Box data-aos='fade-up' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', mt: '15px' }}>
                                            <CircleIcon sx={{ fontSize: '12px', color: '#1565c0' }} />
                                            {/* <Typography sx={{ fontSize: '15px', ml: '8px', fontWeight: 'bold', }}>Fast Withdrawal (Most of the time, money comes to your account within 1 hour)</Typography> */}
                                            <Typography sx={{ fontSize: '15px', ml: '8px', fontWeight: 'bold',color:'#212121' }}>Fast Withdrawal</Typography>

                                        </Box>

                                        <Box data-aos='fade-up' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', mt: '15px' }}>
                                            <CircleIcon sx={{ fontSize: '12px', color: '#1565c0' }} />
                                            <Typography sx={{ fontSize: '14px', ml: '8px', fontWeight: 'bold',color:'#212121' }}>No Withdrawal Fee (You can withdraw as much as you want in this game without any withdrawal fee)</Typography>
                                        </Box>

                                        <Box data-aos='fade-up' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', mt: '15px' }}>
                                            <CircleIcon sx={{ fontSize: '12px', color: '#1565c0' }} />
                                            <Typography sx={{ fontSize: '14px', ml: '8px', fontWeight: 'bold',color:'#212121' }}>24/7 Customer Service</Typography>
                                        </Box>

                                        <Box data-aos='fade-up' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', mt: '15px' }}>
                                            <CircleIcon sx={{ fontSize: '12px', color: '#1565c0' }} />
                                            {/* <Typography sx={{ fontSize: '14px', ml: '8px', fontWeight: 'bold', }}>Very Good Promotion Mission (Earn More than 4 Lakh for Complete Promotion Task)</Typography> */}
                                            <Typography sx={{ fontSize: '14px', ml: '8px', fontWeight: 'bold',color:'#212121' }}>Very Good Promotion Mission </Typography>
                                        </Box>

                                        <Box data-aos='fade-up' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', mt: '15px' }}>
                                            <CircleIcon sx={{ fontSize: '12px', color: '#1565c0' }} />
                                            <Typography sx={{ fontSize: '14px', ml: '8px', fontWeight: 'bold',color:'#212121' }}>Promotion Bonus Upto 5 Levels</Typography>
                                        </Box>

                                        {/* <Box data-aos='fade-up' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', mt: '15px' }}>
                                            <CircleIcon sx={{ fontSize: '12px', color: '#1565c0' }} />
                                            <Typography sx={{ fontSize: '14px', ml: '8px', fontWeight: 'bold', }}>Every two months, new events come in which you can participate and Earn Up to 6 Lakh.</Typography>
                                        </Box> */}

                                    </Grid>

                                </Grid>

                            </Grid>
                            {/* <Grid item data-aos='fade-left' lg={6} md={6} sm={12} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: { lg: '0px', md: '0px', sm: '10px', xs: '10px' } }}>
                                <Box sx={{ width: { lg: '50%', md: '70%', sm: '50%', xs: '80%' }, height: {lg:'470px',md:"470px",sm:"430px",xs:"400px"} }}>
                                    <img src={game3} width={'100%'} height={'100%'} alt='game5' style={{ borderRadius: '10px' }} />
                                </Box>

                            </Grid> */}

                            {/* <Grid item data-aos='fade-left' lg={6} md={6} sm={12} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: { lg: '0px', md: '0px', sm: '10px', xs: '10px' } }}>
                                <Box sx={{ width: { lg: '45%', md: '70%', sm: '50%', xs: '75%' }, height: { lg: '500px', md: "470px", sm: "430px", xs: "390px" } }}>
                                    <img src={game3} width={'100%'} height={'100%'} alt='game5' style={{ borderRadius: '10px' }} />
                                </Box>

                            </Grid> */}

                        </Grid>




                    </Grid>

                    {/* three  */}
                    {/* <Grid container sx={{ padding: { lg: '10px 20px', md: "10px 20px", sm: "10px 10px", xs: "0px" }, bgcolor: "black", mt: '10px', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
                        <Grid item xs={12} sx={{ textAlign: 'center', }} >
                            <Typography sx={{ color: '#1565c0', fontSize: { lg: '32px', md: '28px', sm: '25px', xs: '24px' }, fontWeight: '800', mt: '10px' }}>Our Games</Typography>
                        </Grid>
                        <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: "black" }}>
                            <Grid item xs={11} sm={11} md={9} lg={9} sx={{ m: '10px' }}>
                                <Box sx={{ display: { lg: "block", md: "none", sm: "none", xs: "none" } }}>
                                    <Slide arrows={false} duration={2000}>
                                        {
                                            imagesArr.map((item) => {
                                                return (

                                                    <Box sx={{ height: '480px' }}>
                                                        <img src={item.img} width={'100%'} height={'100%'} alt='register' style={{ borderRadius: '10px' }} />
                                                    </Box>
                                                )
                                            })
                                        }
                                    </Slide>
                                </Box>

                                <Box sx={{ display: { lg: "none", md: "block", sm: "block", xs: "none" } }}>
                                    <Slide arrows={false}>
                                        {
                                            mdImgArr.map((item) => {
                                                return (

                                                    <Box sx={{ height: '470px' }}>
                                                        <img src={item.img} width={'100%'} height={'100%'} alt='register' style={{ borderRadius: '10px' }} />
                                                    </Box>
                                                )
                                            })
                                        }
                                    </Slide>
                                </Box>

                                <Box sx={{ display: { lg: "none", md: "none", sm: "none", xs: "block" } }}>
                                    <Slide arrows={false}>
                                        {
                                            smImgArr.map((item) => {
                                                return (

                                                    <Box sx={{ height: '400px', display: "flex", justifyContent: "center" }}>
                                                        <img src={item.img} width={'80%'} height={'100%'} alt='register' style={{ borderRadius: '10px' }} />
                                                    </Box>
                                                )
                                            })
                                        }
                                    </Slide>
                                </Box>

                            </Grid>



                        </Grid>



                    </Grid> */}




                    <Grid item xs={12} sx={{ mt: "20px" }}>
                        <Grid container className='resultScroll' sx={{ overflow: "hidden", height: "100%", bgcolor: "#f1f3f6", p: "0px 10px" }}>
                            <Grid item xs={12} >
                                <Box>
                                    <Typography align='center' sx={{ color: '#1565c0', fontSize: { lg: '32px', md: '28px', sm: '25px', xs: '24px' }, fontWeight: '800', }}>
                                        How To Play The Game
                                    </Typography>
                                    <Typography align='center' sx={{ color: "black", mt: "16px", fontWeight: 'bold', fontSize: { lg: '17px', md: '16px', sm: '15px', xs: '15px' } }}>
                                        Please follow the below steps to play the game easily
                                    </Typography>
                                </Box>
                            </Grid>


                            <Grid item xs={12} sx={{ mt: "10px", display: "flex", justifyContent: "center", }}>
                                <Grid container xs={12} sm={12} md={10} lg={10} sx={{ p: "15px", bgcolor: "white", borderRadius: "30px", boxShadow: "-1px 2px 11px -4px rgba(0,0,0,0.75)" }} >
                                    {/* <Grid item xs={12} sm={12} md={6} lg={6} sx={{ mt: "20px", display: "flex", justifyContent: { xs: "center", sm: "", md: "", lg: "" }, alignItems: 'center' }} data-aos="fade-right">
                                        <Box sx={{ width: { lg: '60%', md: '75%', sm: '55%', xs: '88%' }, height: { lg: '500px', md: "470px", sm: "430px", xs: "390px" } }}>

                                            <img src={game7} alt='signup' height={"100%"} width={"100%"} style={{ borderRadius: '10px' }} />
                                        </Box>
                                    </Grid> */}

                                    <Grid item xs={12} sm={12} md={12} lg={12} data-aos="fade-up" sx={{ display: "flex", alignItems: "center", justifyContent: "left" ,p:'15px'}}>
                                        <Box>
                                            <Typography align='left' sx={{ color: "#424242", fontSize: { lg: "25px", md: "25px", sm: "22px", xs: "18px" }, fontWeight: "800" }}>Step 1: Download and Signup </Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center", mt: "15px", fontSize: { lg: "16px", md: "16px", sm: "14px", xs: "14px" } }}><CheckIcon sx={{ mr: "5px", fontSize: "18px", color:'green' }} />Go to the Play Store and download the LuckyQuiz App. </Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center", fontSize: { lg: "16px", md: "16px", sm: "14px", xs: "14px" } }}><CheckIcon sx={{ mr: "5px", fontSize: "18px", color:'green'  }} /> After downloading, please read the terms and conditions and privacy policy.</Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center", fontSize: { lg: "16px", md: "16px", sm: "14px", xs: "14px" } }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" , color:'green' }} />Then sign up with your mobile number and email ID.</Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center", fontSize: { lg: "16px", md: "16px", sm: "14px", xs: "14px" } }}><CheckIcon sx={{ mr: "5px", fontSize: "18px", color:'green'  }} /> You will receive an OTP; just input that OTP on the signup page, and your account will be ready.</Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center", fontSize: { lg: "16px", md: "16px", sm: "14px", xs: "14px" } }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" , color:'green' }} />Next, fill in your name, create a password, and click on signup. </Typography>
                                        </Box>
                                    </Grid>

                                </Grid>
                            </Grid>


                            <Grid item xs={12} sx={{ mt: "10px", display: "flex", justifyContent: "center" }}>
                                <Grid container xs={12} sm={12} md={10} lg={10} sx={{ p: "15px", bgcolor: "white", borderRadius: "30px", boxShadow: "-1px 2px 11px -4px rgba(0,0,0,0.75)" }}>
                                    <Grid item xs={12} sm={12} md={12} lg={12} data-aos="fade-up" sx={{ display: "flex", p: "15px", alignItems: "center", justifyContent: "left"}}>
                                        <Box data-aos="fade-up">
                                            <Typography align='left' sx={{ color: "#424242", fontSize: { lg: "25px", m: "25px", sm: "22px", xs: "18px" }, fontWeight: "800",  }}>Step 2: If you already have an account</Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center", mt: "15px", fontSize: { lg: "16px", md: "16px", sm: "14px", xs: "14px" } }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} />Log in to the app.</Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center", fontSize: { lg: "16px", md: "16px", sm: "14px", xs: "14px" } }}><CheckIcon sx={{ mr: "5px", fontSize: "18px", color:'green'  }} />Please enter the email and password correctly.</Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center", fontSize: { lg: "16px", md: "16px", sm: "14px", xs: "14px" } }}><CheckIcon sx={{ mr: "5px", fontSize: "18px", color:'green'  }} /> Next, choose the game you want to play.</Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center", fontSize: { lg: "16px", md: "16px", sm: "14px", xs: "14px" } }}><CheckIcon sx={{ mr: "5px", fontSize: "18px", color:'green'  }} />There are two variants: 0 to 9 and 0 to 99.</Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center", fontSize: { lg: "16px", md: "16px", sm: "14px", xs: "14px" } }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" , color:'green' }} />Add IQ to your wallet to play the quiz.</Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center", fontSize: { lg: "16px", md: "16px", sm: "14px", xs: "14px" } }}><CheckIcon sx={{ mr: "5px", fontSize: "18px", color:'green'  }} />Utilize that IQ based on your skills.</Typography>                                        </Box>


                                    </Grid>
                                    {/* <Grid item xs={12} sm={12} md={6} lg={6} sx={{ mt: "20px", display: "flex", justifyContent: "center", alignItems: 'center' }} data-aos="fade-right">
                                        <Box sx={{ width: { lg: '60%', md: '75%', sm: '55%', xs: '88%' }, height: { lg: '500px', md: "470px", sm: "430px", xs: "390px" } }}>

                                            <img src={game6} alt='game6' height={"100%"} width={"100%"} style={{ borderRadius: '10px' }} />
                                        </Box>
                                    </Grid> */}
                                </Grid>
                            </Grid>


                            
                          


                           



                            <Grid item xs={12} sx={{ mt: "10px", display: "flex", justifyContent: "center" }}>
                                <Grid container xs={12} sm={12} md={10} lg={10} sx={{p:'15px', bgcolor: "white", borderRadius: "30px", boxShadow: "-1px 2px 11px -4px rgba(0,0,0,0.75)" }}>
                                    <Grid item xs={12} sm={12} md={12} lg={12} data-aos="fade-up" sx={{ display: "flex",p: "15px", alignItems: "center", justifyContent: "left" }}>


                                        <Box>
                                            <Typography align='left' sx={{ color: "#424242", fontSize: { lg: "25px", md: "25px", sm: "22px", xs: "18px" }, fontWeight: "800" }}>Step 3: Choose the game quiz</Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center", mt: "15px", fontSize: { lg: "16px", md: "16px", sm: "14px", xs: "14px" } }}><CheckIcon sx={{ mr: "5px", fontSize: "18px", color:'green'  }} />After choosing the game, select the color, size, and number for the quiz</Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center", fontSize: { lg: "16px", md: "16px", sm: "14px", xs: "14px" } }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" , color:'green' }} />Choose a game that aligns with your skills.</Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center", fontSize: { lg: "16px", md: "16px", sm: "14px", xs: "14px" } }}><CheckIcon sx={{ mr: "5px", fontSize: "18px", color:'green'  }} />The 0 to 9 game has a 1-minute duration</Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center", fontSize: { lg: "16px", md: "16px", sm: "14px", xs: "14px" } }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" , color:'green' }} />while the 0 to 99 game has a 5-minute duration.</Typography>
                                            


                                        </Box>
                                    </Grid>
                                    {/* <Grid item xs={12} sm={12} md={6} lg={6} sx={{ mt: "20px", display: "flex", justifyContent: "center", alignItems: 'center' }} data-aos="fade-right">
                                        <Box sx={{ width: { lg: '60%', md: '75%', sm: '55%', xs: '88%' }, height: { lg: '500px', md: "470px", sm: "430px", xs: "390px" } }}>

                                            <img src={game4} alt='game4' height={"100%"} width={"100%"} style={{ borderRadius: '10px' }} />
                                        </Box>
                                    </Grid> */}
                                </Grid>
                            </Grid>



                            <Grid item xs={12} sx={{ mt: "10px", display: "flex", justifyContent: "center" }}>
                                <Grid container xs={12} sm={12} md={10} lg={10} sx={{ bgcolor: "white", p: "15px", borderRadius: "30px", boxShadow: "-1px 2px 11px -4px rgba(0,0,0,0.75)" }}>
                                    {/* <Grid item xs={12} sm={12} md={6} lg={6} sx={{ mt: "20px", display: "flex", justifyContent: "center", alignItems: 'center' }} data-aos="fade-right">
                                        <Box sx={{ width: { lg: '60%', md: '75%', sm: '55%', xs: '88%' }, height: { lg: '500px', md: "470px", sm: "430px", xs: "390px" } }}>

                                            <img alt='game' src={game1} height={"100%"} width={"100%"} style={{ borderRadius: '10px' }} />
                                        </Box>
                                    </Grid> */}

                                    <Grid item xs={12} sm={12} md={12} lg={12} data-aos="fade-up" sx={{ display: "flex", alignItems: "center", justifyContent: "left", p:'15px' }}>


                                        <Box>
                                            <Typography align='left' sx={{ color: "#424242", fontSize: { lg: "25px", md: "25px", sm: "22px", xs: "18px" }, fontWeight: "800" }}>Step 4: Check you result</Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center", mt: "15px", fontSize: { lg: "16px", md: "16px", sm: "14px", xs: "14px" } }}><CheckIcon sx={{ mr: "5px", fontSize: "18px", color:'green'  }} />After playing the game, check your result on the result chart.</Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center", fontSize: { lg: "16px", md: "16px", sm: "14px", xs: "14px" } }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" , color:'green' }} />The outcome is based on your quiz performance.</Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center", fontSize: { lg: "16px", md: "16px", sm: "14px", xs: "14px" } }}><CheckIcon sx={{ mr: "5px", fontSize: "18px", color:'green'  }} />All results are displayed on the chart </Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center", fontSize: { lg: "16px", md: "16px", sm: "14px", xs: "14px" } }}><CheckIcon sx={{ mr: "5px", fontSize: "18px", color:'green'  }} />Number result first, then size then color.</Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center", fontSize: { lg: "16px", md: "16px", sm: "14px", xs: "14px" } }}><CheckIcon sx={{ mr: "5px", fontSize: "18px", color:'green'  }} />You can match result accordingly</Typography>
                                        
                                        </Box>
                                    </Grid>

                                </Grid>
                            </Grid>


                            {/* testomonials */}
                            <Grid item xs={12} sx={{ mt: "20px", bgcolor: '#212121', borderRadius: '7px' }}>
                                <Box>
                                    <Grid container className='resultScroll' sx={{ overflowX: "scroll", justifyContent: "center", pb: '20px' }}>
                                        <Grid item xs={12} sx={{ mt: '20px' }} data-aos="fade-up">
                                            <Typography textAlign={'center'} sx={{ color: '#ff80ab', fontSize: { lg: '32px', md: '28px', sm: '25px', xs: '24px' }, fontWeight: '800', mt: '10px' }}>Happy Clients</Typography>
                                            <Typography textAlign={'center'} m={'6px'} sx={{ color: 'white', fontSize: { lg: '18px', xs: '17px' } }} fontWeight={600}>What our clients says about us</Typography>
                                        </Grid>
                                        <Box className='resultScroll' sx={{ overflowX: "scroll", display: "flex" }} data-aos="fade-up">


                                            <Box sx={{ m: "7px", transition: "transform 0.3s ease", '&:hover': { transform: { lg: "scale(1.05)", md: "scale(1.05)", sm: "scale(1.05)", xs: "scale(1.05)" } } }}>
                                                <Paper sx={{ height: "300px", width: "230px", p: "10px", m: "7px", borderRadius: '7px' }} elevation={3}>
                                                    <Typography align='center' sx={{ p: "10px" }}>
                                                        <img src={quote} alt="quote" height="35px" width="35px" />
                                                    </Typography>
                                                    <Box sx={{ height: "35%" }}>
                                                        <Typography align='center' sx={{ fontSize: "15px", fontWeight: "500" }}>“I have been playing this game for a long time. It is fully based on your ability, and if you have good mathematical skills, it is the best choice for you.”</Typography>
                                                    </Box>
                                                    <Box >
                                                        <Box sx={{ mt: "17px", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                                            <Box sx={{ width: "fit-content", display: "flex", alignItems: "center" }}>
                                                                <Box sx={{ borderRadius: "50px", height: "45px", width: "45px", overflow: "hidden" }}>
                                                                    <img src={av3} alt="bjp" height={"100%"} width={"100%"} />
                                                                </Box>
                                                                <Typography sx={{ fontSize: "15px", fontWeight: "700", ml: "10px", width: "fit-content", wordWrap: "wrap" }}>Mr Sumit singh</Typography>
                                                            </Box>
                                                            <Box sx={{ p: "10px" }}>
                                                                <Rating name="size-large" defaultValue={5} sx={{ fontSize: "30px", color: '#d81b60' }} size='large' disabled />
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                </Paper>
                                            </Box>


                                            <Box sx={{ m: "7px", transition: "transform 0.3s ease", '&:hover': { transform: { lg: "scale(1.05)", md: "scale(1.05)", sm: "scale(1.05)", xs: "scale(1.05)" } } }}>
                                                <Paper sx={{ height: "300px", width: "230px", p: "10px", m: "7px", borderRadius: '7px' }} elevation={3}>
                                                    <Typography align='center' sx={{ p: "10px" }}>
                                                        <img src={quote} alt="quote" height="35px" width="35px" />
                                                    </Typography>
                                                    <Box sx={{ height: "35%" }}>
                                                        <Typography align='center' sx={{ fontSize: "15px", fontWeight: "500" }}>"The best game to play – simply solve quizzes and enjoy easy withdrawals and deposits."</Typography>
                                                    </Box>
                                                    <Box>
                                                        <Box sx={{ mt: "17px", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                                            <Box sx={{ width: "fit-content", display: "flex", alignItems: "center" }}>
                                                                <Box sx={{ borderRadius: "50px", height: "45px", width: "45px", overflow: "hidden" }}>
                                                                    <img src={av3} alt="bjp" height={"100%"} width={"100%"} />
                                                                </Box>
                                                                <Typography sx={{ fontSize: "15px", fontWeight: "700", ml: "10px", width: "fit-content", wordWrap: "wrap" }}>Mr Anand pandey</Typography>
                                                            </Box>
                                                            <Box sx={{ p: "10px" }}>
                                                                <Rating name="size-large" defaultValue={5} sx={{ fontSize: "30px", color: '#d81b60' }} size='large' disabled />
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                </Paper>
                                            </Box>


                                            <Box sx={{ m: "7px", transition: "transform 0.3s ease", '&:hover': { transform: { lg: "scale(1.05)", md: "scale(1.05)", sm: "scale(1.05)", xs: "scale(1.05)" } } }}>
                                                <Paper sx={{ height: "300px", width: "230px", p: "10px", m: "7px", borderRadius: '7px' }} elevation={3}>
                                                    <Typography align='center' sx={{ p: "10px" }}>
                                                        <img src={quote} alt="quote" height="35px" width="35px" />
                                                    </Typography>
                                                    <Box sx={{ height: "35%" }}>
                                                        <Typography align='center' sx={{ fontSize: "15px", fontWeight: "500" }}>“This is the best game I have played so far; no luck by chance, all based on your talent.”</Typography>
                                                    </Box>
                                                    <Box>
                                                        <Box sx={{ mt: "17px", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                                                <Box sx={{ borderRadius: "50px", overflow: "hidden", height: "40px", width: "40px" }}>
                                                                    <img src={av3} alt="parsal" height="100%" width="100%" />
                                                                </Box>
                                                                <Typography sx={{ fontSize: "15px", fontWeight: "700", ml: "10px", width: "fit-content", wordWrap: "wrap" }}>Mr Ramesh sharma</Typography>
                                                            </Box>
                                                            <Box sx={{ p: "10px" }}>
                                                                <Rating name="size-large" defaultValue={5} sx={{ fontSize: "30px", color: '#d81b60' }} size='large' disabled />
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                </Paper>
                                            </Box>
                                        </Box>


                                    </Grid>
                                </Box>

                            </Grid>

                            {/* faq sections */}
                            <Grid item xs={12} sx={{ mt: "20px" }}>
                                <Grid container sx={{ pb: "40px", display: "flex", justifyContent: "center" }} data-aos="fade-up">
                                    <Box sx={{ width: { lg: "70%", md: "75%", sm: "100%", xs: "100%" } }}>
                                        <Box>
                                            <Typography align='center' sx={{ color: '#1565c0', fontSize: { lg: '32px', md: '28px', sm: '25px', xs: '24px' }, fontWeight: '800', mt: '10px' }} >
                                                Frequently Asked Questions
                                            </Typography>
                                        </Box>
                                        <Box sx={{ mt: '15px' }}>
                                           



                                            <Accordion elevation={1} >
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel2a-content"
                                                    id="panel2a-header"
                                                    sx={{ p: "0px 8px" }}
                                                >
                                                    <Typography sx={{ color: "black", fontSize: { lg: "16px", md: "15px", sm: "15px", xs: "12px" }, fontWeight: "bold" }}>
                                                        How to play the game?
                                                    </Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>

                                                    <ul>
                                                        <li style={{ fontSize: "12px", marginTop: "-30px" }}>Firstly, you have to register yourself.</li>
                                                        <li style={{ fontSize: "12px" }}>Then, log in to the game and choose the game you want to play.</li>
                                                        <li style={{ fontSize: "12px" }}>After that, deposit IQ in the game through the deposit button. Once you have IQ in your wallet, you can play the game.</li>
                                                    </ul>

                                                </AccordionDetails>
                                            </Accordion>


                                            <Accordion elevation={0} >
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel3a-content"
                                                    id="panel3a-header"
                                                    sx={{ p: "0px 8px" }}
                                                >
                                                    <Typography sx={{ color: "black", fontSize: { lg: "16px", md: "15px", sm: "15px", xs: "12px" }, fontWeight: "bold" }}>
                                                        Can I save games with Game Play Color?
                                                    </Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>

                                                    <ul>
                                                        <li style={{ fontSize: "12px", marginTop: "-30px" }}>No its live game you can,t save the game</li>

                                                    </ul>

                                                </AccordionDetails>
                                            </Accordion>

                                            <Accordion elevation={0} >
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel3a-content"
                                                    id="panel3a-header"
                                                    sx={{ p: "0px 8px" }}
                                                >
                                                    <Typography sx={{ color: "black", fontSize: { lg: "16px", md: "15px", sm: "15px", xs: "12px" }, fontWeight: "bold" }}>
                                                        Why aren’t my games showing up?
                                                    </Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>

                                                    <ul>
                                                        <li style={{ fontSize: "12px", marginTop: "-30px" }}>Reason should be your internet conection or your system is not working please check.</li>

                                                    </ul>

                                                </AccordionDetails>
                                            </Accordion>


                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>



                            {/* contact us section */}
                            <Grid item xs={12} sx={{ bgcolor: 'black' }}>
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
                                                <Button variant='outlined' sx={{ color: '"#1976d2" ', borderRadius: "25px", p: "10px 20px", border: "2px solid #1976d2", color: "white" }}>Send Message</Button>
                                            </Box>
                                        </Box>

                                    </Grid>

                                </Grid>



                            </Grid>


                        </Grid>
                    </Grid>
                </Grid>


                {/* footer section */}
                <FooterComp />


            </Container>
        </>
    )
}

export default LandingPage