import React from "react";
import { Header } from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Fullphoto } from "./pages/Fullphoto";
import { NotFound } from "./pages/NotFound";
import { useAppSelector } from "./Types";
import { RootState } from "./Redux/store";
function App() {
  const darkTheme = useAppSelector((state: RootState) => state.themes.dark);
  const fullphoto = useAppSelector((state: RootState) => state.photo.fullphoto);
  return (
    <div
      className={`p-4 xl:p-8  ${
        darkTheme ? " bg-gray-800" : "bg-neutral-300"
      } min-h-screen`}
    >
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route
          path={"/fullphot"}
          element={<Fullphoto fullphoto={fullphoto} />}
        ></Route>
        <Route path={"*"} element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}
export default App;
