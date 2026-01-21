import { ModuleDefinition } from "@shell/models/Module";
import { registerModule } from "@shell/registry/ModuleRegistry";
import { InvoicingScreen } from "./InvoicingScreen";

const InvoicingModule = (): ModuleDefinition => {
  return {
    id: "invoicing",
    label: "Invoicing",
    screens: [
      {
        name: "Invoicing",
        component: InvoicingScreen,
      },
    ],
    init() {
      console.log("[Invoicing] init");
    },
    dispose() {
      console.log("[Invoicing] dispose");
    },
  };
};

registerModule("invoicing", InvoicingModule);
