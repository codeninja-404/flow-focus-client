import { Container, Typography } from "@mui/material";
import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
const Item = styled(Paper)(({ theme }) => ({
    background: 'linear-gradient(90deg, rgba(121,116,103,1) 0%, rgba(208,3,3,1) 100%)',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


const Peoples = () => {
    const userType = ["Students", "Developers", "Teachers" , "Bankers", "Emplooyer", "HR"]
  return (
    <Container maxWidth="xl" sx={{ opacity: "0.8", padding: "2px", margin: "60px auto", }} >
      <Typography pb={2} fontWeight="bold" variant="h4">People Are using</Typography>
      <hr />
      <Box mt={6} sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {userType.map((user, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item><Typography color='white' fontWeight="bold">{user}</Typography></Item>
          </Grid>
        ))}
      </Grid>
    </Box>
    </Container>
  );
};

export default Peoples;
