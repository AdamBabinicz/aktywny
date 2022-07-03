import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import AboutUs from "./components/aboutUs/AboutUs";
import Skills from "./components/skills/Skills";
import Stats from "./components/stats/Stats";
import Work from "./components/work/Work";
import WorkProcess from "./components/workprocess/WorkProcess";
import Services from "./components/services/Services";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import CookieConsent from "react-cookie-consent";
import ScrollToTop from "./ScrollToTop";
import Scroll from "./components/Scroll";

function App() {
  return (
    <Router>
      <div className="holder">
        <ScrollToTop />
        <Scroll />
        <Header />
        <AboutUs />
        <Skills />
        <Stats />
        <Work />
        <WorkProcess />
        <Services />
        <Testimonials />
        <Contact />
        <Footer />
        <CookieConsent
          debug={true}
          location="bottom"
          style={{
            background: "#333",
            textAlign: "left",
            paddingBottom: "1rem",
            fontSize: "16px",
            fontFamily: "Gideon Roman",
          }}
          buttonStyle={{
            color: "#333",
            background: "#fff",
            fontSize: "18px",
            fontFamily: "Gideon Roman",
            marginRight: "1rem",
          }}
          buttonText="OK, rozumiem"
          expires={365}
        >
          "W ramach naszej witryny stosujemy pliki cookies w celu świadczenia
          Państwu usług na najwyższym poziomie, w tym w sposób dostosowany do
          indywidualnych potrzeb. Korzystanie z witryny bez zmiany ustawień
          dotyczących cookies oznacza, że będą one zamieszczane w Państwa
          urządzeniu końcowym. Możecie Państwo dokonać w każdym czasie zmiany
          ustawień dotyczących cookies."
        </CookieConsent>
      </div>
    </Router>
  );
}

export default App;
