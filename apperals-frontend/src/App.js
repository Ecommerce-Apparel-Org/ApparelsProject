// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ButtonRow from './components/navigation/ButtonRow';
import Page1 from './components/navigation/Page1';
import Page2 from './components/navigation/Page2';
import Page3 from './components/navigation/Page3';
import Page4 from './components/navigation/Page4';
import Page5 from './components/navigation/Page5';


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
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
          <Route path="/page5" element={<Page5 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
