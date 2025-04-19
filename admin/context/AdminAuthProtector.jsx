import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export default function AdminAuthProtector({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("aToken");

    if (!token) {
      navigate("/admin/login");
      return;
    }

    try {
      const decodedToken = jwtDecode(token);
      const now = Date.now() / 1000;

      if (decodedToken.exp < now) {
        localStorage.removeItem("aToken");
        navigate("/admin/login");
      }
    } catch (error) {
      console.log("Invalid token:", error);
      localStorage.removeItem("aToken");
      navigate("/admin/login");
    }
  }, [navigate]);

  return children;
}
