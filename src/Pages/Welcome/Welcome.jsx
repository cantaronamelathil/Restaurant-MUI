import React from 'react'
import {Box,Typography} from "@mui/material";
import CustomButton from '../../components/CustomButton/CustomButton';
import {styled} from  "@mui/system";
import {Container} from "@mui/system";
import welcome from "../../assets/welcome.png"

const Welcome=()=>{
  const CustomBox = styled(Box)(({theme})=>({
    display:'flex',
    alignItems:'center',
    gap:theme.spacing(3),
    marginTop:theme.spacing(3),
    [theme.breakpoints.down("md")]:{
        flexDirection:'column',
        alignItems:'center',
        textAlign:'center',
    },

  }));
  const Title = styled(Typography)(({theme})=>({
    frontSize:"64px",
    color:"#fff",
    frontWeight:"bold",
    marginBottom:theme.spacing(4,0,4,0),
    
    [theme.breakpoints.down("sm")]:{
        frontSize:"32px",
    
    },
  }));
return(
    <Box sx={{backgroundColor:'#FED801',minHeight:"80vh"}}>
       <Container>
        <CustomBox>
           <Box sx={{flex: "1"}}>
             <Typography variant="body2"
             sx={{
                frontSize:"18px",
                color:"#687690",
                frontWeight:"500",
                mt:10,
                mb:4,
             }}>
                Welcome to Resturant
             </Typography>
             <Title variant='h1'>
                Discover the place where you'll love to Eat
            </Title>
            <Typography 
                variant='body2'
                sx={{frontSize:"18px",color:"#5A6473",my:4}}>
                    Immerse yourself inthe elegant ambience as you savor each bite.
            </Typography>
                <CustomButton 
                backgroundColor="#0F1B4C"
                color="#fff"
                buttonText="More About Us"
                welcomeBtn={true}/>
           </Box>

           <Box sx={{flex:"1.25"}}>
             <img 
             src={welcome}
             alt="welcome"
             style={{maxWidth:"100%",marginBottom:"2rem"}}/>
           </Box>
        </CustomBox>
        </Container>    
    </Box>
);
} ;
  


export default Welcome;
