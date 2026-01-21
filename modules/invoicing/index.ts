import { ModuleDefinition } from "@shell/models/Module";
import { InvoicingScreen } from "./InvoicingScreen";

export function registerInvoicingModule(): ModuleDefinition {
  return {
    name: "invoicing",
    label: "Invoicing",
    screens: [
      {
        name: "Invoicing",
        component: InvoicingScreen,
      },
    ],
  };
}
