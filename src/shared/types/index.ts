export type WorkStatus = "looking" | "passive" | "not_looking";

export const statusLabels: Record<WorkStatus, string> = {
  looking: "Currently looking for work",
  passive: "Passively looking for work",
  not_looking: "Don't want to hear about work"
};

export interface UserProfile {
  id: string;
  name: string;
  avatar: string;
  workStatus: WorkStatus;
}
