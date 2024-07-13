import { IdeaWhereInput } from "./IdeaWhereInput";

export type IdeaListRelationFilter = {
  every?: IdeaWhereInput;
  some?: IdeaWhereInput;
  none?: IdeaWhereInput;
};
