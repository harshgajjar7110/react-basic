import { useState } from "react";
import { Outlet, Link, RouteObject, useRoutes } from "react-router-dom";

export default function App() {

  let routes: RouteObject[] = [
    {
      path: "/",
      element: <Sidebar />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "/courses",
          element: <Courses />,
        },
        { path: "*", element: <NoMatch /> },
      ],
    },
  ];
  let routesconfig = useRoutes(routes);
  return (
    <div>
      {routesconfig}
    </div>
  );
}


function Sidebar() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
       <button onClick={handleClick}>
       Clicked {count} times
    </button>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>

        </ul>
      </nav>

      <hr />
      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}


function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

function Courses() {
  return (
    <div>Courses</div>
  )
}