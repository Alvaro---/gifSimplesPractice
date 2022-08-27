import { useState } from "react";
import PropTypes from "prop-types";

// export const AddCategory = ({ setCategories }) => {
export const AddCategory = ({ onAddCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onChangeInput = ({ target }) => {
    // console.log(target);
    // console.log(target.value);
    setInputValue(target.value);
  };

  //   const onSubmit = (e) => {
  //     e.preventDefault();
  //     // console.log(e);
  //     if (inputValue.trim().length <= 1) return; // Si es menor que uno se sale de la funcion
  //     setCategories((categories) => [inputValue, ...categories]);
  //     setInputValue("");
  //   };

  const onSubmit = (e) => {
    // console.log("Hola mundo para el test");
    e.preventDefault();
    // console.log(e);
    if (inputValue.trim().length <= 1) return; // Si es menor que uno se sale de la funcion
    onAddCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    // <form onSubmit={(event) => onSubmit(event)}> //Si el mismo argumento se envia, puede quitarse.
    <form onSubmit={onSubmit} aria-label="form">
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        // onChange={(e) => setInputValue(e.target.value)}

        // onChange={({ target }) => {
        //   //   console.log(target);
        //   console.log(target.value);
        //   setInputValue(target.value);
        // }}

        onChange={onChangeInput}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onAddCategory: PropTypes.func.isRequired,
};
