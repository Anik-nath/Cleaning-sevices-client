import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./Components/Home/Home";
import Navigation from "./Components/Navigation/Navigation";
import About from "./Components/About/About";
import Login from "./Components/Login/Login";
import Footer from "./Components/Footer/Footer";
import AuthProvider from "./Components/Context/AuthProvider";
import Registration from "./Components/Login/Registration/Registration";
import Contact from "./Components/Contact/Contact";
import Services from "./Components/Services/Services";
import Blog from "./Components/Blog/Blog";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Details from "./Components/Details/Details";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Navigation></Navigation>
      <ScrollToTop smooth color="#6f00ff" />
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/services" element={<PrivateRoute><Services></Services></PrivateRoute>}></Route>
          <Route path="/services/:id" element={<Details></Details>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/blog" element={<Blog></Blog>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/registration" element={<Registration></Registration>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
