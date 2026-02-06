import type { RouteProps } from "react-router";
import {
  Commission,
  Home,
  Materials,
  Social,
  SupportMe,
  NotFound,
} from "./pages";
import { en } from "./lang/en";

export const paths = {
  home: "/",
  materials: "/materials",
  commission: "/commission",
  social: "/social",
  supportMe: "/support-me",
  artworks: "/artworks",
};

export type ExtendedRouteProps = RouteProps & { title?: keyof typeof en };

export const routes: ExtendedRouteProps[] = [
  { index: true, path: paths.home, element: <Home /> },
  { path: paths.materials, element: <Materials />, title: "materials.link" },
  { path: paths.commission, element: <Commission />, title: "comissionInfo" },
  { path: paths.social, element: <Social />, title: "socialLinks" },
  { path: paths.supportMe, element: <SupportMe />, title: "supportMe" },
  { path: "*", element: <NotFound />, title: "notFound" },
];
