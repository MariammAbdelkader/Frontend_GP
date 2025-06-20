export const SignupStyles = {
  gridContainer: {
    minHeight: "100vh",
    backgroundColor: "#0D0259",
  },
  paperContainer: {
    width: "1100px",
    height: "600px",
    display: "flex",
    borderRadius: "10px",
    overflow: "hidden",
    backgroundColor: "#ffffff",
  },
  leftContainer: {
    flex: 1,
    backgroundColor: "#0D0259",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflowY: "auto",
  },
  leftImage: {
    width: "100%",
    height: "100%",
  },
  rightContainer: {
    flex: 1,
    padding: "40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  formScrollContainer: {
    overflowY: "auto",
    maxHeight: "400px",
    paddingRight: "10px",
    "&::-webkit-scrollbar": {
      width: "6px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#0D0259",
      borderRadius: "4px",
    },
    "&::-webkit-scrollbar-button:single-button": {
      display: "none",
      height: 0,
      width: 0,
    },
    scrollbarColor: "#0D0259 transparent",
    scrollbarWidth: "thin",
  },
  title: {
    color: "#0D0259",
    fontWeight: "bold",
    marginBottom: "30px",
    textAlign: "center",
  },
  input: {
    mt: "15px",
    "& .MuiOutlinedInput-root": {
      backgroundColor: "#f5f6ff",
      borderRadius: "8px",
    },
  },
  icon: {
    color: "#0D0259",
  },
  signUpButton: {
    backgroundColor: "#0D0259",
    color: "white",
    fontWeight: 500,
    borderRadius: "8px",
    height: "40px",
    mt: 2,
    "&:hover": {
      backgroundColor: "#4b4efc",
    },
  },
  eye: {
    color: "#0D0259 ",
    "&:hover": {
      backgroundColor: "rgba(106, 109, 255, 0.1)",
    },
  },
};
