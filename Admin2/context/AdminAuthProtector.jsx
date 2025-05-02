import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import {useNavigate } from "react-router-dom";

export default function AdminAuthProtector({ children }) {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("aToken");
    if (!token) {
      navigate("/admin/login", { replace: true });
      return;
    }

    try {
      const decodedToken = jwtDecode(token);
      const now = Date.now() / 1000;

      if (decodedToken.exp < now) {
        navigate("/admin/login", { replace: true });
        localStorage.removeItem("aToken");

      }
    } catch (error) {
      navigate("/admin/login", { replace: true });
      console.log("Invalid token:", error);
      localStorage.removeItem("aToken");
    }
  }, []);

  return children;
}
