import { SortOrder } from "../../util/SortOrder";

export type IdeaOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
};
