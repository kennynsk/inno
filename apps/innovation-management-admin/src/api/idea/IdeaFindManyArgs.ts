import { IdeaWhereInput } from "./IdeaWhereInput";
import { IdeaOrderByInput } from "./IdeaOrderByInput";

export type IdeaFindManyArgs = {
  where?: IdeaWhereInput;
  orderBy?: Array<IdeaOrderByInput>;
  skip?: number;
  take?: number;
};
