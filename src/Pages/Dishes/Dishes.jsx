import React from 'react'
import CustomCard from '../../components/CustomCard/CustomCard'
import {Box,Typography,Container,styled} from "@mui/material";
import {Data} from "../../StaticData/Data";
const Dishes=()=> {
  const DishesBox = styled(Box)(({theme})=>({
    display:'flex',
    justifyContent:'space-between',
    gap:theme.spacing(5),
    [theme.breakpoints.down("sm")]:{
      flexDirection:'column',
      alignItems:'center',
      
    },
  })); 
  const PropertiesTextBox = styled(Box)(({theme})=>({
    [theme.breakpoints.down("sm")]:{
      textAlign:'center',
    }
  }));
  return (
    <Box sx={{mt:5,backgraoundColor:"#FED801",py:10}}>
     <Container>
        <PropertiesTextBox>
            <Typography sx= {{color:"#000339",
            fontSize:"35px", 
            fontWeight:"bold",
            ml:"13px"}}>
                 featured dishes
            </Typography>
            <Typography sx={{
                color:"#5A6473",
                fontSize:"16px",
                mt:1,
                ml:"13px",
            }}>
              Explore variety of South Indian Dishes!
            </Typography>
        </PropertiesTextBox>
        <DishesBox>
        {Data.map((foodItem)=>(
           <CustomCard
           Key={foodItem.id}
           img={foodItem.img}
           price={foodItem.price}
           item={foodItem.item}
           likes={foodItem.likes}
           heart={foodItem.heart}
           share={foodItem.share}/>
        ))}

        </DishesBox>
     </Container>
    </Box>
  );
};

export default Dishes
