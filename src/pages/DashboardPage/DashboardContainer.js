import { useState } from "react";

const useDashboardContainer = () => {
  const [dashboardSelected, setDashboardSelected] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isCreated, setIsCreated] = useState(false);
  const [returnedIpAddress, setReturnedIpAddress] = useState("");

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

  const testServerConnection = async () => {
    try {
      const response = await fetch("http://localhost:4000", {
        method: "GET",
        mode: "cors",
        credentials: "omit",
      });
      console.log("Server is reachable, status:", response.status);
      return true;
    } catch (error) {
      console.error("Server connection test failed:", error);
      return false;
    }
  };

  const handleCreateNewWebsite = () => {
    setShowForm(true);
    setIsCreated(false);
    setReturnedIpAddress("");
    setFormData({
      firstName: "",
      lastName: "",
      gender: "",
      address: "",
      email: "",
      websiteName: "",
    });
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
    };

    console.log("Sending payload:", payload);
    console.log("Attempting to connect to: http://localhost:4000/website");
    setIsLoading(true);
    setIsCreated(false);
    setReturnedIpAddress("");

    try {
      // First, let's test if the server is reachable
      console.log("Testing server connectivity...");
      const serverReachable = await testServerConnection();
      
      if (!serverReachable) {
        throw new Error("Backend server is not reachable. Please ensure the server is running on http://localhost:4000");
      }
      
      const response = await fetch("http://localhost:4000/website", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(payload),
        mode: "cors",
        credentials: "omit",
      });

      console.log("Response received:", response);
      console.log("Response status:", response.status);
      console.log("Response headers:", response.headers);

      if (!response.ok) {
        const errorData = await response.text();
        console.error("Server error:", errorData);
        throw new Error(`Failed to create website: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Success response:", data);
      const ipAddress = data.instance_ip || 'N/A';
      setReturnedIpAddress(ipAddress);
      setIsCreated(true);
      alert(`Website created successfully! IP Address: ${ipAddress}`);
      setShowForm(false);
      setFormData({
        firstName: "",
        lastName: "",
        gender: "",
        address: "",
        email: "",
        websiteName: "",
      });
    } catch (error) {
      console.error("Network error details:", error);
      console.error("Error name:", error.name);
      console.error("Error message:", error.message);
      
      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        alert("Network error: Please check if the backend server is running on http://localhost:4000");
      } else {
        alert(`There was an error submitting the form: ${error.message}`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
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
  };
};

export default useDashboardContainer;
