import './App.css';
import ContactUs from './Components/ContactUs';
import Home from './Components/Home';
import StatusPage from "./Components/StatusPage";

const listFood=
["A","B","C"];

function App() {

  return (
    <div >
         

      {/* <Home name="dhara" ID={1}></Home> 
      <Home name="Avinash" ID={2}></Home>  */}
      <Home list={listFood}/>
      
      <StatusPage  headingname="UseStatusExample"
      ></StatusPage>

      <ContactUs></ContactUs>

       
      

    </div>
  );
}

export default App;
