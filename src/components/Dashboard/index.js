import React from 'react';
import Chat from '../Chat';
import DialogList from '../DialogList'
import MessageArea from '../MessageArea';
import styles from './Dashboard.module.css'

const Dashboard = () => {
    return (
        <main>
            <DialogList/>
            <div>
                <Chat/>
                <MessageArea/>
            </div>
        </main>
    );
}

export default Dashboard;
