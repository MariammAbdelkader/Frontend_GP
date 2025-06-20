import React from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  Paper,
  InputAdornment,
  IconButton,
  CircularProgress,
} from "@mui/material";
import {
  Person,
  Email,
  Lock,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import SignupContainer from "./SignupContainer";
import { SignupStyles } from "./SignupStyles";
import { GlobalStyles } from "@mui/material";

const SignUpPage = () => {
  const {
    showPassword,
    showConfirmPassword,
    setShowPassword,
    setShowConfirmPassword,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    errors,
    handleSignup,
    handleSignIn,
    loading,
  } = SignupContainer();

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={SignupStyles.gridContainer}>
      <Paper elevation={3} sx={SignupStyles.paperContainer}>
        <GlobalStyles
          styles={{
            "html, body, #root": {
              margin: 0,
              padding: 0,
              height: "100%",
              width: "100%",
              backgroundColor: "#0D0259",
              overflowX: "hidden",
            },
          }}
        />
        {/* Left Container with Illustration */}
        <Box sx={SignupStyles.leftContainer}>
          <img
            src="/images/Login.png"
            alt="signup"
            style={SignupStyles.leftImage}
          />
        </Box>

        {/* Right Container - Sign Up Form */}
        <Box sx={SignupStyles.rightContainer}>
          <Typography variant="h4" sx={SignupStyles.title}>
            Create an Account
          </Typography>

          <Box sx={SignupStyles.formScrollContainer}>
            {/* First Name */}
            <TextField
              fullWidth
              placeholder="First Name"
              label="First Name"
              variant="outlined"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              error={!!errors.firstName}
              helperText={errors.firstName}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person sx={SignupStyles.icon} />
                  </InputAdornment>
                ),
              }}
              sx={SignupStyles.input}
            />

            {/* Last Name */}
            <TextField
              fullWidth
              placeholder="Last Name"
              label="Last Name"
              variant="outlined"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              error={!!errors.lastName}
              helperText={errors.lastName}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person sx={SignupStyles.icon} />
                  </InputAdornment>
                ),
              }}
              sx={SignupStyles.input}
            />

            {/* Email */}
            <TextField
              fullWidth
              placeholder="Email Address"
              label="Email Address"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!!errors.email}
              helperText={errors.email}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email sx={SignupStyles.icon} />
                  </InputAdornment>
                ),
              }}
              sx={SignupStyles.input}
            />

            {/* Password */}
            <TextField
              fullWidth
              placeholder="Password"
              label="Password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={!!errors.password}
              helperText={errors.password}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock sx={SignupStyles.icon} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      sx={SignupStyles.eye}>
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={SignupStyles.input}
            />

            {/* Confirm Password */}
            <TextField
              fullWidth
              placeholder="Confirm Password"
              label="Confirm Password"
              type={showConfirmPassword ? "text" : "password"}
              variant="outlined"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock sx={SignupStyles.icon} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      sx={SignupStyles.eye}>
                      {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={SignupStyles.input}
            />

            {/* Error Message */}
            {errors.apiError && (
              <Typography color="error" sx={{ mt: 1, mb: 1 }}>
                {errors.apiError}
              </Typography>
            )}
          </Box>

          {/* Sign Up Button */}
          <Button
            fullWidth
            onClick={handleSignup}
            disabled={loading}
            sx={SignupStyles.signUpButton}>
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "SIGN UP"
            )}
          </Button>

          <Typography variant="body2" mt={2} align="center">
            Already have an account?{" "}
            <span
              style={{
                cursor: "pointer",
                color: "#6a6dff",
                fontWeight: "bold",
              }}
              onClick={handleSignIn}>
              Sign In
            </span>
          </Typography>
        </Box>
      </Paper>
    </Grid>
  );
};

export default SignUpPage;
