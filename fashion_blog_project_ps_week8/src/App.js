
import './App.css';
import Sartres from './Components/Sartres';
import SubHeader from './Components/SubHeader';
import NavBar from './Components/NavBar';
import "./style.css";
import ImageOne from './Components/ImageOne';
import Date from './Components/Date';
import ArticleTitles from './Components/ArticleTitles';
import TextBoxes from './Components/TextBoxes';
import ImageTwo from './Components/ImageTwo';
// Pages
import Womens from './NavPages/Womens';
import Mens from './NavPages/Mens';
import OnTheStreet from './NavPages/OnTheStreet';
import TheCatwalk from './NavPages/TheCatwalk';
import AdWatch from './NavPages/AdWatch';
import About from './NavPages/About';
import Tips from './NavPages/Tips'
import NavBarBottom from './Components/NavBarBottom';


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


  // the data that you are using for a prop, you want to insert it in the component you plan on using teh data in
  const titles = [
    {"article": "one",
    "title": "On The Streets in Brooklyn",
    },
    {
    "article": "two",
    "title": "Vintage in Vouge",
    }
  ];


  return (
    <div id="overall-page">
        {/* < Womens />
        <OnTheStreet />
        <TheCatwalk />
        <AdWatch />
        <About /> */}
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
            <Date />
          </div>
          <div id="article-header">
            {/* title here is a custom attribute, and it turns title into a prop object. This corresponds to the prop title on line 5 in articleTitles */}
          <ArticleTitles title={titles[0]} />
          </div>
          <div id="image-1">
            {/* big image 1 */}
            <ImageOne />
          </div>
          <div id="text-box">
            <TextBoxes  />
            <div id="continue">
            <p1 className="continues">Continues ...</p1>
          </div>
          </div>
          {/* put a grey border line at teh bottom of outter article box */}
        </div>
        <div id="outter-box-article">
          <div id="date">
            <Date />
          </div>
          <div id="article-header">
            {/* title here is a custom attribute, and it turns title into a prop object. This corresponds to the prop title on line 5 in articleTitles */}
          <ArticleTitles title={titles[1]} />
          </div>
          <div id="image-1">
            {/* big image 1 */}
            <ImageTwo />
          </div>
          <div id="text-box">
            <TextBoxes  />
            <div id="continue">
            <p1 href=" "className="continues">Continues ...</p1>
          </div> 
          </div>
          {/* put a grey border line at teh bottom of outter article box */}
        </div>
      <div id="bottom-nav">
      <NavBarBottom />
      </div>
    <footer>
      {/* since &copy did not work, the unicode (whats in the crulies worked great) */}
      {'\u00a9'} 2023 Valet Industries
    </footer>
 
    </div>
  )
};

export default App;
