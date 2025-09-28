import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resultData = [
  { "id": 1, "name": "Rahim", "chemistry": 78, "physics": 82, "math": 88 },
  { "id": 2, "name": "Karim", "chemistry": 65, "physics": 70, "math": 75 },
  { "id": 3, "name": "Sohel", "chemistry": 90, "physics": 85, "math": 92 },
  { "id": 4, "name": "Nayeem", "chemistry": 60, "physics": 68, "math": 72 },
  { "id": 5, "name": "Hasan", "chemistry": 74, "physics": 80, "math": 77 },
  { "id": 6, "name": "Rakib", "chemistry": 88, "physics": 90, "math": 84 },
  { "id": 7, "name": "Sajid", "chemistry": 92, "physics": 95, "math": 96 },
  { "id": 8, "name": "Tanim", "chemistry": 68, "physics": 72, "math": 70 },
  { "id": 9, "name": "Jahid", "chemistry": 81, "physics": 79, "math": 85 },
  { "id": 10, "name": "Mamun", "chemistry": 55, "physics": 60, "math": 65 }
]

const ResultChart = () => {
    return (
        <div>
            <LineChart width={500} height={500} data={resultData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math" stroke='red'></Line>
                <Line dataKey="chemistry"></Line>
            </LineChart>
        </div>
    );
};

export default ResultChart;