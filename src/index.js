import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.css";
import App from "./container/App";
import Default from "./Default";
import Resume from "./Resume";
import About from "./About";
import Post from "./Post";
import Error from "./Error";
import reportWebVitals from "./reportWebVitals";

const router = createBrowserRouter([
  // first route is "root route
  // Routs are objects passed to the router creation function. Thus, the following object equals to <Route path=~~ />"
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Default /> },
      { path: "resume", element: <Resume /> },
      { path: "about", element: <About /> },
      { path: "post/:id", element: <Post /> },
    ],
  },
]);

/* => This means router will keep everything in <App /> and then route to <Resume />, so the page might be really weird.
(Both <App /> and <Resume /> will both show up in the Contact page)
This is helpful if the root route is a side bar that no matter which page we want to go.
=> But if you only set the above code, thouth we can successfully route to Resume, but only <App /> will show up, <Resume /> doesn't render
=> Thus, we need to tell the root route where we want it to render its child routes
=> Use Outlet component from react-router-dom
=> Go to the root route (<App />), and put <Outlet /> in App's return. Put it anywhere you want <Resume /> to render in <App />
*/

/* if do this instead (Put <Resume /> in root route's next item):
{
  path: "/",
  element: <App />,
  errorElement: <ErrorPage />,
},
{
  path: "resume",
  element: <Resume />,
}
=> This will completely change to a new page <Resume />, the contents in <App /> would also disppear, only <Resume /> would be rendered
*/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
