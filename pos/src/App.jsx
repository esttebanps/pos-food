import { UIProvider } from "./UiProvider/UiProvider";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Dashboard } from "./pages/Dashboard/Dashboard";
// import { Settings } from "./pages/Settings/Settings";
import RestaurantProvider from "./api/RestaurantProvider";

function App() {
  return (
    <RestaurantProvider>
      <UIProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Navigate replace to="/" />} />
          {/* <Route path="/settings" element={<Settings />} /> */}
        </Routes>
      </UIProvider>
    </RestaurantProvider>
  );
}

export default App;
