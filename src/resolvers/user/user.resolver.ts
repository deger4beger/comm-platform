import { Query, Resolver } from "type-graphql"
import { Service } from "typedi"

import { User } from "./user.types"
import { UserService } from "./user.service"

@Service()
@Resolver(User)
export class UserResolver {

  constructor(private userService: UserService) {}

  @Query(_returns => User)
	user(): User {
	  return this.userService.getOne()
	}

}