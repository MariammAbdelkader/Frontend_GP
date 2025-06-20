import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  Tabs,
  Tab,
  Grid,
  Avatar,
  Paper,
} from "@mui/material";
import HomePageStyles from "./HomePageStyles";
import useHomePageContainer from "./HomePageContainer";
import { GlobalStyles } from "@mui/material";
import logo from "../../images/logo2.png";
import backgroundImage from "../../images/backgroundimage.png";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const {
    value,
    homeRef,
    whatWeDoRef,
    howItWorksRef,
    whoWeAreRef,
    handleTabChange,
    teamMembers,
    CardContent,
  } = useHomePageContainer();

  const navigate = useNavigate();

  return (
    <Box sx={HomePageStyles.bigBox}>
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
      {/* AppBar */}
      <AppBar position="static" sx={HomePageStyles.appBar}>
        <Toolbar sx={HomePageStyles.toolbar}>
          <Box sx={HomePageStyles.logoBox}>
            <img
              src={logo}
              alt="Shophoria Logo"
              style={HomePageStyles.logoImage}
            />
            <Typography variant="h5" sx={HomePageStyles.logoText}>
              Shophoria
            </Typography>
          </Box>

          <Tabs
            value={value}
            onChange={handleTabChange}
            sx={HomePageStyles.tabs}>
            <Tab label="Home" />
            <Tab label="What we do" />
            <Tab label="How it Works" />
            <Tab label="Who we are" />
          </Tabs>

          <Button
            variant="contained"
            onClick={() => navigate("/login")}
            sx={HomePageStyles.loginButton}>
            Login
          </Button>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        id="home"
        ref={homeRef}
        sx={HomePageStyles.heroSection(backgroundImage)}>
        <Box sx={HomePageStyles.heroContent}>
          <Typography variant="h3" sx={HomePageStyles.heroTitle}>
            Launch Your Online Store Instantly!
          </Typography>
          <Typography variant="h6" sx={HomePageStyles.heroSubtitle}>
            Create your online store easily with AI – start selling fast!
          </Typography>
          <Button
            variant="contained"
            sx={HomePageStyles.getStartedButton}
            onClick={() => navigate("/signup")}>
            Get Started
          </Button>
        </Box>
      </Box>

      {/* What We Do Section */}
      <Box id="whatwedo" ref={whatWeDoRef} sx={HomePageStyles.whatWeDoSection}>
        <Typography variant="h4" sx={HomePageStyles.whatWeDoTitle}>
          What We Do
        </Typography>
        <Typography variant="h6" sx={HomePageStyles.whatWeDoSubtitle}>
          We simplify website creation with AI automation.
        </Typography>

        <Grid container justifyContent="center" spacing={6} sx={{ mb: 6 }}>
          {[
            {
              title: "AI-Powered Automation",
              text: "Our AI builds your online store instantly, no coding required.",
            },
            {
              title: "Instant Deployment",
              text: "Launch your store in minutes and start selling right away.",
            },
            {
              title: "Easy Product Upload",
              text: "Upload a CSV file, and AI will list your products for you.",
            },
          ].map((item, idx) => (
            <Grid item key={idx}>
              <Box sx={HomePageStyles.whatWeDoCardWrapper}>
                <CardContent title={item.title} text={item.text} />
              </Box>
            </Grid>
          ))}
        </Grid>

        <Grid container justifyContent="center">
          <Grid item>
            <Box sx={HomePageStyles.whatWeDoCardWrapper}>
              <CardContent
                title="Smart AI Assistant"
                text="Our chatbot helps you manage your store."
              />
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* How It Works Section */}
      <Box
        id="howitworks"
        ref={howItWorksRef}
        sx={HomePageStyles.howItWorksSection}>
        <Typography variant="h4" sx={HomePageStyles.howItWorksTitle}>
          How It Works
        </Typography>
        <Typography variant="h6" sx={HomePageStyles.howItWorksSubtitle}>
          Create your online store step by step.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {[1, 2, 3, 4].map((step, idx) => {
            const content = [
              {
                title: "Create an Account",
                text: "Sign up and provide your business details.",
              },
              {
                title: "Upload CSV File",
                text: "Upload product data via a CSV file for processing.",
              },
              {
                title: "Admin Approval",
                text: "Admin reviews and approves your data before site creation.",
              },
              {
                title: "Website Creation",
                text: "Once approved, the system automatically builds your site.",
              },
            ][idx];

            return (
              <Grid key={idx} item xs={12} sm={6} md={4}>
                <Box sx={HomePageStyles.stepCard}>
                  <Box sx={HomePageStyles.stepCircle}>{step}</Box>
                  <Typography variant="subtitle1" sx={HomePageStyles.stepTitle}>
                    {content.title}
                  </Typography>
                  <Typography variant="body2" sx={HomePageStyles.stepText}>
                    {content.text}
                  </Typography>
                </Box>
              </Grid>
            );
          })}

          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            display="flex"
            justifyContent="center"
            alignItems="center">
            <Button
              variant="contained"
              sx={HomePageStyles.getStartedButtonCentered}
              onClick={() => navigate("/signup")}>
              Get Started
            </Button>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Box sx={HomePageStyles.stepCard}>
              <Box sx={HomePageStyles.stepCircle}>5</Box>
              <Typography variant="subtitle1" sx={HomePageStyles.stepTitle}>
                Manage & Update
              </Typography>
              <Typography variant="body2" sx={HomePageStyles.stepText}>
                Upload CSV files anytime to update your store.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* How It Works Section */}
      <Box
        id="howitworks"
        ref={howItWorksRef}
        sx={HomePageStyles.howItWorksSection}>
        {/* ... rest is unchanged */}
      </Box>

      {/* Who We Are */}
      <Box id="whoweare" ref={whoWeAreRef} sx={HomePageStyles.whoWeAreSection}>
        <Typography variant="h4" sx={HomePageStyles.whoWeAreTitle}>
          Who We Are
        </Typography>
        <Typography variant="h6" sx={HomePageStyles.whoWeAreSubtitle}>
          Meet the minds behind the mission.
        </Typography>

        <Grid container spacing={6} justifyContent="center">
          {teamMembers.map((member, idx) => (
            <Grid item key={idx} xs={12} sm={6} md={4}>
              <Box sx={HomePageStyles.teamCardContainer}>
                <Paper elevation={3} sx={HomePageStyles.teamCard}>
                  <Avatar
                    src={member.image}
                    alt={member.name}
                    sx={HomePageStyles.teamAvatar}
                  />
                  <Box sx={HomePageStyles.teamCardContent}>
                    <Typography variant="h6" sx={HomePageStyles.teamName}>
                      {member.name}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={HomePageStyles.teamRole}>
                      {member.role}
                    </Typography>
                    <Typography variant="body2" sx={HomePageStyles.teamInfo}>
                      {member.info}
                    </Typography>
                    <Typography variant="body2" sx={HomePageStyles.teamEmail}>
                      📧 {member.email}
                    </Typography>
                  </Box>
                </Paper>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Footer */}
      <Box sx={HomePageStyles.FooterContainer}>
        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="flex-start">
          <Grid item xs={12} md={3}>
            <Box sx={HomePageStyles.logoSection}>
              <img src={logo} alt="Logo" style={HomePageStyles.logoImage} />
              <Typography variant="h6" fontWeight="bold">
                Shophoria
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography sx={HomePageStyles.sectionTitle}>Explore</Typography>
            {["Home", "About", "Shop", "Contact"].map((item) => (
              <Typography key={item} variant="body2">
                {item}
              </Typography>
            ))}
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography sx={HomePageStyles.sectionTitle}>Support</Typography>
            {["FAQs", "Returns", "Privacy Policy", "Terms of Service"].map(
              (item) => (
                <Typography key={item} variant="body2">
                  {item}
                </Typography>
              )
            )}
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography sx={HomePageStyles.sectionTitle}>Follow Us</Typography>
            {["Facebook", "Twitter", "Instagram"].map((item) => (
              <Typography key={item} variant="body2">
                {item}
              </Typography>
            ))}
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography sx={HomePageStyles.sectionTitle}>
              Stay Updated
            </Typography>
            <Box display="flex" gap={1}>
              <input
                type="email"
                placeholder="Enter your email"
                style={HomePageStyles.emailInput}
              />
              <Button variant="contained" sx={HomePageStyles.subscribeButton}>
                Subscribe
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Box sx={HomePageStyles.footerBottom}>
          <Typography variant="body2">
            © 2024 Shophoria. All Rights Reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
