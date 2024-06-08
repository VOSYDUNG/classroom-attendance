import React, { useEffect, useState } from "react";

import { Image, Tooltip } from "antd";

import { db } from '../../../../core/firebase.js';
import { ref, get, child } from 'firebase/database';

import IconCheck from '../../../../assets/icons/iconCheck.svg?react';

const CheckinBlock = (props) => {

    const { data } = props;

    const [state, setState] = useState({
        currStudent: {},
    });

    useEffect(() => {
        if (data?.mssv) {
            get(child(ref(db), `students/${data?.mssv}`)).then((snapshot) => {
                const student = snapshot.val() || {};
                if (student !== null) {
                    setState(prev => ({...prev, currStudent: student}));
                };
            })
        };
    },[data]);

    const unixTimeToHourMinutes = (time) => {
        const hours = new Date(time).getHours();
        const minutes = new Date(time).getMinutes();
        return `${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2, '0')}`;
    };

    return (
        <>
            <div className="h-20 p-2 flex w-full border border-[rgb(159,159,159)] rounded-md relative">
                <div className="mr-2 h-full">
                    <Image
                        className="!h-full !w-20 !max-w-20 border"
                        src={data?.avt || state.currStudent?.avt}
                    />
                </div>
                <div className="flex flex-col">
                    <div className="text-blue-500 font-medium">{state.currStudent?.name}</div>
                    <div>{unixTimeToHourMinutes(data?.time)}</div>
                </div>
                {data?.isFace && (
                    <div className="absolute top-1 right-2">
                        <Tooltip
                            placement="top"
                            title={"Đã xác thực khuôn mặt"}
                            arrow={false}
                            color="#333"
                        >
                            <IconCheck className="text-green-500" />
                        </Tooltip>
                    </div>
                )}
            </div>
        </>
    );
};

export default CheckinBlock;