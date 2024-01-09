import React, { useEffect, useState } from 'react';

import Header from './components/header';
import Sidebar from './components/sidebar';
import Content from './components/content';

import { db } from './core/firebase.js';
import { ref, query, onValue, orderByChild, equalTo, get, child } from 'firebase/database';

function App() {

    const [state, setState] = useState({
        classList: [],
        currClassStudents: [],
        currClassId: '',
        currClassInfo: {},
    });

    const classQuery = query(ref(db, "class"));

    useEffect(() => {
        onValue(classQuery, (snapshot) => {
            const records = snapshot.val() || {};
            if (records !== null) {
                const data = Object.values(records);
                const firstClassId = state.currClassId.length > 0 ? state.currClassId : data[0]?.classId;
                handleSelectClass(firstClassId);

                get(child(ref(db), `class/${firstClassId}`)).then((snapshot) => {
                    const classRecords = snapshot.val() || {};
                    if (classRecords !== null) {
                        setState(prev => ({...prev, currClassInfo: classRecords}));
                    };
                });

                setState(prev => ({...prev, classList: data, currClassId: firstClassId}));
            };
        });
    },[]);

    const handleSelectClass = (classId) => {
        get(child(ref(db), "students")).then((snapshot) => {
            const records = snapshot.val() || {};
            if (records !== null) {
                const data = Object.values(records);
                const students = [];
                data.map((item) => {
                    if (item?.classJoin?.includes(classId)) {
                        students.push(item);
                    }
                });

                setState(prev => ({...prev, currClassStudents: students, currClassId: classId}));
            };
        });

        get(child(ref(db), `class/${classId}`)).then((snapshot) => {
            const classRecords = snapshot.val() || {};
            if (classRecords !== null) {
                setState(prev => ({...prev, currClassInfo: classRecords}));
            };
        })
    
    };

    return (
        <div className='flex flex-col w-screen h-screen'>
            <div className='w-full h-[93px] border-b border-[rgb(219,219,219)]'>
                <Header />
            </div>
            <div className='w-full flex items-center flex-grow bg-[#ECECEC]'>
                <div className='h-full w-[30%] ml-4 py-2 mr-4'>
                    <Sidebar 
                        classList={state.classList}
                        currClassId={state.currClassId}
                        handleSelectClass={handleSelectClass}
                    />
                </div>
                <div className='h-full w-[70%] mr-4 py-2'>
                    <Content
                        currClassStudents={state.currClassStudents}
                        currClassInfo={state.currClassInfo}
                    />
                </div>
            </div>
        </div>
    )
}

export default App
