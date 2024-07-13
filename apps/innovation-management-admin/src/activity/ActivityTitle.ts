import { Activity as TActivity } from "../api/activity/Activity";

export const ACTIVITY_TITLE_FIELD = "id";

export const ActivityTitle = (record: TActivity): string => {
  return record.id?.toString() || String(record.id);
};
