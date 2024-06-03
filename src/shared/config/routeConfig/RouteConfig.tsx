import { AboutPage } from "pages/AboutPage"
import { NotFound } from "pages/NotFoundPage"
import { ProjectPage } from "pages/ProjectPage"
import { RouteProps } from "react-router-dom"

export enum AppRoutes {
  PROJECT = 'project',
  ABOUT = 'about',
  NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.PROJECT]: '/project',
  [AppRoutes.ABOUT]: '/',
  [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.PROJECT]: {
    path: RoutePath.project,
    element: <ProjectPage />
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFound />
  }
}