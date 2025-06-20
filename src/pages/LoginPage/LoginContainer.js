import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, verifyCodeAPI } from "./LoginServices";

const LoginContainer = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [verificationCode, setVerificationCode] = useState("      ");

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const validateForm = () => {
    let tempErrors = {};

    if (!email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = "Invalid email format";
    }

    if (!password.trim()) {
      tempErrors.password = "Password is required";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleLogin = async () => {
    if (!validateForm()) return;

    setLoading(true);
    const response = await loginUser({ email, password });

    if (response.success) {
      setLoginSuccess(true);
    } else {
      setErrors((prev) => ({
        ...prev,
        apiError: response.data?.message || response.error,
      }));
    }
    setLoading(false);
  };

  const handleCodeVerification = async () => {
    setLoading(true);
    const response = await verifyCodeAPI({ email, code: verificationCode });

    if (response.success) {
      navigate("/dashboard");
    } else {
      setErrors((prev) => ({
        ...prev,
        apiError: "Invalid verification code",
      }));
    }

    setLoading(false);
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

  return {
    showPassword,
    handleTogglePassword,
    email,
    setEmail,
    password,
    setPassword,
    errors,
    handleLogin,
    handleSignUp,
    loading,
    loginSuccess,
    verificationCode,
    setVerificationCode,
    handleCodeVerification,
  };
};

export default LoginContainer;
