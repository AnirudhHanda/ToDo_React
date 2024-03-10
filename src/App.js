import './App.css';
import Header from "./MyComponents/Header";
import ToDos from "./MyComponents/ToDos";
import { Footer } from "./MyComponents/Footer";
import Hero from "./MyComponents/Hero";
import About from "./MyComponents/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const todosData = [
    {
      id: 1,
      title: 'Complete assignment',
      description: 'Finish the project report by EOD',
    },
    {
      id: 2,
      title: 'Buy groceries',
      description: 'Get milk, eggs, and bread from the store',
    },
    {
      id: 3,
      title: 'Call mom',
      description: 'Wish her a happy birthday and catch up on family news',
    },
    // Add more todos as needed
  ];

  return (
    <>
      <Router>
        <Header title="ToDos List" isLogin={true} />
        <Routes>
          <Route exact path="/" element={<Hero />} />
          <Route exact path="/todos" element={<ToDos className="todos" todosData={todosData} />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
