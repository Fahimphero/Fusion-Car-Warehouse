import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import Inventory from './Pages/Inventory/Inventory';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import { ToastContainer } from 'react-toastify';
import NotFound from './Pages/NotFound/NotFound';
import Blogs from './Pages/Blogs/Blogs';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import AddInventory from './Pages/AddInventory/AddInventory';
import AddProducts from './Pages/Client Products/AddProducts/AddProducts';
import MyProducts from './Pages/Client Products/MyProducts/MyProducts';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/inventory/:id' element={<RequireAuth><Inventory></Inventory></RequireAuth>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/manageInventories' element={<ManageInventory></ManageInventory>}></Route>
        <Route path='/addinventory' element={<AddInventory></AddInventory>}></Route>
        <Route path='/addproducts' element={<RequireAuth><AddProducts></AddProducts></RequireAuth>}></Route>
        <Route path='/myproducts' element={<RequireAuth><MyProducts></MyProducts></RequireAuth>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
