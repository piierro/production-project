import { AboutPage } from "pages/AboutPage"
import { ProjectPage } from "pages/ProjectPage"
import { RouteProps } from "react-router-dom"

export enum AppRoutes {
  PROJECT = 'project',
  ABOUT = 'about'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.PROJECT]: '/project',
  [AppRoutes.ABOUT]: '/'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.PROJECT]: {
    path: RoutePath.project,
    element: <ProjectPage />
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />
  }
}