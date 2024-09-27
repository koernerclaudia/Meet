// src/components/CityEventsChart.js

import { useState, useEffect } from 'react';
import {
  ScatterChart,
  Scatter,
  XAxis, YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';


  const CityEventsChart = ({ allLocations, events }) => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      setData(getData());
    }, [`${events}`]);
  
    const getData = () => {
      const data = allLocations.map((location) => {
        const count = events.filter((event) => event.location === location).length
        const city = location.split((/, | - /))[0]
        return { city, count };
      })
      return data;
    };

    return (
      <ResponsiveContainer width="99%" height={300} >
        <ScatterChart align="center"
          margin={{
            top: 10,
            right: 7,
            bottom: 40,
            left: 0,
          }}
        >
          <CartesianGrid/>
          <XAxis  
          type="category" dataKey="city" name="City"
          angle={60} interval={0} tick={{ dx: 5, dy: 5, fontSize: 10, fontWeight: "400",   textAnchor: "start"}}
        />
    
          <YAxis
  type="number"
  dataKey="count"
  name="Number of events"
  allowDecimals={false}
  tick={{ fontSize: 10 }}  // Providing your own default for tick settings
/>
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter name="A school" data={data} fill="#4e90d8" />
        </ScatterChart>
      </ResponsiveContainer>
    );
  }

export default CityEventsChart;