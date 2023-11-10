import { React, createContext, useState } from "react";
import { Header } from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Fullphoto } from "./pages/Fullphoto";
export const ColorTheme = createContext(false);
function App() {
  const [fullphoto, setFullPhoto] = useState("");
  const [photos, setPhotos] = useState([]);
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <ColorTheme.Provider value={{ darkTheme, setDarkTheme }}>
      <div
        className={`p-4 xl:p-8  ${
          darkTheme ? " bg-gray-800" : "bg-neutral-300"
        } min-h-screen`}
      >
        <Header />
        <Routes>
          <Route
            path={"/"}
            element={
              <Home
                photos={photos}
                setPhotos={setPhotos}
                OnClickPhoto={(item) => setFullPhoto(item)}
              />
            }
          ></Route>
          <Route
            path={"/fullphot"}
            element={<Fullphoto fullphoto={fullphoto} photos={photos} />}
          ></Route>
        </Routes>
      </div>
    </ColorTheme.Provider>
  );
}
export default App;
