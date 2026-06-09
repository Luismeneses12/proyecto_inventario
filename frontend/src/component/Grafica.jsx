import React from 'react'

import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title  ,
  Tooltip,
  Legend,
} from 'chart.js';

// Registramos los componentes necesarios en Chart.js
ChartJS.register(
  CategoryScale ,
  LinearScale,
  BarElement,
  Title ,
  Tooltip,
  Legend
);

const datosGrafico = {
  labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
  datasets: [
    {
      label: 'Ventas Mensuales',
      data: [5, 19, 5, 8, 23],
      backgroundColor: 'rgba(19, 199, 58, 0.6)',
    },
  ],
};

const opcionesGrafico = {
  responsive: true,
  plugins: {
    legend: { position: 'top' },
    title: { display: true, text: 'grafica venta ' },
  },
};



export default function Grafica() {
  return (
    <> <Bar options={opcionesGrafico} data={datosGrafico}/>
    </>
  )
}
