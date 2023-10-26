import { Header } from "components/Header";
import { Footer } from "components/Footer";
import Home from "pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "routes.css";
import New from "pages/New";
import Edit from "pages/Edit";
import Insights from "pages/Insights";
import Favorites from "pages/Favorites";
import Trash from 'pages/Trash';
import Single from "pages/Single";
import { Filters } from "components/Filters";
import About from "pages/About";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Filters/>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="new" element={<New />} />
        <Route path="edit" element={<Edit />} />
        <Route path="insights" element={<Insights />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="trash" element={<Trash />} />
        <Route path="single" element={<Single />}/>
        <Route path="about" element={<About/>} />
        <Route path="*" element={<section><h1>404 not found :(</h1></section>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
