import Page1 from "./components/navigation/Page1";
import Page2 from "./components/navigation/Page2";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home.js";
import Navigation from "./components/navigation/Navigation.js";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Page1></Page1>}></Route>
        <Route path="/page2" element={<Page2></Page2>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
