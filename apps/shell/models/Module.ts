import { RootStackParamList } from "@shell/navigation/model";

export type ModuleScreen = {
  name: keyof RootStackParamList;
  component: React.ComponentType<any>;
};

export type ModuleDefinition = {
  id: string;
  label: string;
  screens: ModuleScreen[];
  init?: () => void;
  dispose?: () => void;
};
