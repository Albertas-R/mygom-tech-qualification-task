// import './App.css';
import Title from "./components/Title";
import Dropdown from "./components/Dropdown";

import { items } from "./components/data";

function App() {
  return (
    <div className="container">
      <Title
        title="Mygom.Tech qualification task"
        author="Albertas Rinkevičius"
        email="albertas.rinkevicius@gmail.com"
        mob="+370 686 05132"
      />

      <hr />

      <Dropdown title="Select user name" items={items} multiselect />
    </div>
  );
}

export default App;
