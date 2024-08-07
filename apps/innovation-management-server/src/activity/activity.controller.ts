import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ActivityService } from "./activity.service";
import { ActivityControllerBase } from "./base/activity.controller.base";

@swagger.ApiTags("activities")
@common.Controller("activities")
export class ActivityController extends ActivityControllerBase {
  constructor(protected readonly service: ActivityService) {
    super(service);
  }
}
