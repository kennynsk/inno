import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { IdeaService } from "./idea.service";
import { IdeaControllerBase } from "./base/idea.controller.base";

@swagger.ApiTags("ideas")
@common.Controller("ideas")
export class IdeaController extends IdeaControllerBase {
  constructor(protected readonly service: IdeaService) {
    super(service);
  }
}
