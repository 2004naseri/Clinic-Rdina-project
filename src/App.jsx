// import {
//   createBrowserRouter,
//   Navigate,
//   RouterProvider,
// } from "react-router-dom";
// import React, { Suspense } from "react"; // Import useEffect

import AppRouters from "./AppRouters";
import Navbar from "./components/navbar/Navbar";

// import "./App.css";

// function App() {

//   const router = createBrowserRouter([
//     {
//       path:"/"
// element:<homepage />

//     }

//   ]);

//   return (

//     <Suspense fallback={<Loader />}>
//       <RouterProvider router={router} />
//              </Suspense>
//   );
// }

// export default App;

function App() {
  return <AppRouters />;
}

export default App;
