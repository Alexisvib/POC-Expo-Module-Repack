import { registerModule } from "@shell/registry/ModuleRegistry";

registerModule("invoicing", () => import("@modules/invoicing"));
registerModule("banking", () => import("@modules/banking"));
registerModule("accounting", () => import("@modules/accounting"));
