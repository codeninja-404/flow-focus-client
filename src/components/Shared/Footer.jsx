import { Box, Container, Stack, Typography, styled } from "@mui/material";
import logo from "../../assets/Logo.png";
import { Facebook, Instagram, Twitter } from "@mui/icons-material/";
const SocialBox = styled(Box)({
  display: "flex",
  gap: 10,
  color: "white",
});
const Footer = () => {
    return (
        <Box sx={{ background: "black", height: "300px"}}>
       <Container maxWidth="xl">
       <Stack direction={{ xs: "coloumn", md: "row" }} p={7} >
          <Box sx={{display:"flex", flexDirection:"column",   }} flex={1}>
          <Box
              component="img"
              sx={{ height: 35 ,margin:"0 auto" }}
              alt="Logo"
              src={logo}
            ></Box>
            <Typography color={"white"} align={"center"}>
              All Rights Reserved By Saidul Arefin
            </Typography>
            
          </Box>
          <Box flex={1}>
            <Typography color={"white"} align={"center"}>
              Data policy
            </Typography>
            <Typography color={"white"} align={"center"}>
              cookies
            </Typography>
            <Typography color={"white"} align={"center"}>
              Data Safety
            </Typography>
          </Box>
          
          <Box flex={1}>
            <Typography color={"white"} align={"center"}>
              Follow Us
            </Typography>
            <SocialBox pt={4} sx={{display:"flex", justifyContent:'space-evenly' ,  }}>
              <Facebook />
              <Instagram />
              <Twitter />
            </SocialBox>
          </Box>
        </Stack>
       </Container>
      </Box>
    );
};

export default Footer;