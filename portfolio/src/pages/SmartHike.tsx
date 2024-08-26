import { Route, Routes } from "react-router-dom";
import store from '../assets/altstore.json';

const SmartHike = () => {
  return (
      <Routes>
        <Route path="altstore" element={<pre>{JSON.stringify(store, null, 2)}</pre>} />
      </Routes>
  );
};

export default SmartHike;