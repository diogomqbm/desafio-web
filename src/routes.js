import Search from "./modules/Search";
import RepoPulls from "./modules/RepoPulls";

const routes = [
  {
    path: "/",
    exact: true,
    component: Search
  },
  {
    path: "/:creator/:repoName",
    component: RepoPulls
  }
]

export default routes;