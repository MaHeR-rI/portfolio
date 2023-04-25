import About from './components/about/About';
import Cover from './components/cover/Cover';
import Navbar from './components/navbar/Navbar';
import SideNav from './components/navbar/SideNav';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SideNav/>
      <Cover/>
      <About/>
    </div>
  );
}

export default App;
