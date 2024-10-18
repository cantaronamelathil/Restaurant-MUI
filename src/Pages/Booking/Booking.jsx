import React from 'react'
import {Box, Typography} from "@mui/material";
import { styled } from "@mui/system";
import buyIcon from "../../assets/buy_icon.png";
import sellIcon from "../../assets/sell_icon.png";
import rentIcon from "../../assets/sell_icon.png"; // Corrected path
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CustomButton from '../../components/CustomButton/CustomButton';

function Booking() {
    const CustomBox = styled(Box)(({theme}) => ({
        width: "30%",
        [theme.breakpoints.down("md")]: {
          width: "85%"
        },
    }));
    
    const GuidesBox = styled(Box)(({theme}) => ({
        display: "flex",
        justifyContent: "space-around",
        width: "70%",
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),
        [theme.breakpoints.down("md")]: {
          width: "100%",
        },
        [theme.breakpoints.down("sm")]: {
          marginBottom: "0",
          flexDirection: "column",
        },
    }));
    
    const GuideBox = styled(Box)(({theme}) => ({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: theme.spacing(5),
        [theme.breakpoints.down("sm")]: {
            marginTop: theme.spacing(2, 0, 2, 0),
        },
    }));

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: '40px'
        }}>
            <div style={{
                width: "5%",
                height: "5px",
                backgroundColor: "#000339", // Corrected spelling
                margin: "0 auto",
            }}></div>

            <Typography variant="h3"
            sx={{
                fontSize: "35px",
                fontWeight: "bold",
                color: "#000339",
                my: 3
            }}>
                How To Book?
            </Typography>

            <CustomBox>
                <Typography variant="body2"
                sx={{
                    fontSize: "16px",  // Corrected to "fontSize"
                    fontWeight: "500",
                    color: "#5A6473",
                    textAlign: "center",
                }}>
                    Everything you need to know when you book for advance slot
                </Typography>
            </CustomBox>

            <GuidesBox>
                <GuideBox>
                    <img src={buyIcon} alt="buy" />
                    <Typography variant="body2"
                        sx={{
                            fontWeight: "500",
                            fontSize: "20px",
                            color: "#000339",
                            my: 1,
                        }}> Order Guides
                    </Typography>
                    <Box sx={{
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                        <Typography variant="body2"
                        sx={{
                            fontWeight: "500",
                            fontSize: "16px",
                            color: "#0689FF",
                        }}>
                            How to Order
                        </Typography>
                        <ArrowRightAltIcon style={{ color: "#0689FF" }}/>
                    </Box>
                </GuideBox>

                <GuideBox>
                    <img src={rentIcon} alt="rent" /> {/* Corrected alt text */}
                    <Typography variant="body2"
                        sx={{
                            fontWeight: "500",
                            fontSize: "20px",
                            color: "#000339",
                            my: 1,
                        }}> Booking Guides
                    </Typography>
                    <Box sx={{
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                        <Typography variant="body2"
                        sx={{
                            fontWeight: "500",
                            fontSize: "16px",
                            color: "#0689FF",
                        }}>
                            How to Book
                        </Typography>
                        <ArrowRightAltIcon style={{ color: "#0689FF" }}/>
                    </Box>
                </GuideBox>

                <GuideBox>
                    <img src={sellIcon} alt="sell" />
                    <Typography variant="body2"
                        sx={{
                            fontWeight: "500",
                            fontSize: "20px",
                            color: "#000339",
                            my: 1,
                        }}> Payment Guides
                    </Typography>
                    <Box sx={{
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                        <Typography variant="body2"
                        sx={{
                            fontWeight: "500",
                            fontSize: "16px",
                            color: "#0689FF",
                        }}>
                            Payment Guides
                        </Typography>
                        <ArrowRightAltIcon style={{ color: "#0689FF" }}/>
                    </Box>
                </GuideBox>
            </GuidesBox>

            <CustomButton
                backgroundColor='#0F1B4C'
                color="#fff"
                buttonText="See Full Guides"
                guideBtn={true}
            />
        </Box>
    );
}

export default Booking;
