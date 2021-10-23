import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

export default function App() {
   return (
      <div>
          
         <Router>
         <Nav />
         <Switch>
           <Route exact path="/"><Home /></Route>
           <Route path="/about"><About /></Route>
           <Route path="/dashboard"><Dashboard /></Route>
         </Switch>
         </Router>
       </div>     
   );
 }
 
 
 function Nav()
 {
    return(
      <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
         </ul>
      </nav>
    );
 }
 
 function Home() {
   return (
     <div>
       <h2>Home</h2>
       <p>Home page, you can navigate to any other page from here.</p>
     </div>
   );
 }
 
 function About() {
   return (
     <div>
       <h2>About</h2>
       <p>Here is about page.</p>
     </div>
   );
 }
 
 function Dashboard() {
   return (
     <div>
       <h2>Dashboard</h2>
       <p>Here you are on Dashboard page.</p>
     </div>
   );
 }

 
render(<App />, document.getElementById('root'));
