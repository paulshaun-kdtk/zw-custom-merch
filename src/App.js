import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/DashBoard';

// end imports

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* <Route path="/books" element={<Books />} />
        <Route path="/categories" element={<Components />} /> */}
      </Routes>
    </Router>
  );
}

export default App;