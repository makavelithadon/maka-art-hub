import type { RouteProps } from "react-router";
import { Commission, Home, Materials, Social, SupportMe } from "./pages";

export const paths = {
  home: "/",
  materials: "/materials",
  commission: "/commission",
  social: "/social",
  supportMe: "/support-me",
  artworks: "/artworks",
};

export const routes: RouteProps[] = [
  { index: true, path: paths.home, element: <Home /> },
  { path: paths.materials, element: <Materials /> },
  { path: paths.commission, element: <Commission /> },
  { path: paths.social, element: <Social /> },
  { path: paths.supportMe, element: <SupportMe /> },
];
