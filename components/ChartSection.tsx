import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import Select from 'react-select'
import { useState, useEffect } from 'react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const optionList = [
  { value: [1,2,3], label: "Red" },
  { value: [1,2,3], label: "Green" },
  { value: [1,2,3], label: "Yellow" },
  { value: [1,2,3], label: "Blue" },
  { value: [1,2,3], label: "White" }
];

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: '',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'];

export const initialData = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [1,2,3,4,10,6],
      //borderColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      //backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [1,2,3,4,5,6], 
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

function ChartSection() {

  const [chartInput, setChartInput] = useState(initialData) 
  const [selectedOptions, setSelectedOptions] = useState();

  function handleSelect(input : any) { 
    setSelectedOptions(input);
  }

  useEffect(() => {
    setChartInput(initialData)
  }, [selectedOptions])

  return (
    <div className="items-center m-4">
      <h2>Choose the country: </h2>
      <div className="dropdown-container">
        <Select
          options={optionList}
          placeholder="Select color"
          value={selectedOptions}
          onChange={handleSelect} 
          isSearchable={true} 
          isMulti />
      </div>

      <Line options={options} data={chartInput} /> 
    </div>
  )
}

export default ChartSection