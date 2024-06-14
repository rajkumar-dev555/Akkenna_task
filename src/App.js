
import './App.css';
import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero';
import Overview from './components/overview/overview';
import Automation_servies from './components/servies/servies';
import Cloud_Automation from './components/Cloud_Automation/Cloud_Automation';
import Tools_Servies from './components/Tools-servies/tools-servies';
import Startnow from './components/automation-stteategies/automation-strategies';
import Akkenna_cloud from './components/Akkenna_cloud/Akkenna_cloud';
import Akkenna_Technology from './components/technology/technology';
import Serve from './components/webserver/we-server';
import Notes from './components/notes/notes';
import User from './components/user/user';
import Blogs from './components/blogs/blogs';
import Footer from './components/footer/footer';


function App() {


  
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Overview/>
      <Automation_servies/>
      <Cloud_Automation/>
      <Tools_Servies/>
      <Startnow/>
      <Akkenna_cloud/>
      <Akkenna_Technology/>
      <Serve/>
      <Notes/>
      <User/>
      <Blogs/>
      <Footer/>
    </div>
  );
}

export default App;
