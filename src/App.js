import { Routes, Route } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import CashPage from "./components/Basket & Formalization/CashPage";
import CatalogList from "./components/Catalog/CatalogList";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Main/Hero";
// import {data} from './data/data'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Hero/>}/>
        <Route path="/login" element={<Auth/>}/>
        <Route path="/register" element={<Auth/>}/>
        <Route path="/catalog" element={<CatalogList/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/basket" element={<CashPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
