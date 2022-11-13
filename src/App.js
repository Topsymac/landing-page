
import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Section from './components/section/Section';
import Card from './components/card/Card'
import Hub from './components/Hub/Hub';
import Review from './components/review/Review';
import Trade from './components/Trade/Trade';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Hero/>
      <Section/>
      <Card/>
      <Hub/>
      <Review/>
      <Trade/>
      <Footer/>
    </div>
  );
}

export default App;
