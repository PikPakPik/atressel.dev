import Layout from './components/layouts/Layout';
import {
  Route,
  Routes
} from "react-router-dom";
import Home from './pages/Home';
import Projects from './pages/Projects';
import ShowProject from './components/Projects/ShowProject';
import About from './pages/About';

function App() {

  return (
    <>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/home" element={<Layout><Home /></Layout>} />
          <Route path="/projects">
            <Route path="/projects" element={<Layout><Projects /></Layout>} />
            <Route path=":projectId" element={<Layout><ShowProject /></Layout>} />
          </Route>
          <Route path="/about" element={<Layout><About /></Layout>} />
        </Routes>
    </>
  );
}

export default App; 
