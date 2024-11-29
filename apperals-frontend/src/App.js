// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ButtonRow from "./components/navigation/ButtonRow";
import Page1 from "./components/navigation/Page1";
import Page2 from "./components/navigation/Page2";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ButtonRow />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
