import { SortOrder } from "../../util/SortOrder";

export type ActivityOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
};
