import { useState } from "react";
import "./App.css";
import AddProperty from "./components/AddProperty/AddProperty";
import PropertiesList from "./components/PropertiesList/PropertiesList";
import Header from "./components/Header";

function App() {
  const [detail, setDetails] = useState([]);
  return (
    <div className="container">
      <Header />
      <PropertiesList detail={detail} setDetails={setDetails} />
      <AddProperty detail={detail} setDetails={setDetails} />
    </div>
  );
}

export default App;
