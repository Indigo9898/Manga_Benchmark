import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import  Login  from "./pages/login"
import Signup from "./pages/signup";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  },
  {
    path: '/login',
    element: <Login /> 
  },
  {
    path: '/signup',
    element: <Signup />
  }
];

export default AppRoutes;
