import { InvoicingScreen } from "./InvoicingScreen";

export function registerInvoicingModule() {
  return {
    name: "invoicing",
    screens: [
      {
        name: "Invoicing",
        component: InvoicingScreen,
      },
    ],
  };
}
