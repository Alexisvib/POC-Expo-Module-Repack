import { RootStackParamList } from "@shell/navigation/model";

export type ModuleDefinition = {
  name: string;
  label: string;
  screens: {
    name: keyof RootStackParamList;
    component: React.ComponentType<any>;
  }[];
};
