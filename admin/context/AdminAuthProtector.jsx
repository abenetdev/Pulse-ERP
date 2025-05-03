import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export default function AdminAuthProtector({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("aToken");
    if (!token) return navigate("/admin/login");

    try {
      const { exp } = jwtDecode(token);
      const now = Date.now() / 1000;

      if (exp < now) {
        localStorage.removeItem("aToken");
        navigate("/admin/login");
      }
    } catch (error) {
      console.error("Invalid token:", error);
      localStorage.removeItem("aToken");
      navigate("/admin/login");
    }
  }, [navigate]);

  return children;
}
