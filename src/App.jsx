import { React, useState } from "react";
import { Header } from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Fullphoto } from "./pages/Fullphoto";
function App() {
  const [fullphoto, setFullPhoto] = useState("");
  const [photos, setPhotos] = useState([]);
  return (
    <div className=" p-4 xl:p-8">
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
  );
}
export default App;
