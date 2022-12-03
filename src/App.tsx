import ListOfItems from "./components/ListOfItems/ListOfItems";
import './App.css';
import TopPanel from "./components/TopPanel";
import {Routes, Route} from 'react-router-dom';
import HomePage from "./components/HomePage";
import ItemPage from "./components/ItemPage";
import Categories from "./components/Categories";
import {CategoryItems} from "./components/CategoryItems/CategoryItems";


function App() {
  return (
    <div>
      <header>
          <TopPanel/>
          <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/catalog" element={<ListOfItems/>}/>
              <Route path="/catalog/:id" element={<ItemPage/>}/>
              <Route path="/categories" element={<Categories/>}/>
              <Route path="/categories/:category" element={<CategoryItems/>}/>
          </Routes>
      </header>
    </div>
  );
}

export default App;
