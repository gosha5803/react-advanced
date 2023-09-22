import { userApi } from "../../api/userService";
import { authReducer } from "./auth/authReducer";
import { eventsReducer } from "./event/eventReducer";

export const allReducers = {
    auth: authReducer,
    event: eventsReducer,
    [userApi.reducerPath]:userApi.reducer
}