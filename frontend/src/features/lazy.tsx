import { lazy } from 'react';

export const LazyPages = {
  HomePage: lazy(() => import('./homepage/HomePage')),
  AuthenticatedPage: lazy(() => import('./auth/AuthenticatedPage')),
  RegisterPage: lazy(() => import('./auth/RegisterPage')),
  LoginPage: lazy(() => import('./auth/LoginPage')),
  ResetPasswordPage: lazy(() => import('./auth/ResetPasswordPage')),
};
