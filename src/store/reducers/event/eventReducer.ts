import { EventActionTypes, EventTypes, eventInitialState } from "./types";

const initialState:eventInitialState = {
    guests:[],
    events:[]
}

export const eventsReducer = (state = initialState, action: EventActionTypes):eventInitialState => {
    switch (action.type) {
        case EventTypes.SET_GUESTS:
            return {...state, guests: action.payload}
        case EventTypes.SET_EVENTS:
            return {...state, events: action.payload}
        default: return state
    }
}