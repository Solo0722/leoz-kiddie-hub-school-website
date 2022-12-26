import "./App.css";
import { ConfigProvider, theme } from "antd";
import styled, { ThemeProvider } from "styled-components";
import { defaultTheme } from "./shared/themes/theme";
import { GlobalStyles } from "./shared/themes/globalStyles";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Gallery from "./pages/gallery";
import Admissions from "./pages/admissions";
import Footer from "./components/Footer";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: `${defaultTheme.primaryColor}`,
          borderRadius: 3,
          fontFamily: "Raleway, sans-serif",
        },
      }}
    >
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <BrowserRouter>
          <Banner />
          <Navbar />
          <RoutesWrapper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/admissions" element={<Admissions />} />
            </Routes>
          </RoutesWrapper>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </ConfigProvider>
  );
}

const RoutesWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export default App;
