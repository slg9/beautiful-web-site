import './app.css';
import Menu from './components/menu/Menu';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="app">
      <Menu/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
