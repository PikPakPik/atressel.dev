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
        </Routes>
      </Layout>
    </>
  );
}

export default App; 
