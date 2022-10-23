import { useCallback, useState } from "react";
import axios from "../../axios";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const login = useCallback((values) => {
    if (!values.username) {
      alert("username oruulna uu");
      return;
    }
    if (!values.password) {
      alert("password oruulna uu");
      return;
    }
    setLoading(true);
    axios
      .post("/auth/login", {
        username: values.username,
        password: values.password,
      })
      .then(({ data }) => {
        if (data.success) {
          localStorage.setItem("token", data.result);
          navigate("/home", { replace: true });
        } else {
          alert(data.result);
        }
      })
      .catch((e) => {
        setLoading(false);
      })
      .finally(() => setLoading(false));
  }, []);

  const register = useCallback(async (values) => {
    const username = values.target.username.value;
    const password = values.target.password.value;
    if (!username) {
      alert("username oruulna uu");
      return;
    }
    if (!password) {
      alert("password oruulna uu");
      return;
    }
    setLoading(true);
    await axios
      .post("/register", {
        username: username,
        password: password,
      })
      .then(({ res }) => {
        if (res.success) {
          alert("Success");
          setLoading(false);
        } else {
          alert("Failure");
        }
      })
      .catch((err) => {
        alert(err.message);
        setLoading(false);
      })
      .finally(() => setLoading(false));
  }, []);

  return { login, register, loading };
};
