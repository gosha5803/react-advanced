import moment, {Moment} from "moment";

export const rules = {
    required: (message: string = "Обязательное поле") => ({
        required: true,
        message
    }),
    isDateAfter: (message: string) => () => ({
        validator(_: any, value: Moment) {
            if (value.isAfter()) {
                return Promise.resolve()
            }
            console.log('as')
            return Promise.reject(new Error(message));
        }
    })
}