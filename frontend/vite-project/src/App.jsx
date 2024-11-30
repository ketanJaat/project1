
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import Shop from './components/shop'
import Product from './components/Product';
import Protein from './components/protein/Protein';
import ProteinBlend from './components/protein/ProteinBlend';
import ProteinWhey from './components/protein/ProteinWhey';
import ProteinIso from './components/protein/ProteinIso';
import MassMuscleGainer from './components/massMuscleGainer/MassMuscleGainer';
import WeightLoss from './components/weightLoss/WeightLoss';
import Fatburners from './components/weightLoss/Fatburners';
import Lcarnitine from './components/weightLoss/Lcarnitine';
import CLA from './components/weightLoss/CLA';
import HealthyJoints from './components/healthWellness/HealthyJoints'
import Digestive from './components/healthWellness/Digestive'
import Fish from './components/healthWellness/Fish'
import HealthWellness from './components/healthWellness/HealthWellness'
import Multi from './components/healthWellness/Multi'
import Testo from './components/healthWellness/Testo'
import Sport from './components/healthWellness/Sport'
import Citruline from './components/musclePumping/Citruline';
import Larginine from './components/musclePumping/Larginine';
import MusclePumping from './components/musclePumping/MusclePumping';
import Essentials from './components/Essentials/Essentials';
import Bcaa from './components/Essentials/Bcaa';
import Creatine from './components/Essentials/Creatine';
import EnergyPowder from './components/Essentials/EnergyPowder';
import Glutamine from './components/Essentials/Glutamine';
import Gym from './components/Essentials/Gym';
import Pre from './components/Essentials/Pre';
import Bulk from './components/stacks/Bulk';
import Cutting from './components/stacks/Cutting';
import Fatloss from './components/stacks/Fatloss';
import Mass from './components/stacks/Mass';
import Muscle from './components/stacks/Muscle';
import Size from './components/stacks/Size';
import Stacks from './components/stacks/Stacks';
import Carbo from './components/carbo/Carbo';
import Carbo1 from './components/carbo/Carbo1';
import { useState } from 'react';
import RegisterFull from './components/register/RegisterFull';
import RegisterLg from './components/register/RegisterLg';
import RegisterSm from './components/register/RegisterSm';
import Register from './components/Register';
import LoginFull from './components/login/LoginFull';
import LoginLg from './components/login/LoginLg';
import LoginSm from './components/login/LoginSm';
import Login from './components/Login';
import Cart from './components/Cart';
import Brand from './components/Brand';
import Goals from './components/Goals';
import Admin from './components/Admin';
import AddProduct from './components/AddProduct';
import AdminShop from './components/AdminShop';
import Intro from './components/Intro';




