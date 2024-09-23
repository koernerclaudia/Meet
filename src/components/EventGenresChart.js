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
        const radius = outerRadius;
        const x = cx + radius * Math.cos(-midAngle * RADIAN) * 1.07;
        const y = cy + radius * Math.sin(-midAngle * RADIAN) * 1.07;
        return percent ? (
          <text
            x={x}
            y={y}
            fill="#8884d8"
            textAnchor={x > cx ? 'start' : 'end'}
            dominantBaseline="central"
          >
            {`${genres[index]} ${(percent * 100).toFixed(0)}%`}
          </text>
        ) : null;
      };

      const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FFCCEE'];

    return (
            <ResponsiveContainer width="99%" height={400}>
              <PieChart>
              <Pie
         data={data}
         dataKey="value"
         labelLine={false}
         label={renderCustomizedLabel}
         outerRadius={150}>    
         {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]}/>
            ))
          }
         </Pie>     
         <Legend verticalAlign="bottom" height={36}/>
              </PieChart>
            </ResponsiveContainer>
          );
  }

export default EventGenresChart;









//.......

// const data = [
//   { name: 'Group A', value: 400 },
//   { name: 'Group B', value: 300 },
//   { name: 'Group C', value: 300 },
//   { name: 'Group D', value: 200 },
// ];

// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// const RADIAN = Math.PI / 180;
// const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
//   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//   const x = cx + radius * Math.cos(-midAngle * RADIAN);
//   const y = cy + radius * Math.sin(-midAngle * RADIAN);

//   return (
//     <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
//       {`${(percent * 100).toFixed(0)}%`}
//     </text>
//   );
// };

