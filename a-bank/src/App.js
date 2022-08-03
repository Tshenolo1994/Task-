import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Services from './components/Services';

function App() {
  return (
 
    <ChakraProvider>
    <Navbar />
      <Header />
  <Services />
    </ChakraProvider>
    
  );
}

export default App;
