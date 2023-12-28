import Header from "../component/Header";
import Navbar from "../component/Navbar";
import {Outlet} from "react-router-dom";
import Footer from "../component/Footer";

export function Home(){
    return (
        <>
            <Header/>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    )
}