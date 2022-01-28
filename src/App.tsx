import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import AppNavigation from "./AppNavigation";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <AppNavigation />
        <AppRoutes />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
