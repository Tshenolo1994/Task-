import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from "./components/Navbar"
import Header from "./components/Header"

function App() {
  return (
    <div className="App">
    <ChakraProvider>
    <Navbar />
      <Header />
  
    </ChakraProvider>
    </div>
  );
}

export default App;
