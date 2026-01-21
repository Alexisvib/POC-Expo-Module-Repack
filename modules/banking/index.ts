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
    init() {
      console.log("[Banking] init");
    },
    dispose() {
      console.log("[Banking] dispose");
    },
  };
};

registerModule("banking", BankingModule);
