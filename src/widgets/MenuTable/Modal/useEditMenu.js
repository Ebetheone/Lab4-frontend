import React from "react";

export const useEditMenu = () => {
  const addMenu = (formData) => {
    console.log(formData);
  };
  const editMenu = (editData) => {
    console.log(editData);
  };

  return { addMenu, editMenu };
};
