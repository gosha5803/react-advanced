import { Moment } from "moment"

export const formatDate = (date: Moment): string => {
    const year = date.year()
    const month = date.month() + 1 > 9 ? date.month() + 1 : `0` + date.month() + 1
    const day = date.date() > 9 ? date.date() : '0' + date.date()
    // console.log(month)
    // const month = newDate.getUTCMonth() + 1
    // const day = newDate.getDay()
    // const newDate = date.toDate()
    // const week = newDate.get
    // return `${year}:${month}:${day}`
    return `${year}:${month}:${day}`
}