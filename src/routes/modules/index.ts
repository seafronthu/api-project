import user from "./user";
import project from "./project";
import { RoutePartial } from "src/types/route";
// type Optional<T, U> = T extends U ? void : T;
const allRoutes: RoutePartial[] = [...user, ...project];
export default allRoutes;
