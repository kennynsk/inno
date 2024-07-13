import { Idea as TIdea } from "../api/idea/Idea";

export const IDEA_TITLE_FIELD = "id";

export const IdeaTitle = (record: TIdea): string => {
  return record.id?.toString() || String(record.id);
};
