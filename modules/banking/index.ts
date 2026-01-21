import { ModuleDefinition } from "@shell/models/Module";
import { registerModule } from "@shell/registry/ModuleRegistry";
import { BankingScreen } from "./BankingScreen";

const BankingModule = (): ModuleDefinition => {
  return {
    id: "banking",
    label: "Banking",
    screens: [
      {
        name: "Banking",
        component: BankingScreen,
      },
    ],
  };
};

registerModule("banking", BankingModule);
