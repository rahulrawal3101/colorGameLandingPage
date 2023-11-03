import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box, Grid, Typography } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../master.css';



const FooterComp = () => {

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
          <Box sx={{ mt: "70px", p: "15px 30px", bgcolor: "black" }}>
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
                                <Typography sx={{ color: "#757575", display: "flex", alignItems: "center", mt: "10px", cursor: "pointer", color: "white" }} onClick={() => { handleNavigator('/terms') }}>
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
                </Box>

    </>
  )
}

export default FooterComp