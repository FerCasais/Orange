import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Nosotros from "./Nosotros/Nosotros";
import Planes from "./Planes/Planes";
import VideoTour from "./VideoTour/VideoTour";
import PreguntasFrecuentes from "./PreguntasFrecuentes/PreguntasFrecuentes";
import Menu from "./Menu/Menu";
import Header from "./Header/Header";
import Body from "./Main/Body";
import Caracteristicas from "./Caracteristicas/Caracteristicas";
import Footer from "./Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Menu />

        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/planes" element={<Planes />} />
          <Route path="/caracteristicas" element={<Caracteristicas />} />
          <Route path="/videoTour" element={<VideoTour />} />
          <Route
            path="/preguntasFrecuentes"
            element={<PreguntasFrecuentes />}
          />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
