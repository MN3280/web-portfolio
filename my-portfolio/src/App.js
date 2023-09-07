import { lazy, useState } from "react";
import { Suspense } from "react";
import { Analytics } from '@vercel/analytics/react';

import Loader from "./components/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const Home = lazy(() => import("./components/pages/Home"));

  setTimeout(() => {
    setIsLoading(false);
  }, 3000);

  return (
    <div className="App">
      <Loader />
      <Analytics />
      <Suspense fallback={null}>
        <Home isLoading={isLoading} />
      </Suspense>
    </div>
  );
}

export default App;
