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

import Select, { MultiValue } from 'react-select'
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

interface IOptionSelection {
  label : string;
  value : number[];
}

interface ISeriesData {
  label : string;
  data : number[];
  borderColor : string;
  backgroundColor : string;
}

interface IChartData {
  labels : string[];
  datasets: ISeriesData[] | undefined;
}

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

function ChartSection() {
  const labels : string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'];
  const initialData  : IChartData = {
    labels,
    datasets: [

    ],
  };


  const [chartInput, setChartInput] = useState(initialData) 
  const [selectedOptions, setSelectedOptions] = useState<IOptionSelection[]>();

  function handleSelect(input : MultiValue<IOptionSelection>) { 
    console.log(input)
    setSelectedOptions(input.map(i => i));
  }

  useEffect(() => {

    const o : ISeriesData[] | undefined = selectedOptions?.map((s, i) => (
      {
        label: 'Dataset ' + i,
        data: [Math.random(), Math.random(), Math.random() , Math.random(), Math.random(), Math.random()],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      }
    ))

    setChartInput({
      labels: labels,
      datasets: o
    })
  }, [selectedOptions])

  return (
    <div className="items-center m-1 pt-4 flex-grow">
      <div className="dropdown-container">
        <Select
          options={optionList}
          placeholder="Choose Countries You'd Like The Inflation For"
          value={selectedOptions}
          id="select"
          onChange={handleSelect} 
          isSearchable={true} 
          isMulti />
      </div>

      <Line options={options} data={chartInput} /> 
    </div>
  )
}

export default ChartSection