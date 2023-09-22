import { Moment } from "moment";
import {Dayjs} from 'dayjs'

export interface IEvent {
    author:string,
    date:Dayjs,
    guest:string,
    description:string
}