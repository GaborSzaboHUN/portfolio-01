import './App.css';
import About from './components/About';
import BlueLightRight from './components/BlueLightRight';
import Main from './components/Main';
import Portfolio from './components/Portfolio';


function App() {
    return (
        <div className="App">

            <Main />
            <BlueLightRight />
            <Portfolio />
            <About />

        </div>
    );
}

export default App;
