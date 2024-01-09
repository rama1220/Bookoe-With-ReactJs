import { createBrowserRouter } from "react-router-dom";
import Latest from "./src/Component/Latest";
import TopPicks from "./src/Component/TopPicks";
import All from "./src/Component/All";
import App from "./src/App";
import Detail from "./src/Component/Detail";
import SeeAll from "./src/Component/seeAll";
import Search from "./src/Component/Search";
import Notif404 from "./src/Component/Notif404";
const Router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "",
        children: [
          { path: "", Component: All },
          {
            path: "seeDetail/",
            children: [
              { path: "", Component: SeeAll },
              { path: "detail/:id", Component: Detail },
            ],
          },
          { path: "detail/:id", Component: Detail },
        ],
      },
      {
        path: "latest/",
        children: [
          { path: "", Component: Latest },
          { path: "detail/:id", Component: Detail },
        ],
      },
      {
        path: "toppicks/",
        children: [
          { path: "", Component: TopPicks },
          { path: "detail/:id", Component: Detail },
        ],
      },
      {
        path: "/search",
        children: [
          { path: "", Component: Search },
          { path: "detail/:id", Component: Detail },
        ],
      },
    ],
  },
  {
    path: "",
    children: [
      { path: "*", Component: Notif404 },
      { path: "/", Component: All },
    ],
  },
]);

export default Router;
