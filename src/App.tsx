import { Routes, Route } from "react-router";
import "./App.css";
import { Layout } from "./Layout";
import { routes } from "./routes";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {routes.map((route) => (
          <Route key={route.path} {...route} />
        ))}
      </Route>
    </Routes>
  );
};

export default App;
