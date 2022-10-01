import './App.css';
import About from './components/About';
import BlueLightRight from './components/BlueLightRight';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Main from './components/Main';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';


function App() {
    return (
        <div className="App">

            <Main />
            {/*             <BlueLightRight /> */}
            <Portfolio />
            <About />
            <Skills />
            <Contact />
            <Footer />

        </div>
    );
}

export default App;
