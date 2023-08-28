import Main from "./components/Main";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Google from "./page/Google";
import Github from "./page/Github";

function App() {

  return (
    <div className="font-Nunito">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/home/:_id" exact element={<Main />} />
        <Route path="/google/:_id" exact element={<Google />} />
        <Route path="/github/:_id" exact element={<Github />} />
      </Routes>
    </div>
  );
}

export default App;

