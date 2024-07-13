import { ActivityWhereInput } from "./ActivityWhereInput";
import { ActivityOrderByInput } from "./ActivityOrderByInput";

export type ActivityFindManyArgs = {
  where?: ActivityWhereInput;
  orderBy?: Array<ActivityOrderByInput>;
  skip?: number;
  take?: number;
};
