export interface RouteOpt {
  path: string;
  name: string;
  component: () => Promise<any>;
  exact: boolean;
  strict: boolean;
  sensitive: boolean;
}

export interface RoutePartial extends Partial<RouteOpt> {
  component: () => Promise<any>;
  name: string;
}
export interface AllRoutes {
  [k: string]: RoutePartial; // Pick<Optional<keyof RouteOpt, "component">> // Partial<Extract<keyof Partial<RouteOpt>, "component">>;\
}
