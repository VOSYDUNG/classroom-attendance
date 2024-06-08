import React from "react";

import { Image } from "antd";

const Student = (props) => {

    const { data, handleModalStudent } = props;

    console.log({data});

    return (
        <div
            className="w-full h-[80px] cursor-pointer flex items-center gap-5 rounded-lg border border-[rgb(198,198,198)] p-2 mb-2 hover:border-[#0096c7] transition-all duration-300"
        >
            <div className="h-full w-20">
                <Image
                    className="!h-full !w-20 !max-w-20 border"
                    src={data?.avt}
                />
            </div>
            <div
                className="h-full flex flex-col justify-between"
                onClick={() => handleModalStudent('edit', data)}
            >
                <div className="text-sm font-medium">{data?.name}</div>
                <div className="flex items-center text-xs gap-2">
                    <div className="flex items-center min-w-[110px]">
                        <div className="mr-2">MSSV:</div>
                        <div className="text-[rgb(25,103,210)] font-semibold">{data?.mssv}</div>
                    </div>
                    <div className="flex items-center min-w-[150px]">
                        <div className="mr-2">Lớp:</div>
                        <div className="text-[rgb(25,103,210)] font-semibold">{data?.class}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Student;