import { ModuleDefinition } from "@shell/models/Module";
import { AccountingScreen } from "./AccountingScreen";

const AccountingModule = (): ModuleDefinition => {
  return {
    id: "accounting",
    label: "Accounting",
    screens: [
      {
        name: "Accounting",
        component: AccountingScreen,
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

export default AccountingModule;
