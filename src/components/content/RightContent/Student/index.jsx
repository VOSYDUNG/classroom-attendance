import React from "react";

const Student = (props) => {

    const { data } = props;

    return (
        <div className="w-full h-[80px] flex flex-col justify-between rounded-lg border border-[rgb(198,198,198)] p-2 mb-2">
            <div className="text-sm font-medium">{data?.name}</div>
            <div className="flex justify-between items-center text-sm">
                <div className="flex items-center">
                    <div className="mr-2">MSSV:</div>
                    <div className="text-[rgb(25,103,210)] font-semibold">{data?.mssv}</div>
                </div>
                <div className="flex items-center">
                    <div className="mr-2">Gmail:</div>
                    <div className="text-[rgb(25,103,210)] font-semibold">{data?.gmail}</div>
                </div>
                <div className="flex items-center">
                    <div className="mr-2">Lớp:</div>
                    <div className="text-[rgb(25,103,210)] font-semibold">{data?.class}</div>
                </div>
            </div>
        </div>
    );
};

export default Student;