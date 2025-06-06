export type WorkStatus = "looking" | "passive" | "not_looking";

export const statusLabels: Record<WorkStatus, string> = {
  looking: "Currently looking for work",
  passive: "Passively looking for work",
  not_looking: "Don't want to hear about work"
};

type colourStyleType = {
  selected: string;
};

export const colourStyle: Record<WorkStatus, colourStyleType> = {
  looking: {
    selected: "border-green-600 bg-green-50 text-green-800"
  },
  passive: {
    selected: "border-yellow-500 bg-yellow-50 text-yellow-800"
  },
  not_looking: {
    selected: "border-red-600 bg-red-50 text-red-800"
  }
};

export interface UserProfile {
  id: string;
  name: string;
  avatar: string;
  workStatus: WorkStatus;
}
