import { Outlet } from "react-router-dom";
import "./App.css";
import AppRoutes from "./AppRoutes";

export default function App() {
  return (
    <>
      <div className="App" role="main">
        <AppRoutes></AppRoutes>
        <Outlet />
      </div>
    </>
  );
}
