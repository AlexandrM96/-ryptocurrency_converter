import React from 'react';
import './СurrencyСhart.css';
import { ApiRequestCriptoCoins } from '../../api_request/api.reqest';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Line } from "react-chartjs-2";
import store from '../../redux/store';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

ApiRequestCriptoCoins();

const СurrencyСhart = () => {
  const [state, setState] = useState({ array: [], newArray: [] });
  store.subscribe(() => {
    const state = store.getState();
    setState({ array: state.arr });
  });
  // const arr = useSelector(state => state.arr);
  //  console.log(state.array)
  // setState({ array: state.arr });

  const sum = () => {
    const newArr = [];
    for (let i = 0; i < state.array.length; i++) {
      newArr.push(state.array[i].slice(-1)[0][1])
    }
    return newArr
  }

  const date = () => {
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
    labels: date(), //дни
    
    datasets: [
      {
        label: "Цена за шт.",
        data: sum(), //цена
        fill: false,
        backgroundColor: "red",
        borderColor: "#880404",
        fontSize: '10px'
      },
    ],
  };

  const options = {
    legend: {
      display: false,
    },

    maintainAspectRatio: false,

    tooltips: {
      mode: "index",
      intersect: false,
      caretSize: 3,
      backgroundColor: "#44200c",
      bodyFontColor: "#a68156",
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