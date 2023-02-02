import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ClickCounter from "./Components/ClickCounter";
import ColorList from "./Components/ColorList";
import Parent from "./Components/Parent";
import ChildComponents from "./Components/ChildComponents";
import ComponentOne from "./Components/ComponentOne";
import ComponentTwo from "./Components/ComponentTwo";
import Images from "./Components/Images";
import Tooglemg from "./Components/Tooglemg";
import Nav from "./Components/Nav";
import Dashboard from "./CRUD/Dashboard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <ClickCounter myName="shubham chavan"/> */}
    {/* <ColorList/> */}
    {/* <Parent/> */}
    {/* <ChildComponents/> */}
    {/* <ComponentOne></ComponentOne> */}
    {/* <Images></Images> */}
   {/* <Tooglemg/> */}
   {/* <Nav></Nav> */}
   <Dashboard></Dashboard>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();