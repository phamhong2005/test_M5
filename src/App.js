import './App.css';
import {Route, Routes} from "react-router-dom";
import {Home} from "./Home/home";
import {ListProducts} from "./pages/product/ListProducts";
import AddProduct from "./pages/product/Addproduct";
import UpdateProduct from "./pages/product/UpdateProduct";

function App() {
  return (
      <>
          <Routes>
              <Route path={"products"} element={<Home/>}>
                  <Route path={"list"} element={<ListProducts/>}></Route>
                  <Route path={"add"} element={<AddProduct/>}></Route>
                  <Route path={":id"} element={<UpdateProduct/>}></Route>
              </Route>
          </Routes>
      </>
  );
}

export default App;
