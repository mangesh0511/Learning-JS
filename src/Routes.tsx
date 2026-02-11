import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import All from "./Components/All";
import Files from "./Components/Files";
import Hero from "./Components/hero";
import Nav from "./Components/Nav";
import SideBar from "./Components/sideBar";

//hello world

function AppRoutes() {
    return (
        <BrowserRouter>
            <SideBar />
            <Nav />
            <Hero />
            <Routes>
                <Route index element={<App />} />
                <Route path="All" element={<All />} />
                <Route path="Files" element={<Files />} />
            </Routes>
        </BrowserRouter>

    )
}
export default AppRoutes;