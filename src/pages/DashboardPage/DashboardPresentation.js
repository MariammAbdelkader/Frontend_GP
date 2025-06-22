import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Typography,
  TextField,
  MenuItem,
  InputLabel,
  Select,
  FormControl,
  Paper,
  GlobalStyles,
  CircularProgress,
} from "@mui/material";
import logo from "../../images/logo2.png";
import dashboardStyles from "./DashboardStyles";
import useDashboardContainer from "./DashboardContainer";

const DashboardPage = () => {
  const {
    dashboardSelected,
    setDashboardSelected,
    showForm,
    setShowForm,
    formData,
    handleChange,
    handleSubmit,
    isLoading,
    isCreated,
    returnedIpAddress,
    handleCreateNewWebsite,
  } = useDashboardContainer();

  const navigate = useNavigate();

  return (
    <>
      <GlobalStyles styles={dashboardStyles.global} />
      <Box sx={dashboardStyles.layout.wrapper}>
        <Box sx={dashboardStyles.layout.topBar}>
          <Box sx={dashboardStyles.layout.logoBox}>
            <img src={logo} alt="logo" style={{ width: 70, height: 50 }} />
            <Typography variant="h5" fontWeight="bold">
              Shophoria
            </Typography>
          </Box>
          <Button
            sx={dashboardStyles.logoutButton}
            variant="contained"
            onClick={() => {
              navigate("/home");
            }}>
            LogOut
          </Button>
        </Box>

        <Box sx={dashboardStyles.layout.body}>
          <Box sx={dashboardStyles.sidebar.container}>
            <Button
              variant="contained"
              sx={dashboardStyles.sidebar.button}
              onClick={() => {
                setDashboardSelected(true);
                setShowForm(false);
              }}>
              Dashboard
            </Button>
          </Box>

          {dashboardSelected && (
            <Box sx={dashboardStyles.mainContent.container}>
              {!showForm && (
                <Box sx={{ textAlign: 'center' }}>
                  <Button
                    sx={dashboardStyles.mainContent.createButton}
                    variant="contained"
                    onClick={handleCreateNewWebsite}>
                    Create your own website
                  </Button>
                  
                  {isCreated && returnedIpAddress && (
                    <Box sx={{ mt: 3, p: 3, bgcolor: 'success.light', borderRadius: 2, maxWidth: 400, mx: 'auto' }}>
                      <Typography variant="h5" color="white" fontWeight="bold" gutterBottom>
                        Website Created Successfully! 🎉
                      </Typography>
                      <Typography variant="h6" color="white" sx={{ mb: 2 }}>
                        IP Address: {returnedIpAddress}
                      </Typography>
                      <Button
                        variant="contained"
                        sx={{
                          bgcolor: 'white',
                          color: 'success.main',
                          '&:hover': {
                            bgcolor: 'grey.100',
                          },
                        }}
                        onClick={handleCreateNewWebsite}>
                        Create Another Website
                      </Button>
                    </Box>
                  )}
                </Box>
              )}

              {showForm && (
                <Paper sx={dashboardStyles.formPaper}>
                  <Box sx={dashboardStyles.leftSection}>
                    <Typography fontWeight="bold">
                      Personal information
                    </Typography>
                    <LabeledField
                      label="First Name:"
                      placeholder="First name...."
                      value={formData.firstName}
                      onChange={handleChange("firstName")}
                    />
                    <LabeledField
                      label="Last Name:"
                      placeholder="Last name...."
                      value={formData.lastName}
                      onChange={handleChange("lastName")}
                    />
                    <FormControl fullWidth sx={dashboardStyles.fieldStyles}>
                      <InputLabel sx={{ color: "white" }}>Select</InputLabel>
                      <Select
                        value={formData.gender}
                        onChange={handleChange("gender")}
                        label="Gender"
                        sx={dashboardStyles.selectField}>
                        <MenuItem value="male">Male</MenuItem>
                        <MenuItem value="female">Female</MenuItem>
                      </Select>
                    </FormControl>
                    <LabeledField
                      label="Address:"
                      placeholder="Please enter your address...."
                      value={formData.address}
                      onChange={handleChange("address")}
                    />
                    <LabeledField
                      label="Email:"
                      placeholder="Email......."
                      value={formData.email}
                      onChange={handleChange("email")}
                    />
                  </Box>

                  <Box sx={dashboardStyles.leftSection}>
                    <Typography fontWeight="bold">
                      Website Information
                    </Typography>
                    <LabeledField
                      label="Website Name:"
                      placeholder="website name...."
                      value={formData.websiteName}
                      onChange={handleChange("websiteName")}
                    />
                    
                    <Button
                      sx={{
                        ...dashboardStyles.submitButton,
                        ...(isCreated && {
                          bgcolor: 'success.main',
                          '&:hover': {
                            bgcolor: 'success.dark',
                          },
                        }),
                      }}
                      variant="contained"
                      onClick={handleSubmit}
                      disabled={isLoading || isCreated}>
                      {isLoading ? (
                        <>
                          <CircularProgress size={20} sx={{ color: 'white', mr: 1 }} />
                          Creating...
                        </>
                      ) : isCreated ? (
                        'Created ✓'
                      ) : (
                        'Create'
                      )}
                    </Button>
                  </Box>
                </Paper>
              )}
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

const LabeledField = ({ label, placeholder, value, onChange }) => (
  <Box>
    <Typography sx={{ mb: 0.5 }}>{label}</Typography>
    <TextField
      fullWidth
      placeholder={placeholder}
      variant="outlined"
      value={value}
      onChange={onChange}
      sx={dashboardStyles.fieldStyles}
      InputProps={{
        style: { color: "white" },
      }}
    />
  </Box>
);

export default DashboardPage;
