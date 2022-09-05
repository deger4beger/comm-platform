import { Service } from "typedi"

@Service()
export class UserService {

  getOne() {
    return {
    	id: "id",
    	email: "email",
    	password: "mypw",
      phone: "7778877887"
    }
  }

}