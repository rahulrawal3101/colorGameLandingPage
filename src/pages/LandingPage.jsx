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
                                        <Typography sx={{ fontSize: '17px', cursor: "pointer", color: 'white' }} onClick={()=>{navigate('/contact');window.scrollTo({top:0,
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
                <Grid container sx={{ justifyContent: "center", alignItems: "center", bgcolor: "#f1f3f6", overflow: "hidden", pt: { lg: "60px", md: "60px", sm: "60px", xs: "55px" } }}>
                    {/* one  */}
                    <Grid container sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap-reverse', backgroundImage: `url(${black})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%', p: '20px 8px' }}>
                        <Grid item lg={6} md={6} sm={12} xs={12} data-aos='fade-up' sx={{ mt: '-30px' }}  >
                            <Typography sx={{ color: '#f5f5f5', fontSize: { lg: '30px', md: '28px', sm: '25px', xs: '23px' }, fontWeight: '800', textAlign: 'center' }}>Luckyquiz is one of the best skill based  game in india.</Typography>
                            <Typography sx={{ fontSize: '15px', mt: '5px', textAlign: 'center', color: '#aed581' }}>Luckyquiz allows you to earn money by applying ur skill The amount earned can be withdraw easily.</Typography>
                        </Grid>

                        <Grid item data-aos='fade-up' lg={6} md={6} sm={12} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Box sx={{ width: { lg: '45%', md: '70%', sm: '50%', xs: '75%' }, height: { lg: '500px', md: "470px", sm: "430px", xs: "390px" } }}>
                                <img src={game5} width={'100%'} height={'100%'} alt='game1' style={{ borderRadius: '10px' }} />
                            </Box>

                        </Grid>


                    </Grid>

                    {/* two  */}
                    <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: '20px 10px', }}>
                        <Grid item xs={12} sx={{ textAlign: 'center' }}>
                            <Typography sx={{ color: '#1565c0', fontSize: { lg: '32px', md: '28px', sm: '25px', xs: '24px' }, fontWeight: '800', mt: '10px' }}>WHY LUCKY QUIZ</Typography>

                        </Grid>
                        <Grid item xs={11.8} sx={{ textAlign: 'center' }}>

                            <Typography sx={{ color: "black", mt: "16px", fontWeight: 'bold', fontSize: { lg: '17px', md: '16px', sm: '15px', xs: '15px' } }}>Luckyquiz is one of the Best Quiz base game .Luckyquiz is a calculation base game .Many people have shared their personal experience  with quiz games.You can play online by downloading the Luckyquiz game .and u can earn 20to 30k Iq monthly by u r anaylitic skills.</Typography>
                        </Grid>
                        <Grid container sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap-reverse', mt: "25px" }}>
                            <Grid item lg={6} md={6} sm={12} xs={12} >

                                <Grid container sx={{ padding: '2px', mt: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                    <Grid item xs={3} data-aos='fade-right' sx={{ textAlign: 'center' }} >
                                        <ThumbUpOffAltIcon sx={{ fontSize: { lg: '60px', md: '55px', sm: '50px', xs: '40px' }, color: '#1565c0' }} />
                                    </Grid>
                                    <Grid item xs={9} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column', mb: '20px' }}>

                                        <Box data-aos='fade-up' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                                            <CircleIcon sx={{ fontSize: '12px', color: '#1565c0' }} />
                                            <Typography sx={{ fontSize: '14px', ml: '8px', fontWeight: 'bold', }}>Start quiz with only 1 rs</Typography>
                                        </Box>

                                        <Box data-aos='fade-up' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', mt: '15px' }}>
                                            <CircleIcon sx={{ fontSize: '12px', color: '#1565c0' }} />
                                            <Typography sx={{ fontSize: '15px', ml: '8px', fontWeight: 'bold', }}>Fast Withdrawal (Most of the time, money comes to your account within 1 hour)</Typography>
                                        </Box>

                                        <Box data-aos='fade-up' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', mt: '15px' }}>
                                            <CircleIcon sx={{ fontSize: '12px', color: '#1565c0' }} />
                                            <Typography sx={{ fontSize: '14px', ml: '8px', fontWeight: 'bold', }}>No Withdrawal Fee (You can withdraw as much as you want in this game without any withdrawal fee)</Typography>
                                        </Box>

                                        <Box data-aos='fade-up' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', mt: '15px' }}>
                                            <CircleIcon sx={{ fontSize: '12px', color: '#1565c0' }} />
                                            <Typography sx={{ fontSize: '14px', ml: '8px', fontWeight: 'bold', }}>24/7 Customer Service</Typography>
                                        </Box>

                                        <Box data-aos='fade-up' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', mt: '15px' }}>
                                            <CircleIcon sx={{ fontSize: '12px', color: '#1565c0' }} />
                                            <Typography sx={{ fontSize: '14px', ml: '8px', fontWeight: 'bold', }}>Very Good Promotion Mission (Earn More than 4 Lakh for Complete Promotion Task)</Typography>
                                        </Box>

                                        <Box data-aos='fade-up' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', mt: '15px' }}>
                                            <CircleIcon sx={{ fontSize: '12px', color: '#1565c0' }} />
                                            <Typography sx={{ fontSize: '14px', ml: '8px', fontWeight: 'bold', }}>Promotion Bonus Upto 5 Levels</Typography>
                                        </Box>

                                        <Box data-aos='fade-up' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', mt: '15px' }}>
                                            <CircleIcon sx={{ fontSize: '12px', color: '#1565c0' }} />
                                            <Typography sx={{ fontSize: '14px', ml: '8px', fontWeight: 'bold', }}>Every two months, new events come in which you can participate and Earn Up to 6 Lakh.</Typography>
                                        </Box>

                                    </Grid>

                                </Grid>

                            </Grid>
                            {/* <Grid item data-aos='fade-left' lg={6} md={6} sm={12} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: { lg: '0px', md: '0px', sm: '10px', xs: '10px' } }}>
                                <Box sx={{ width: { lg: '50%', md: '70%', sm: '50%', xs: '80%' }, height: {lg:'470px',md:"470px",sm:"430px",xs:"400px"} }}>
                                    <img src={game3} width={'100%'} height={'100%'} alt='game5' style={{ borderRadius: '10px' }} />
                                </Box>

                            </Grid> */}

                            <Grid item data-aos='fade-left' lg={6} md={6} sm={12} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: { lg: '0px', md: '0px', sm: '10px', xs: '10px' } }}>
                                <Box sx={{ width: { lg: '45%', md: '70%', sm: '50%', xs: '75%' }, height: { lg: '500px', md: "470px", sm: "430px", xs: "390px" } }}>
                                    <img src={game3} width={'100%'} height={'100%'} alt='game5' style={{ borderRadius: '10px' }} />
                                </Box>

                            </Grid>

                        </Grid>




                    </Grid>

                    {/* three  */}
                    <Grid container sx={{ padding: { lg: '10px 20px', md: "10px 20px", sm: "10px 10px", xs: "0px" }, bgcolor: "black", mt: '10px', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
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



                    </Grid>




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


                            <Grid item xs={12} sx={{ mt: "10px", display: "flex", justifyContent: "center" }}>
                                <Grid container xs={12} sm={12} md={10} lg={10} sx={{ p: "15px", bgcolor: "white", borderRadius: "30px", boxShadow: "-1px 2px 11px -4px rgba(0,0,0,0.75)" }} wrap='wrap-reverse'>
                                    <Grid item xs={12} sm={12} md={6} lg={6} sx={{ mt: "20px", display: "flex", justifyContent: { xs: "center", sm: "", md: "", lg: "" }, alignItems: 'center' }} data-aos="fade-right">
                                        <Box sx={{ width: { lg: '60%', md: '75%', sm: '55%', xs: '88%' }, height: { lg: '500px', md: "470px", sm: "430px", xs: "390px" } }}>

                                            <img src={game7} alt='signup' height={"100%"} width={"100%"} style={{ borderRadius: '10px' }} />
                                        </Box>
                                    </Grid>

                                    <Grid item xs={12} sm={12} md={6} lg={6} data-aos="fade-up" sx={{ display: "flex", alignItems: "center", justifyContent: { lg: 'flex-start', md: "flex-start", sm: "center", xs: "center" } }}>
                                        <Box>
                                            <Typography align='center' sx={{ color: "#263238", fontSize: { lg: "25px", md: "25px", sm: "22px", xs: "18px" }, fontWeight: "800" }}>Step 1: Download and Signup </Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center", mt: "15px", fontSize: { lg: "16px", md: "16px", sm: "14px", xs: "14px" } }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} />Go to Play Store and Download the LuckyQuiz App </Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center", fontSize: { lg: "16px", md: "16px", sm: "14px", xs: "14px" } }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} /> After download please read terms and condition and privacy.</Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center", fontSize: { lg: "16px", md: "16px", sm: "14px", xs: "14px" } }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} />Then signup with mobile no, email id</Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center", fontSize: { lg: "16px", md: "16px", sm: "14px", xs: "14px" } }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} /> You get otp just put that otp on signup page and your account is ready.</Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center", fontSize: { lg: "16px", md: "16px", sm: "14px", xs: "14px" } }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} />Then fill your name make password, then click on signup. </Typography>
                                            {/* <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"14px"} }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} /> Lorem ipsum dolor sit amet consectetur adipisicing elit.  </Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center" ,fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"14px"}}}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} /> Lorem ipsum dolor sit amet consectetur adipisicing elit. </Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center" ,fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"14px"}}}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} /> Lorem ipsum dolor sit amet consectetur adipisicing elit.  </Typography> */}


                                        </Box>
                                    </Grid>

                                </Grid>
                            </Grid>




                            <Grid item xs={12} sx={{ mt: "10px", display: "flex", justifyContent: "center" }}>
                                <Grid container xs={12} sm={12} md={10} lg={10} sx={{ p: "15px", bgcolor: "white", borderRadius: "30px", boxShadow: "-1px 2px 11px -4px rgba(0,0,0,0.75)" }}>
                                    <Grid item xs={12} sm={12} md={6} lg={6} data-aos="fade-up" sx={{ display: "flex", p: "15px", alignItems: "center", justifyContent: "center" }}>
                                        <Box data-aos="fade-up">
                                            <Typography align='center' sx={{ color: "#263238", fontSize: { lg: "25px", md: "25px", sm: "22px", xs: "18px" }, fontWeight: "800" }}>Step 2: If you already have an account</Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center", mt: "15px", fontSize: { lg: "16px", md: "16px", sm: "14px", xs: "14px" } }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} /> Login to the App</Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center", fontSize: { lg: "16px", md: "16px", sm: "14px", xs: "14px" } }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} />Please enter the E-mail and password correctly </Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center", fontSize: { lg: "16px", md: "16px", sm: "14px", xs: "14px" } }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} /> Then choose the game which u want to play</Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center", fontSize: { lg: "16px", md: "16px", sm: "14px", xs: "14px" } }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} />There is two variant 0 to 9, 0 to 99 </Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center", fontSize: { lg: "16px", md: "16px", sm: "14px", xs: "14px" } }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} />Then add IQ in your wallet to play quiz</Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center", fontSize: { lg: "16px", md: "16px", sm: "14px", xs: "14px" } }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} />Then use that IQ according your skills</Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center", fontSize: { lg: "16px", md: "16px", sm: "14px", xs: "14px" } }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} />Choose the no. according to quiz</Typography>
                                            {/* <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center" ,fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"14px"}}}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} /> Lorem ipsum dolor sit amet consectetur adipisicing elit.  </Typography> */}
                                        </Box>


                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6} lg={6} sx={{ mt: "20px", display: "flex", justifyContent: "center", alignItems: 'center' }} data-aos="fade-right">
                                        <Box sx={{ width: { lg: '60%', md: '75%', sm: '55%', xs: '88%' }, height: { lg: '500px', md: "470px", sm: "430px", xs: "390px" } }}>

                                            <img src={game6} alt='game6' height={"100%"} width={"100%"} style={{ borderRadius: '10px' }} />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>


                            {/* <Grid item xs={12} sx={{ mt: "10px",display:"flex",justifyContent:"center" }}>
                                <Grid container xs={12} sm={12} md={10} lg={10} sx={{bgcolor:"white",p:"15px",borderRadius:"30px",boxShadow:"-1px 2px 11px -4px rgba(0,0,0,0.75)"}} wrap='wrap-reverse'>
                                    <Grid item xs={12} sm={12} md={6} lg={6} sx={{ mt: "20px", display: "flex", justifyContent: "center", alignItems: 'center' }} data-aos="fade-right">
                                        <Box sx={{ width: { lg: '60%', md: '75%', sm: '55%', xs: '88%' }, height: {lg:'500px',md:"470px",sm:"430px",xs:"390px"} }}>

                                            <img src={game5} alt='game5' height={"100%"} width={"100%"} style={{ borderRadius: '10px' }} />
                                        </Box>
                                    </Grid>

                                    <Grid item xs={12} sm={12} md={6} lg={6} data-aos="fade-up" sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                       
                                        <Box>
                                        <Typography align='center' sx={{ color: "#263238", fontSize:{lg:"30px",md:"30px",sm:"25px",xs:"20px"}, fontWeight: "800" }}>Step 3: Choose the game you want to play</Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center",mt:"15px",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"14px"} }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} />Choose the game you want to play from the home page</Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"14px"}}}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} /> Fill the details for make an account</Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"14px"} }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} /> Lorem ipsum dolor sit amet consectetur adipisicing elit. </Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"14px"} }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} /> Lorem ipsum dolor sit amet consectetur adipisicing elit.  </Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"14px"} }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} /> Lorem ipsum dolor sit amet consectetur adipisicing elit. </Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"14px"} }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} /> Lorem ipsum dolor sit amet consectetur adipisicing elit.  </Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center" ,fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"14px"}}}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} /> Lorem ipsum dolor sit amet consectetur adipisicing elit. </Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center" ,fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"14px"}}}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} /> Lorem ipsum dolor sit amet consectetur adipisicing elit.  </Typography>


                                        </Box>
                                    </Grid>

                                </Grid>
                            </Grid> */}



                            <Grid item xs={12} sx={{ mt: "10px", display: "flex", justifyContent: "center" }}>
                                <Grid container xs={12} sm={12} md={10} lg={10} sx={{ bgcolor: "white", p: "15px", borderRadius: "30px", boxShadow: "-1px 2px 11px -4px rgba(0,0,0,0.75)" }}>
                                    <Grid item xs={12} sm={12} md={6} lg={6} data-aos="fade-up" sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>


                                        <Box>
                                            <Typography align='center' sx={{ color: "#263238", fontSize: { lg: "30px", md: "30px", sm: "25px", xs: "20px" }, fontWeight: "800" }}>Step 3: Choose the game quiz</Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center", mt: "15px", fontSize: { lg: "16px", md: "16px", sm: "14px", xs: "14px" } }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} />After chossing the game, choose the color,size,number for  quiz</Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center", fontSize: { lg: "16px", md: "16px", sm: "14px", xs: "14px" } }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} />Choose game according to your skills</Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center", fontSize: { lg: "16px", md: "16px", sm: "14px", xs: "14px" } }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} />0 to 9 have 1 minute game </Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center", fontSize: { lg: "16px", md: "16px", sm: "14px", xs: "14px" } }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} />0 to 99 game have 5 minutes game</Typography>
                                            {/* <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"14px"} }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} /> Lorem ipsum dolor sit amet consectetur adipisicing elit. </Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"14px"} }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} /> Lorem ipsum dolor sit amet consectetur adipisicing elit.  </Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center" ,fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"14px"}}}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} /> Lorem ipsum dolor sit amet consectetur adipisicing elit. </Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center" ,fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"14px"}}}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} /> Lorem ipsum dolor sit amet consectetur adipisicing elit.  </Typography> */}


                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6} lg={6} sx={{ mt: "20px", display: "flex", justifyContent: "center", alignItems: 'center' }} data-aos="fade-right">
                                        <Box sx={{ width: { lg: '60%', md: '75%', sm: '55%', xs: '88%' }, height: { lg: '500px', md: "470px", sm: "430px", xs: "390px" } }}>

                                            <img src={game4} alt='game4' height={"100%"} width={"100%"} style={{ borderRadius: '10px' }} />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>



                            <Grid item xs={12} sx={{ mt: "10px", display: "flex", justifyContent: "center" }}>
                                <Grid container xs={12} sm={12} md={10} lg={10} sx={{ bgcolor: "white", p: "15px", borderRadius: "30px", boxShadow: "-1px 2px 11px -4px rgba(0,0,0,0.75)" }} wrap='wrap-reverse'>
                                    <Grid item xs={12} sm={12} md={6} lg={6} sx={{ mt: "20px", display: "flex", justifyContent: "center", alignItems: 'center' }} data-aos="fade-right">
                                        <Box sx={{ width: { lg: '60%', md: '75%', sm: '55%', xs: '88%' }, height: { lg: '500px', md: "470px", sm: "430px", xs: "390px" } }}>

                                            <img alt='game' src={game1} height={"100%"} width={"100%"} style={{ borderRadius: '10px' }} />
                                        </Box>
                                    </Grid>

                                    <Grid item xs={12} sm={12} md={6} lg={6} data-aos="fade-up" sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>


                                        <Box>
                                            <Typography align='center' sx={{ color: "#263238", fontSize: { lg: "30px", md: "30px", sm: "25px", xs: "20px" }, fontWeight: "800" }}>Step 4: Check you result</Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center", mt: "15px", fontSize: { lg: "16px", md: "16px", sm: "14px", xs: "14px" } }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} />After playing game check your result on result chart</Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center", fontSize: { lg: "16px", md: "16px", sm: "14px", xs: "14px" } }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} />Result outcomes is based on your quiz</Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center", fontSize: { lg: "16px", md: "16px", sm: "14px", xs: "14px" } }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} />All result you get in chart </Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center", fontSize: { lg: "16px", md: "16px", sm: "14px", xs: "14px" } }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} />Number result first, then size then color.</Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center", fontSize: { lg: "16px", md: "16px", sm: "14px", xs: "14px" } }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} />You can match result accordingly</Typography>
                                            {/* <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center",fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"14px"} }}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} /> Lorem ipsum dolor sit amet consectetur adipisicing elit.  </Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center" ,fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"14px"}}}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} /> Lorem ipsum dolor sit amet consectetur adipisicing elit. </Typography>
                                            <Typography sx={{ color: "#546e7a", display: "flex", alignItems: "center" ,fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"14px"}}}><CheckIcon sx={{ mr: "5px", fontSize: "18px" }} /> Lorem ipsum dolor sit amet consectetur adipisicing elit.  </Typography> */}
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
                                                        <Typography align='center' sx={{ fontSize: "15px", fontWeight: "500" }}>“I have played this game from so long this fully base pn u r abilty if you have good mathmatics best choice for you .”</Typography>
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
                                                        <Typography align='center' sx={{ fontSize: "15px", fontWeight: "500" }}>"Best game in playing just solve the quiz and win easy withdrawls and deposit"</Typography>
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
                                                        <Typography align='center' sx={{ fontSize: "15px", fontWeight: "500" }}>“This best game i have played so far no luck by chance all on base of ur talent”</Typography>
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
                                            {/* <Accordion elevation={1} >
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel1a-content"
                                                    id="panel1a-header"
                                                    sx={{ p: "0px 8px" }}>
                                                    <Typography sx={{ color: "black", fontSize: { lg: "16px", md: "15px", sm: "15px", xs: "12px" }, fontWeight: "bold" }}>
                                                      From Where can I download game?
                                                    </Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>

                                                    <ul>
                                                        <li style={{ fontSize: "12px", marginTop: "-30px" }}>You can download it from play store / App store or whatever store your mobile support </li>
                                                        <li style={{ fontSize: "12px" }}>ou can download it directly from google</li>
                                                        <li style={{ fontSize: "12px" }}>You can take apk from your or person who have the game</li>
                                                    </ul>

                                                </AccordionDetails>
                                            </Accordion> */}



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
                                                        <li style={{ fontSize: "12px", marginTop: "-30px" }}>Firstly you have to register yourself.</li>
                                                        <li style={{ fontSize: "12px" }}>Then login into the game and choose the game you want to play.</li>
                                                        <li style={{ fontSize: "12px" }}>Then deposite IQ in the game through deposite button when you have IQ in your wallet you can play the game.</li>
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
                 <FooterComp/>
               

            </Container>
        </>
    )
}

export default LandingPage