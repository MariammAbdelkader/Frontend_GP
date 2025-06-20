import { useState } from "react";

const useDashboardContainer = () => {
  const [dashboardSelected, setDashboardSelected] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [logoupdate, setLogoupdate] = useState(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    address: "",
    email: "",
    websiteName: "",
  });

  const handleChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoupdate(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    const { firstName, lastName, gender, address, email, websiteName } =
      formData;

    if (
      !firstName ||
      !lastName ||
      !gender ||
      !address ||
      !email ||
      !websiteName
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    const payload = {
      ...formData,
      logo: logoupdate || null,
    };

    try {
      const response = await fetch("/api/create-website", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Failed to create website");

      alert("Website created successfully!");
      setShowForm(false);
      setFormData({
        firstName: "",
        lastName: "",
        gender: "",
        address: "",
        email: "",
        websiteName: "",
      });
      setLogoupdate(null);
    } catch (error) {
      console.error(error);
      alert("There was an error submitting the form.");
    }
  };

  return {
    dashboardSelected,
    setDashboardSelected,
    showForm,
    setShowForm,
    logoupdate,
    handleLogoUpload,
    formData,
    handleChange,
    handleSubmit,
  };
};

export default useDashboardContainer;
