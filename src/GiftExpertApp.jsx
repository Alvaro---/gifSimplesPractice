import { useState } from "react";
// import { AddCategory } from "./components/AddCategory";
// import { GiftGrid } from "./components/GiftGrid";
import { AddCategory, GiftGrid } from "./components";

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newValue) => {
    // console.log(value);
    if (categories.includes(newValue)) return; // Se puede usar toLowerCase, etc
    setCategories([newValue, ...categories]);
  };

  //   console.log(categories);
  return (
    <>
      {/* Titulo */}
      <h1>GiftExpertApp</h1>

      {/* input */}
      {/* <AddCategory setCategories={setCategories} /> */}
      {/* <AddCategory onAddCategory={(event) => onAddCategory(event)} /> */}
      <AddCategory onAddCategory={onAddCategory} />

      {/* <button onClick={() => onAddCategory()}>Agregar</button> */}
      {/* <button onClick={onAddCategory}>Agregar</button> */}

      {/* Listado de Gifs */}
      <ol>
        {categories.map((category, i) => (
          //   return <li key={i}>{category}</li>; //Es mejor no usar i
          <GiftGrid category={category} key={category} />
        ))}
      </ol>
      {/* Gift Item */}
    </>
  );
};
