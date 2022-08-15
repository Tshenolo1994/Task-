
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Services from './components/Services';
import About from "./components/About"
import Loan from './components/Loan';
import OtherServices from './components/OtherServices';
import Karabo from './components/Karabo';
import Footer from "./components/Footer"

function App() {
  return (
 
    <ChakraProvider>
    <Navbar />
      <Header />
      <About />
  <Services />
  <Loan />
  <Karabo />
<OtherServices />
<Footer />
    </ChakraProvider>
    
  );
}

export default App;
