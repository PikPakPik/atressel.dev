import Layout from './components/layouts/Layout';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Home from './pages/Home';
import Projects from './pages/Projects';
import ShowProject from './components/Projects/ShowProject';
import About from './pages/About';

function App() {

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects">
            <Route path="/projects" element={<Projects />} />
            <Route path=":projectId" element={<ShowProject />} />
          </Route>
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App; 
