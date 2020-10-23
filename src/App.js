import React from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/home'
import AppContainer from './modules/app'
import Gallery from './pages/gallery'
import Packages from './pages/packages'
import AboutUs from './pages/about'
import Testimonials from './pages/testimonial';
import Contact from './pages/contact';
import TermsOfUse from './pages/info';



//themes
import mainTheme from './bootstrap/themes/mainTheme';

//styled component theme provider
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './bootstrap/globalStyle/globalStyle';
import MainNavigation from './modules/header';
import Blog from './pages/blog';



function App() {
  return (
  <ThemeProvider theme={mainTheme}>
    <GlobalStyle />
<Router>

    <MainNavigation />
      <AppContainer
        home={<Home/>}
        gallery={<Gallery/>}
        packages={<Packages/>}
        about={<AboutUs/>}
        testimonies={<Testimonials/>}
        contact={<Contact/>}
        info={<TermsOfUse/>}
        blog={<Blog/>}
      />
</Router>
      </ThemeProvider>
  

    
  );
}

export default App;
