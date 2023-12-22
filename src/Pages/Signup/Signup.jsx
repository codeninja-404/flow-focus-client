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

import { updateProfile } from "firebase/auth";

import useAuth from "../../Hooks/useAuth";

const Signup = () => {
  const { handleSubmit, control } = useForm();
  const { createUser, auth } = useAuth;

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        if (result.user) {
          updateProfile(auth.currentUser, {
            displayName: data.Name,
            photoURL: data.photo,
          })
            .then(() => {
              console.log(result.user);
            })
            .catch((error) => {
              console.log(error.message);
            });
        }
      })
      .catch((error) => {
        console.log(error.message);
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
            sx={{ fontWeight: "700", color:"black" }}
            textAlign="center"
            textTransform="uppercase"
          >
            Sign up
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Controller
                  name="Name"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Name"
                      variant="outlined"
                      fullWidth
                      required
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="photo"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Photo URL"
                      variant="outlined"
                      fullWidth
                      required
                    />
                  )}
                />
              </Grid>
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
              Sign Up
            </Button>
            <Grid py={2} container rowSpacing={1} columnSpacing={1}>
              <Grid py={1} xs={6}>
                <Typography textAlign="center">
                  Already have an account?
                </Typography>
              </Grid>
              <Grid xs={6}>
                <Typography textAlign="end">
                  <Button variant="contained" color="primary">
                    <Link
                      style={{ textDecoration: "none", color: "white" }}
                      textTransform="uppercase"
                      to="/signin"
                    >
                      Sign IN
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

export default Signup;
