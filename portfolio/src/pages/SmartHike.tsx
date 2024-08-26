import { Route, Routes } from "react-router-dom";
import store from '../assets/altstore.json';

const SmartHike = () => {
  return (
    <div>
      <h1>Smart Hike</h1>
      <Routes>
        <Route path="altstore_ipa" element={<pre>{JSON.stringify(store, null, 2)}</pre>} />
      </Routes>
    </div>
  );
};

export default SmartHike;