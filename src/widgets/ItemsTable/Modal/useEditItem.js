import { useCallback } from "react";

export const useEditItem = () => {
  const addItem = (formData) => {
    console.log(formData);
  };
  const editItem = (editData) => {
    console.log(editData);
  };
  const DeleteItem = (deleteData) => {
    console.log(deleteData);
  };

  return { addItem, editItem, DeleteItem };
};
