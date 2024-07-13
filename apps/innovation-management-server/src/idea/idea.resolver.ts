import * as graphql from "@nestjs/graphql";
import { IdeaResolverBase } from "./base/idea.resolver.base";
import { Idea } from "./base/Idea";
import { IdeaService } from "./idea.service";

@graphql.Resolver(() => Idea)
export class IdeaResolver extends IdeaResolverBase {
  constructor(protected readonly service: IdeaService) {
    super(service);
  }
}
