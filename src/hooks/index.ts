import { useLocation } from "react-router";
import { routes } from "../routes";
import { useEffect } from "react";

export const useCurrentRoute = () => {
  const { pathname } = useLocation();
  const currentRoute = routes.find((route) => route.path === pathname);

  return currentRoute || null;
};

export const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};
