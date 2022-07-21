import {Routes, Route} from "react-router-dom";
import Catalog from "./components/Catalog";
import Favorites from "./components/Favorites";
import Basket from "./components/Basket";
import Home from "./components/Home";

function App() {


    return (
        <div className="redux">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/products" element={<Catalog/>}/>
                <Route path="/favorites" element={<Favorites/>}/>
                <Route path="/basket" element={<Basket/>}/>


            </Routes>
        </div>
    );
}

export default App;
