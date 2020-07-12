import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home'
import AppContainer from './modules/app'
import Gallery from './pages/gallery'
import Packages from './pages/packages'
import AboutUs from './pages/about'
import Testimonials from './pages/testimonial';


//themes
import mainTheme from './bootstrap/themes/mainTheme';

//styled component theme provider
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './bootstrap/globalStyle/globalStyle';
import MainNavigation from './modules/header';



function App() {
  return (
  <ThemeProvider theme={mainTheme}>
    <GlobalStyle />
    <MainNavigation />
      <AppContainer
        home={<Home/>}
        gallery={<Gallery/>}
        packages={<Packages/>}
        aboutUs={<AboutUs/>}
        testimonies={<Testimonials/>}
      />
      </ThemeProvider>
    
  );
}

export default App;
