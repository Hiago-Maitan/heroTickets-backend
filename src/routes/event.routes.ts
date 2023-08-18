import { Router } from "express"

class EventRoutes {
  public router: Router
  constructor() {
    this.router = Router()
    this.initRoutes()
  }
  initRoutes() {
    //http://localhost:3333/events/
    this.router.post('/')
  }
}

export { EventRoutes }