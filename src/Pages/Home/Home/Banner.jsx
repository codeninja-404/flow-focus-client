import { Box, Button, Typography } from "@mui/material";
import HeroImage from "../../../assets/hero.jpg";
const Banner = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${HeroImage})`,
        backgroundRepeat: "no-repeat",
        backgroundColor: "black",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: 500,
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", sm: "100%", md: "100%" },
          height: { xs: "70%", sm: "70%", md: "70%" },
          margin: { xs: 5, sm: 10, md: 20 },
        }}
      >
        <Box sx={{ background: "black", opacity: "0.8", padding: "5px" }}>
          <Typography variant={"h5"} color="white" align="center" pt={8}>
            FlowFocus revolutionizes task management, offering an intuitive
            platform for seamless collaboration, dynamic prioritization, and
            enhanced productivity. Elevate your workflow with streamlined
            efficiency and effective project execution.
          </Typography>

          <Typography variant="body1" align="center" p={5}>
            <Button variant="contained" color="secondary">
              Let's Explore
            </Button>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;