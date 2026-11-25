
import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Loader from "./components/Loader"; // adjust the path to wherever you save Loader.jsx

// must be ready before the site shows (hero images)
const CRITICAL = ["/id.png", "/images/hero-top.jpg", "/images/hero-left.jpg"];

// loaded quietly afterwards, nobody waits for these
const LATER = [
  "/projects/EKART/EKART Header.png",
  "/projects/GLOBALMART/GLOBALMART Footer.png",
  "/projects/USERPORTAL/USERPORTAL List.png",
  
];

function App() {
  const [ready, setReady] = useState(false); // true when the curtain starts lifting
  const [loaderGone, setLoaderGone] = useState(false); // true when the loader is fully gone

  return (
    <>
      {!loaderGone && (
        <Loader
          images={CRITICAL}
          prefetch={LATER}
          onReveal={() => setReady(true)}
          onDone={() => setLoaderGone(true)}
        />
      )}

      {/* Home mounts only when the loader lifts, so the hero entrance animations play on reveal */}
      {ready && <Home />}
    </>
  );
}

export default App;
