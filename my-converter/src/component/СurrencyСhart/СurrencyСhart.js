import React from 'react';
import './СurrencyСhart.css';
import { useSelector } from 'react-redux';
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const СurrencyСhart = () => {

  const arrayLine = useSelector(state => state.arr);

  const newArrayLine = () => {
    const newArr = [];
    for (let i = 0; i < arrayLine.length; i++) {
      newArr.push(arrayLine[i].slice(-1)[0][1]);
    }
    return newArr
  }

  const dateLine = () => {
    const dateArr = [];
    const myDate = new Date();
    dateArr.push(myDate.toLocaleDateString());
    for (let i = 0; i < 13; i++) {
      myDate.setTime(myDate.getTime() - (24 * 60 * 60 * 1000) * 1);
      dateArr.push(myDate.toLocaleDateString())
    }
    return dateArr.reverse();
  }

  const data = {
    labels: dateLine(), //дни
    datasets: [
      {
        label: "Цена за шт.",
        data: newArrayLine(), //цена
        fill: false,
        backgroundColor: "red",
        borderColor: "#880404",
      },
    ],
  };

  const options = {
    legend: {
      display: false,
    },

    maintainAspectRatio: false,

    tooltips: {
      mode: "",
      intersect: false,
      caretSize: 3,
      backgroundColor: "#44200c",
      bodyFontColor: "white",
      borderColor: "#877f72",
      borderWidth: 1,
      displayColors: false,

      callbacks: {
        title() {
          return "";
        },
      },
    }
  };

  return (
    <section className='СurrencyСhart'>
      <Line options={options} data={data} />
    </section>
  );
};

export default СurrencyСhart;