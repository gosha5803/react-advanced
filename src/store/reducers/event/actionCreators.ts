import { EventActionTypes, EventTypes, setEvents, setGuests } from "./types";
import {IEvent} from '../../../models/event'
import { IUser } from "../../../models/user";
import { AppDispatch } from "../../store";
import { UserService } from "../../../api/UsersService";
import { Dispatch } from "react";
import axios from 'axios'

export const EventActionCreators = {
    setEvents: (payload: IEvent[]): setEvents => ({type: EventTypes.SET_EVENTS, payload}),
    setGusets: (payload: IUser[]): setGuests => ({type: EventTypes.SET_GUESTS, payload}),
    fetchGuests: () => async (dispatch: Dispatch<EventActionTypes>) => {
        try {
            const response = await UserService.getUsers()
            const guests = response.data
            dispatch(EventActionCreators.setGusets(guests))
        } catch (e) {
            console.log(e)
        }
    },
    createEvent: (payload:IEvent) => async (dispatch: Dispatch<EventActionTypes>) => {
        try {
            const events = localStorage.getItem('events') || '[]'
            const json = JSON.parse(events) as IEvent[]
            json.push(payload)
            dispatch(EventActionCreators.setEvents(json))
            localStorage.setItem('events', JSON.stringify(json))

        } catch (e) {
            console.log(e)
        }
    },
    fetchEvents: (username:string) => async (dispatch: Dispatch<EventActionTypes>) => {
        try {
            const eventsJSON = localStorage.getItem('events') || '[]'
            const events = JSON.parse(eventsJSON) as IEvent[]
            const currenUserEvents = events.filter(event => username == event.author || username == event.guest)
            dispatch(EventActionCreators.setEvents(currenUserEvents))
        } catch (e) {
            console.log(e)
        }
    }
}