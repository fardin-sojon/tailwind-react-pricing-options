import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const MarkChart = ({marksPromise}) => {

    const markDataRes = use(marksPromise)
    // console.log(markDataRes);
    const markData = markDataRes.data;
    // console.log(markData);

    // data processing for the chart
    const marksChartData = markData.map(studentData => {
        const student = {
            id: studentData.studentId,
            name: studentData.name,
            physics: studentData.marks.physics,
            chemistry: studentData.marks.chemistry,
            math: studentData.marks.math
        }

        const avg = (student.physics + student.chemistry + student.math) / 3;
        student.avg = avg;
        // console.log(avg);

        return student;
    })

    console.log(marksChartData);

    return (
        <div>
            <BarChart width={500} height={300} data={marksChartData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Bar dataKey="avg" fill='yellow'></Bar>
                <Bar dataKey="chemistry" fill='red'></Bar>
            </BarChart>
        </div>
    );
};

export default MarkChart;