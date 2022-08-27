import React from "react";
import ReactDOM from "react-dom/client";
// import { TestEv } from "./components/TestEv";
import { GiftExpertApp } from "./GiftExpertApp";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GiftExpertApp />
    {/* <TestEv /> */}
  </React.StrictMode>
);
