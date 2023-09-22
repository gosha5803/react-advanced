import React, { FC, useState } from 'react';
import {Form, Input, DatePicker, Row, Select, Button} from 'antd'
import { IUser } from '../models/user';
import { rules } from '../utils/rules';
import { IEvent } from '../models/event';
import { formatDate } from '../utils/date';
import type {Dayjs} from 'dayjs'
import { useTypedSelector } from '../hooks/useTypedSelector';

interface EventFormProps {
    guests:IUser[],
    onSubmit: (event: IEvent) => void
}

const EventForm: FC <EventFormProps> = ({guests, onSubmit}) => {
    const [event, setEvent] = useState<IEvent>({
        author:'',
        date:'',
        guest:'',
        description:''
    })
    const {users} = useTypedSelector(state => state.auth)

    const selectDate = (date: Dayjs | null) => {
        if(date) {
            setEvent({...event, date:formatDate(date)})
        }
    }

    const finishHandler = () => {
        onSubmit({...event, author:users.username})
    }

    return (
        <Form
        onFinish={finishHandler}
        >
            <Form.Item
                label="Событие"
                name="Событие"
                rules={[rules.required('Укажите название!')]}
                >
                <Input
                onChange={(e) => setEvent({...event, description: e.target.value})}
                />
            </Form.Item>
            <Form.Item
                label="Дата события"
                name="date"
                rules={[rules.required(), 
                    rules.isDateAfter("Можно планровтаь лишь на будущее))")
                ]}
            >
                <DatePicker
                    onChange={(date) => selectDate(date)}
                />
            </Form.Item>

            <Form.Item
                label='Выберите гостя'
                rules={[{required:true}]}
                >
                    <Select
                    onChange={(guest:string) => setEvent({...event, guest:guest})}
                    defaultValue='Choose guest'
                    style={{ width: 240 }}
                    >
                        {guests.map(guset => {
                            if (guset.username !== users.username) {
                                return(
                            <Select.Option value={guset.username} key={guset.username}>
                                {guset.username}
                            </Select.Option>
                                )
                            }
                        })}
                    </Select>
            </Form.Item>

            <Row justify="end">
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Создать
                    </Button>
                </Form.Item>
            </Row>
        </Form>
    );
};

export default EventForm;