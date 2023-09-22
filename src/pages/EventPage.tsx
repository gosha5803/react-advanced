import {Button} from 'antd/es'
import { Calendar, Layout, Row, Modal } from 'antd';
import React, { useEffect } from 'react';
import EventForm from '../components/EventForm';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';
import { IEvent } from '../models/event';
import CalendarComponent from '../components/CalendarComponent';

const EventPage: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const {guests, events} = useTypedSelector(state => state.event)
    const {fetchGuests, createEvent, fetchEvents} = useActions()
    const {users} = useTypedSelector(state => state.auth)

    useEffect(() => {
        fetchGuests()
        fetchEvents(users.username)
    }, [])


    
    const showModal = () => {
        setIsModalOpen(true);
    };

    const submitHandler = (event: IEvent) => {
        createEvent(event)
        setIsModalOpen(false)
    }

    return (
        <Layout>
            <CalendarComponent
            events={events}            
            />
            <Row justify='center'
            
            >
                <Button onClick={showModal} type='primary'>
                    Добавить событие
                </Button>
            </Row>
            <Modal title='Добавить событие' open={isModalOpen} footer={null} onCancel={() => setIsModalOpen(false)}>
                <EventForm
                onSubmit={submitHandler}
                guests={guests}
                />
                
            </Modal>
        </Layout>
    );
};

export default EventPage;