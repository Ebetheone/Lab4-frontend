import { useCallback, useState } from "react";
import axios from "../../../axios";

export const useEditUser = () => {
  const [loading, setLoading] = useState(false);
  const addUser = useCallback((values) => {
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
      .post("/auth/register", {
        username: values.username,
        password: values.password,
      })
      .then(({ data }) => {
        if (data.success) {
          setLoading(false);
        } else {
          alert(data.result);
        }
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      })
      .finally(() => setLoading(false));
  }, []);
  const editUser = useCallback(async (values) => {
    console.log(values);
    await axios
      .post("/user/edit", {
        id: values._id,
        password: values.password,
      })
      .then(({ data }) => {
        if (data.success) {
          console.log(data.success);
        } else {
          alert(data.result);
        }
      })
      .catch((err) => {
        alert(err.message);
        setLoading(false);
      })
      .finally(() => setLoading(false));
  }, []);

  const DeleteUser = useCallback((id) => {
    axios
      .post("/user/delete", {
        userId: id,
      })
      .then(({ data }) => {
        if (data.success) {
          console.log(data.success);
        } else {
          alert(data.result);
        }
      })
      .catch((err) => {
        alert(err.message);
        setLoading(false);
      })
      .finally(() => setLoading(false));
  }, []);

  return { addUser, editUser, DeleteUser };
};
