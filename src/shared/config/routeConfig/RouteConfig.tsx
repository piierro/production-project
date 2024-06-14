import { AboutPage } from "pages/AboutPage"
import { LoginPage } from "pages/AuthPage"
import { NotFound } from "pages/NotFoundPage"
import { ProjectPage } from "pages/ProjectPage"
import { RouteProps } from "react-router-dom"

export enum AppRoutes {
  PROJECT = 'project',
  ABOUT = 'main',
  NOT_FOUND = 'not_found',
  LOGIN = 'login'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.PROJECT]: '/project',
  [AppRoutes.ABOUT]: '/',
  [AppRoutes.LOGIN]: '/login',
  [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.PROJECT]: {
    path: RoutePath.project,
    element: <ProjectPage />
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.main,
    element: <AboutPage />
  },
  [AppRoutes.LOGIN]: {
    path: RoutePath.login,
    element: <LoginPage />
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFound />
  }
}