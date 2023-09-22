import { authReducer } from "./auth/authReducer";
import { eventsReducer } from "./event/eventReducer";

export const allReducers = {
    auth: authReducer,
    event: eventsReducer
}