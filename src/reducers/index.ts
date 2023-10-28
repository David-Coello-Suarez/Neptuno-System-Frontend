import { AppReducer } from './app'
import { CountrReducer } from './countr'
import { LoggInReducer } from './loggIn'
import { SidebaReducer } from './sidebar'

export const reducer = {
  app: AppReducer,
  loggin: LoggInReducer,
  sideba: SidebaReducer,
  countr: CountrReducer,
}
