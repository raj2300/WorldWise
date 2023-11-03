import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/product";
import Pricing from "./pages/Pricing";
function App() {
   
  return<BrowserRouter>
  <Routes>
    <Route path="product" element={<Product/>}/>
    <Route path="pricing" element={<Pricing/>}/>
  </Routes>
</BrowserRouter>  
}


export default App;
