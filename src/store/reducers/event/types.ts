import { IEvent } from "../../../models/event";
import { IUser } from "../../../models/user";

export enum EventTypes {
    SET_GUESTS = 'SET_GUESTS',
    SET_EVENTS = 'SET_EVENTS'
}

export interface setEvents {
    type: EventTypes.SET_EVENTS,
    payload:IEvent[]
}

export interface setGuests {
    type: EventTypes.SET_GUESTS,
    payload: IUser[]
}

export type EventActionTypes = 
    setGuests |
    setEvents

export interface eventInitialState {
    guests: IUser[]
    events: IEvent[]
}