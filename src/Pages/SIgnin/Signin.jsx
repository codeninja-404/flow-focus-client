import { useForm, Controller } from "react-hook-form";

import { Link } from "react-router-dom";
import {
  TextField,
  Button,
  Typography,
  Container,
  CssBaseline,
  Grid,
} from "@mui/material";

import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const { handleSubmit, control } = useForm();
  const { signInUser, signInGoogle, signInFacebook } = useAuth();

  const onSubmit = (data) => {
    signInUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleGoogle = () => {
    signInGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleFacebook = () => {
    signInFacebook()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Container sx={{ margin: "200px auto" }} maxWidth="xs">
        <CssBaseline />
        <div className="mt-8">
          <Typography
            component="h1"
            variant="h4"
            sx={{ fontWeight: "700", color: "black" }}
            textAlign="center"
            textTransform="uppercase"
          >
            Sign in
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Email Address"
                      variant="outlined"
                      fullWidth
                      required
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="password"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Password"
                      type="password"
                      variant="outlined"
                      fullWidth
                      required
                    />
                  )}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              sx={{ marginTop: "20px" }}
            >
              Sign In
            </Button>

            <Button
              onClick={handleGoogle}
              fullWidth
              variant="outlined"
              color="primary"
              sx={{ marginTop: "20px" }}
            >
              Sign In With Google
            </Button>
            <Button
              onClick={handleFacebook}
              fullWidth
              variant="outlined"
              color="warning"
              sx={{ marginTop: "20px" }}
            >
              Sign In With FaceBook
            </Button>
            <Grid py={2}  container rowSpacing={1} columnSpacing={1}>
              <Grid py={1} xs={6}>
                <Typography textAlign="center">New here?</Typography>
              </Grid>
              <Grid xs={6}>
               <Typography textAlign='center'>
               <Button variant="contained" color="primary">
               <Link style={{textDecoration: "none", color:'white' }} textTransform="uppercase" to="/signup">
                  Sign up
                </Link>
               </Button>
               </Typography>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Login;
