
import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Cards from './components/Cards';
import Ride from './components/Ride';
import Journey from './components/Journey';
import Craft from './components/Craft';
import Starts from './components/Starts';
import Happy from './components/Happy';
import Free from './components/Free';
import Questions from './components/Questions';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col  items-center overflow-hidden ">
      <Navbar />
      <Home />
      <Cards />
      <Ride />
      <Journey />
      <Craft />
      <Starts />
      <Happy />
      <Free />
      <Questions />
      <Footer />

    </div>
  );
}

export default App;
