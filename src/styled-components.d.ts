// ./styled-components.d.ts
import { Theme } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
