
import './App.css';
import Sartres from './Components/Sartres';
import SubHeader from './Components/SubHeader';
import NavBar from './Components/NavBar';
import "./style.css";
// Pages
import Womens from './NavPages/Womens';
import Mens from './NavPages/Mens';
import OnTheStreet from './NavPages/OnTheStreet';
import TheCatwalk from './NavPages/TheCatwalk';
import AdWatch from './NavPages/AdWatch';
import About from './NavPages/About';
import Tips from './NavPages/Tips'


function App() {
  let  component
  switch (window.location.pathname){ 
    case "/":
      component = <App />
      break;
    case "/womens":
      component = <Womens />
      break;
    case "/onthestreet":
      component = <OnTheStreet />
      break;
    case "thecatwalk":
      component = <TheCatwalk />
      break;
    case "adwatch":
      component = <AdWatch />
      break;
    case "about":
      component = <About />
      break;
  }

  return (
    <div id="overall-page">
        <div id="header-block">
          <div id="top-header">
            <Sartres / >
          </div>
          <div id="sub-header">
         <SubHeader />
          </div>
          <div id="navbar">
            <NavBar />
          </div> 
        {/* end of header-block */}
        </div>
        <div id="outter-box-article">
          <div id="date">
            {/* date */}
          </div>
          <div id="article-header">
            {/* On the Street in Brooklyn */}
          </div>
          <div id="image-1" src="blog-image-1.jpg" >
            {/* big image 1 */}
          </div>
          <div id="text-box">
            {/* //put text here */}
          </div>
          <div id="continue">
            {/* put continue section here */}
          </div>
          {/* put a grey border line at teh bottom of outter article box */}
        </div>
      <div id="bottom-nav">
      {/* bottom nav here */}
      </div>
    <footer>
      {/* copyright infomation */}
    </footer>
 
    </div>
  );
}

export default App;
