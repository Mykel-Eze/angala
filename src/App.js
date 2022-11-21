/* eslint-disable no-sequences */
import 'materialize-css/dist/css/materialize.min.css';
// import M from 'materialize-css'

import "./css/fonts.css"
import "./css/style.css"
import "./css/navbar.css"
import "./css/footer.css"
import "./css/home.css"
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Home />
      
      <Footer />
    </div>
  );
}

export default App;
