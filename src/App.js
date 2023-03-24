import Navbar from "./Components/NavBar";
import ItemListContainer from "./Components/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetail from "./Components/ItemDetail";


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={   <ItemListContainer/> }> </Route>
        <Route path="/products" element={   <ItemListContainer/> }> </Route>
        <Route
          path="/:id"
          element={<ItemDetail  />}
        />
        <Route path="*" element={   <ItemListContainer/> }> </Route>
      </Routes>
 
    </div>
  );
};

export default App;
