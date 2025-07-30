//import './index.css'
import {HashRouter as Router , Routes, Route} from 'react-router-dom'
//the as just makes it so you don't have to type HashRouter everytime and just do Router

//HashRouter --> component we need to wrap entire app in in order to create routing environment
//routes --> specify potential routes of our router
// route --> component you use for each individual page

import { StatsPage } from './Pages/StatsPage';
import { CalendarPage } from './Pages/CalendarPage';
import { Layout } from './Components/layout';
import {FoodDataPage} from './Pages/FoodDataPage';
import {HomePage} from './Pages/HomePage';
import {DealPage} from './Pages/DealPage';
function App() {

  //h1 tag is an html element that designates the main heading of a webpage
  //the div is like a divider; have to open and close it
  //can apply different styles to the elements within the div tag
  //p tag is a paragraph tag
  //tags can have attributes which just tells the code more info abt the tag
  //em tag emphasizes; can do a tag within a tag
  //strong tag bolds
  //to call
  return (
  <Router>
    <Routes>
      <Route element = {<Layout/>}>
        
        <Route path = "/" element = {<HomePage/>}/>
        <Route path = "/StatsPage" element = {<StatsPage/>}/>
        <Route path = "/CalendarPage" element = {<CalendarPage/>}/>
        <Route path = "/FoodDataPage" element = {<FoodDataPage/>}/>
        <Route path = "/DealPage" element = {<DealPage/>}/>

      </Route>
    </Routes>
  </Router>
  );
  
}

export default App
