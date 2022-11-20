import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import ExplorePage from "../pages/explore";
import HomePage from "../pages/home";
import ProfilePage from "../pages/profile";
import RootPage from "../pages/root";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootPage />}>
      <Route element={<HomePage />} index path="" />
      <Route element={<ExplorePage />} index path="explore" />
      <Route element={<ProfilePage />} index path="profile" />
    </Route>
  )
);
