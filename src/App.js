import './app.css';
import MenuApp from './components/menu/MenuApp';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';


function App() {

  return (
    <div className="app">
      <MenuApp />
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
