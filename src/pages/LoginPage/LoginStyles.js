export const loginStyles = {
  gridContainer: {
    minHeight: "100vh",
    backgroundColor: "#0D0259",
  },
  title: {
    color: "#0D0259",
    fontWeight: "bold",
    marginBottom: "25px",
  },
  paperContainer: {
    width: "1100px",
    height: "600px",
    display: "flex",
    borderRadius: "10px",
    overflow: "hidden",
    backgroundColor: "#0D0259",
  },
  leftContainer: {
    flex: 1,
    padding: "40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "#ffffff",
  },
  forgotPassword: {
    fontSize: "14px",
    color: "#6a6dff",
    alignSelf: "flex-end",
    cursor: "pointer",
    mb: 3,
  },
  InputField: {
    mb: 2,
    "& .MuiOutlinedInput-root": {
      backgroundColor: "#f5f6ff",
      borderRadius: 2,
      "& fieldset": {
        borderColor: "#0D0259",
      },
      "&:hover fieldset": {
        borderColor: "#0D0259",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#0D0259",
        boxShadow: "0 0 0 2px rgba(106, 109, 255, 0.2)",
      },
    },
  },
  fieldTitle: { width: "100%", mb: 0.5, color: "#0D0259" },
  eye: {
    color: "#0D0259 ",
    "&:hover": {
      backgroundColor: "rgba(106, 109, 255, 0.1)",
    },
  },
  loginButton: {
    backgroundColor: "#0D0259",
    color: "#fff",
    fontFamily: "'Caveat', cursive",
    fontSize: "22px",
    textTransform: "none",
    borderRadius: "50px",
    height: "45px",
    "&:hover": {
      backgroundColor: "#4b4efc",
    },
  },
  rightContainer: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  rightImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  verificationCodeButton: {
    backgroundColor: "#FFE89F",
    color: "#000",
    fontWeight: "bold",
    borderRadius: "20px",
    padding: "10px 0",
    "&:hover": {
      backgroundColor: "#ffdb70",
    },
  },
};
