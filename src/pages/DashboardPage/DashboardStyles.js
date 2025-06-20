const dashboardStyles = {
  global: {
    "*": { margin: 0, padding: 0, boxSizing: "border-box" },
    html: { height: "100%" },
    body: {
      height: "100%",
      // background: "linear-gradient(to bottom, #0D0259, #5B48D9)",
      backgroundColor: "#0D0259",
      fontFamily: "Arial, sans-serif",
    },
    "#root": { height: "100%" },
  },

  layout: {
    wrapper: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      color: "white",
    },
    topBar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      px: 3,
      py: 2,
      background: "transparent",
    },
    logoBox: {
      display: "flex",
      alignItems: "center",
      gap: 1,
    },
    body: {
      display: "flex",
      flex: 1,
    },
  },

  sidebar: {
    container: {
      width: 180,
      height: 600,
      mx: 3,
      mt: 1,
      // background: "linear-gradient(to bottom, #0D0259, #5B48D9)",
      backgroundColor: "#0D0259",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      p: 2,
      boxShadow: "0 5px 5px #00f0ff",
      border: "1px solid #00f0ff",
      borderRadius: 3,
    },
    button: {
      width: "100%",
      background: "linear-gradient(to top, #0D0259, #5B48D9)",
      borderRadius: 2,
      mt: 2,
      boxShadow: "0 1px 1px #00f0ff",
      border: "1px solid #00f0ff",
      "&:hover": {
        backgroundColor: "#4932c1",
      },
    },
  },

  mainContent: {
    container: {
      flex: 1,
      p: 4,
      mr: 3,
      display: "flex",
      flexDirection: "column",
      gap: 2,
      borderRadius: 4,
      height: 600,
      mt: 1,
      boxShadow: "0 5px 5px #00f0ff",
      border: "1px solid #00f0ff",
      backgroundColor: "#0D0259",
      // background: "linear-gradient(to bottom, #0D0259, #5B48D9)",
    },
    createButton: {
      width: "350px",
      background: "linear-gradient(to bottom,#5B48D9 , #0D0259)",
      boxShadow: "0 1px 1px #00f0ff",
      border: "1px solid #00f0ff",
      borderRadius: 3,
      px: 4,
      py: 1.5,
      fontSize: "1rem",
      "&:hover": {
        backgroundColor: "#4932c1",
      },
    },
  },

  formPaper: {
    display: "flex",
    gap: 4,
    p: 3,
    backgroundColor: "transparent",
    borderRadius: 3,
    boxShadow: "0 5px 5px #00f0ff",
    border: "1px solid #00f0ff",
    color: "white",
  },

  leftSection: { flex: 1, display: "flex", flexDirection: "column", gap: 2 },
  selectField: {
    color: "white",
    border: "1px solid white",
    boxShadow: "0 2px 4px #000",
  },
  uploadIcon: { fontSize: 40, opacity: 0.5, mb: 1 },
  uploadBox: {
    height: 200,
    border: "1px dashed white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 2,
    boxShadow: "0 2px 4px #000",
    color: "white",
    cursor: "pointer",
    position: "relative",
    overflow: "hidden",
    px: 2,
  },

  logoutButton: {
    backgroundColor: "#A40000",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#d10000",
    },
  },

  submitButton: {
    mt: "auto",
    alignSelf: "flex-end",
    background: "linear-gradient(to top, #0D0259, #5B48D9)",
    boxShadow: "0 1px 1px #00f0ff",
    border: "1px solid #00f0ff",
    borderRadius: 2,
    px: 4,
    "&:hover": {
      backgroundColor: "#4932c1",
    },
  },

  fieldStyles: {
    input: { color: "white" },
    "& .MuiOutlinedInput-root": {
      borderRadius: 2,
      boxShadow: "0 2px 4px #000",
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "#c3c3ff",
      },
    },
  },
};

export default dashboardStyles;
