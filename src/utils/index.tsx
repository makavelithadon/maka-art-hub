import type { Location } from "react-router";
import { routes } from "../routes";

export const is404Route = (pathname: Location["pathname"]): boolean =>
  routes.findIndex((route) => route.path === pathname) === -1;
