import { useState, useEffect } from 'react';
import { PieChart, Pie, ResponsiveContainer, Cell, Legend } from 'recharts';


const EventGenresChart = ({ events }) => {
   
    const [data, setData] = useState([]);
    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'Angular'];
  
    useEffect(() => {
      setData(getData());
    }, [`${events}`]);
  
    const getData = () => {
        const data = genres.map((genre) => {
          const filteredEvents = events.filter((event) => event.summary.includes(genre));
          return {
            name: genre,
            value: filteredEvents.length
          };
        });
        return data;
      };

      const renderCustomizedLabel = ({ cx, cy, midAngle, outerRadius, percent, index }) => {
        const RADIAN = Math.PI / 180;
        const offset = 50; // 0.5cm offset is roughly 14 pixels
        const radius = outerRadius - offset; // Subtract the offset to position label inside the outerRadius
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
        return percent ? (
          <text
            x={x}
            y={y}
            fill="white" // Set label color to white
            textAnchor="middle" // Center the text
            dominantBaseline="central"
            fontSize="10px" // Smaller font size
            fontWeight="bold" // Bold text
          >
            {`${genres[index]} ${(percent * 100).toFixed(0)}%`} {/* Show label with percentage */}
          </text>
        ) : null;
      };
      


      const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

    return (
            <ResponsiveContainer width="99%" height={300}>
              <PieChart
               margin={{
                top: 10,    // Adjust top margin to reduce space above the chart
                right: 10,  // Optional: Adjust side margins if necessary
                bottom: 0,  // Reduce bottom margin to bring the legend closer
                left: 10,   // Optional: Adjust side margins if necessary
              }}
              >
              <Pie
         data={data}
         dataKey="value"
         labelLine={false}
         label={renderCustomizedLabel}
         outerRadius={120}>    
         {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]}/>
            ))
          }
         </Pie>     
         <Legend width="100%" align="justify" iconSize={10} layout="horizontal"
  verticalAlign="bottom"
  wrapperStyle={{
    fontSize: '10px', // Set a smaller font size
    marginTop: '-10px' // Optional: Adjust the margin to move the legend up
  }}
/>
              </PieChart>
            </ResponsiveContainer>
          );
  }

export default EventGenresChart;