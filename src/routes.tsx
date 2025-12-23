import type { RouteProps } from "react-router";
import {
  Commission,
  Home,
  Materials,
  PayPalMe,
  Social,
  SupportMe,
} from "./pages";

export const routes: RouteProps[] = [
  { index: true, path: "/", element: <Home /> },
  { path: "/materials", element: <Materials /> },
  { path: "/commission", element: <Commission /> },
  { path: "/social", element: <Social /> },
  { path: "/support-me", element: <SupportMe /> },
  { path: "/paypal-me", element: <PayPalMe /> },
];
