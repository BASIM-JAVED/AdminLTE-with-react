import logo from './logo.svg';
import './App.css';
// import Login from './component/Login';
import Footer from './component/Footer';
import Header from './component/Header';
import Home from './component/Home';
import SideNav from './component/SideNav';


function App() {
  return (
    <div className='wrapper'>
     {/* <Login></Login> */}

<Header/>
<Home/>
<SideNav/>
<Footer/>

    </div>
  );
}

export default App;
