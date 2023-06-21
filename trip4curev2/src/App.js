import { RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import router from "./Router";
import './App.css';
import ScrollToTop from "./Utilies/ScrollTop";

function App() {

  
  return (
  <>

    <RouterProvider router={router}  /> 
  </>
   
  );
}

export default App;