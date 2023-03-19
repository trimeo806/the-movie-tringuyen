import { React } from "react";
import useAuth from "../hooks/useAuth";
import { Controller } from "react-hook-form";
import { Alert, Grid, Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import * as yup from "yup";

const schema = yup
  .object({
    user: yup.string().required(),
  })
  .required();

function LoginPage() {
  const location = useLocation();
  // console.log(location);
  const navigate = useNavigate();
  const auth = useAuth();
  const defaultValues = { ...auth };
  const methods = useForm({ resolver: yupResolver(schema), defaultValues });
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = methods;

  const onSubmit = (data) => {
    // console.log(data);
    auth.login(data.user, () => {
      navigate(location.state?.from?.pathname || "/", {
        state: { from: location, name: location.state.name },
      });
    });
    localStorage.setItem("key", "value");
  };

  return (
    <Box>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={0}
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "500px",
          m: "auto",
          p: "10px",
        }}
      >
        {!!errors.afterSubmit && (
          <Alert severity="error">{errors.afterSubmit.message}</Alert>
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            margin="auto"
          >
            ;
            <Grid
              item
              margin="10px"
              alignSelf={{ xs: "center", md: "" }}
              display="flex"
              xs={10}
            >
              {" "}
              <Controller
                // name nayf phai identical voi may cai tren thi moi controll duoc
                name="user"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    fullWidth={true}
                    error={!!error}
                    label="Username"
                    helperText={error?.message}
                    sx={{ minWidth: "200px" }}
                  />
                )}
              />
            </Grid>
            <Grid
              item
              margin="10px"
              alignSelf={{ xs: "center", md: "flex-start" }}
              display="flex"
              xs={10}
            >
              <Button
                title="Submit"
                onClick={handleSubmit(onSubmit)}
                sx={{
                  minWidth: "100%",
                  bgcolor: "red",
                  color: "white",
                }}
              >
                Sign In
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Box>
  );
}
export default LoginPage;
