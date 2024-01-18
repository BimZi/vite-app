import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';
import { useRef, useState } from 'react';
import { HomePageContext } from './module/context';
import Header from './module/Header'
import Jumbotron from './module/Jumbotron'
import Statistic from './module/Statistic'
import Feature from './module/Feature'
import Video from './module/Video'
import Testimonial from './module/Testimonial'
import Faq from './module/Faq'
import Footer from './module/Footer'
import { Box } from '@mui/material';

function App() {
  const [refs, setRefs] = useState({
    headerRef: useRef(null),
    jumbotronRef: useRef(null),
    statisticRef: useRef(null),
    featureRef: useRef(null),
    videoRef: useRef(null),
    testimonialRef: useRef(null),
    faqRef: useRef(null),
    footerRef: useRef(null),
  })

  return (
    <HomePageContext.Provider value={{refs, setRefs}}>
      <Header />

      <Jumbotron />
      
      <Box mt={60} />
      <Statistic />

      <Box mt={16} />
      <Feature />

      <Video />

      <Box mt={16} />
      <Testimonial />

      <Box mt={16} />
      <Faq />

      <Footer />
    </HomePageContext.Provider>
  )
}

export default App
