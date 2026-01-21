import { ModuleDefinition } from "@shell/models/Module";
import { BankingScreen } from "./BankingScreen";

export function registerBankingModule(): ModuleDefinition {
  return {
    name: "banking",
    label: "Banking",
    screens: [
      {
        name: "Banking",
        component: BankingScreen,
      },
    ],
  };
}
