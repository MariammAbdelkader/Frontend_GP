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
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import logo from "../../images/logo2.png";
import dashboardStyles from "./DashboardStyles";
import useDashboardContainer from "./DashboardContainer";

const DashboardPage = () => {
  const {
    dashboardSelected,
    setDashboardSelected,
    showForm,
    setShowForm,
    logoupdate,
    handleLogoUpload,
    formData,
    handleChange,
    handleSubmit,
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
                <Button
                  sx={dashboardStyles.mainContent.createButton}
                  variant="contained"
                  onClick={() => setShowForm(true)}>
                  Create your own website
                </Button>
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
                    <Box
                      sx={dashboardStyles.uploadBox}
                      onClick={() =>
                        document.getElementById("logo-upload").click()
                      }>
                      {logoupdate ? (
                        <img
                          src={logoupdate}
                          alt="Uploaded Logo"
                          style={{
                            maxHeight: "100%",
                            maxWidth: "100%",
                            objectFit: "contain",
                          }}
                        />
                      ) : (
                        <Box sx={{ textAlign: "center" }}>
                          <CloudUploadIcon sx={dashboardStyles.uploadIcon} />
                          <Typography sx={{ opacity: 0.5 }}>
                            Upload Logo Here
                          </Typography>
                        </Box>
                      )}
                      <input
                        id="logo-upload"
                        type="file"
                        accept="image/*"
                        style={{ display: "none" }}
                        onChange={handleLogoUpload}
                      />
                    </Box>
                    <Button
                      sx={dashboardStyles.submitButton}
                      variant="contained"
                      onClick={handleSubmit}>
                      Create
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