const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <div>
      <Intro/>
      <Home/>
    </div>,
  },
  {
    path: "/shop",
    element: 
    <div>
      <Shop/>
    </div>,
  },
  {
    path: "/product/:id",
    element: 
    <div>
      <Product/>
    </div>,
  },
  {
    path: "/shop/protein/all",
    element: 
    <div>
      <Protein/>
    </div>,
  },
  {
    path: "/shop/protein/blend",
    element: 
    <div>
      <ProteinBlend/>
    </div>,
  },
  {
    path: "/shop/protein/whey",
    element: 
    <div>
      <ProteinWhey/>
    </div>,
  },
  {
    path: "/shop/protein/iso",
    element: 
    <div>
      <ProteinIso/>
    </div>,
  },
  {
    path: "/shop/mass&muscleGainer",
    element: 
    <div>
      <MassMuscleGainer/>
    </div>,
  },
  {
    path: "/shop/weightloss/all",
    element: 
    <div>
      <WeightLoss />
    </div>,
  },
  {
    path: "/shop/weightloss/L-carnitine",
    element: 
    <div>
      <Lcarnitine/>
    </div>,
  },
  {
    path: "/shop/weightloss/fatburners",
    element: 
    <div>
      <Fatburners/>
    </div>,
  },
  {
    path: "/shop/weightloss/CLA",
    element: 
    <div>
      <CLA/>
    </div>,
  },
  {
    path: "/shop/healthwellness/all",
    element: 
    <div>
      <HealthWellness/>
    </div>,
  },
  {
    path: "/shop/healthwellness/multivitamins",
    element: 
    <div>
      <Multi/>
    </div>,
  },
  {
    path: "/shop/healthwellness/fishoil",
    element: 
    <div>
      <Fish/>
    </div>,
  },
  {
    path: "/shop/healthwellness/digestiveenzymes",
    element: 
    <div>
      <Digestive/>
    </div>,
  },
  {
    path: "/shop/healthwellness/testobooster",
    element: 
    <div>
      <Testo/>
    </div>,
  },
  {
    path: "/shop/healthwellness/sportshealthy",
    element: 
    <div>
      <Sport/>
    </div>,
  },
  {
    path: "/shop/healthwellness/healthyjoints",
    element: 
    <div>
      <HealthyJoints/>
    </div>,
  },
  {
    path: "/shop/musclepumping/all",
    element: 
    <div>
      <MusclePumping/>
    </div>,
  },
  {
    path: "/shop/musclepumping/l-arginine",
    element: 
    <div>
      <Larginine/>
    </div>,
  },
  {
    path: "/shop/musclepumping/citruline",
    element: 
    <div>
      <Citruline/>
    </div>,
  },
  {
    path: "/shop/essentials/all",
    element: 
    <div>
      <Essentials/>
    </div>,
  },
  {
    path: "/shop/essentials/energypowder",
    element: 
    <div>
      <EnergyPowder/>
    </div>,
  },
  {
    path: "/shop/essentials/bcaa-amino",
    element: 
    <div>
      <Bcaa/>
    </div>,
  },
  {
    path: "/shop/essentials/preworkout",
    element: 
    <div>
      <Pre/>
    </div>,
  },
  {
    path: "/shop/essentials/glutamine",
    element: 
    <div>
      <Glutamine/>
    </div>,
  },
  {
    path: "/shop/essentials/creatine",
    element: 
    <div>
      <Creatine/>
    </div>,
  },
  {
    path: "/shop/essentials/gymessentials",
    element: 
    <div>
      <Gym/>
    </div>,
  },
  {
    path: "/shop/stacks/all",
    element: 
    <div>
      <Stacks/>
    </div>,
  },
  {
    path: "/shop/stacks/bulkbody",
    element: 
    <div>
      <Bulk/>
    </div>,
  },
  {
    path: "/shop/stacks/fatloss",
    element: 
    <div>
      <Fatloss/>
    </div>,
  },
  {
    path: "/shop/stacks/massgaining",
    element: 
    <div>
      <Mass/>
    </div>,
  },
  {
    path: "/shop/stacks/musclegaining",
    element: 
    <div>
      <Muscle/>
    </div>,
  },
  {
    path: "/shop/stacks/sizegaining",
    element: 
    <div>
      <Size/>
    </div>,
  },
  {
    path: "/shop/stacks/cuttingstack",
    element: 
    <div>
      <Cutting/>
    </div>,
  },
  {
    path: "/shop/carbo/all",
    element: 
    <div>
      <Carbo/>
    </div>,
  },
  {
    path: "/shop/carbo/carbo",
    element: 
    <div>
      <Carbo1/>
    </div>,
  },
  {
    path: "/sign-up",
    element: 
    <div>
      <Register/>
    </div>,
  },
  {
    path: "/login",
    element: 
    <div>
      <Login/>
    </div>,
  },
  {
    path: "/cart",
    element: 
    <div>
      <Cart/>
    </div>,
  },
  {
    path: "/brands/:id",
    element: 
    <div>
      <Brand/>
    </div>,
  },
  {
    path: "/goals/:id",
    element: 
    <div>
      <Goals/>
    </div>,
  },
  {
    path: "/admin",
    element: 
    <div>
      <Admin/>
    </div>,
  },
  {
    path: "/admin/addproduct",
    element: 
    <div>
      <AddProduct/>
    </div>,
  },
  {
    path: "/admin/shop",
    element: 
    <div>
      <AdminShop/>
    </div>,
  },
]);

function App() {

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
