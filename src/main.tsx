import {StrictMode} from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.scss";

const rootEl = window.document.querySelector("#root"); 
const root = ReactDOM.createRoot(rootEl as HTMLElement);

root.render(
<StrictMode>
  <App />
</StrictMode>);
