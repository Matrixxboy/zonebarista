import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from 'chart.js';
import { Radar, Bar } from 'react-chartjs-2';
import SectionLabel from '../common/SectionLabel';
import { domains, files } from '@/data/knowledge';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

export default function AnalyticsCharts() {
  // Process data for Category Density (Bar)
  const categoryLabels = domains.map(d => d.label.split(' ')[0].toUpperCase()); // Short labels
  const categoryData = domains.map(d => {
    return files.filter(f => f.domainId === d.id).length;
  });

  const barData = {
    labels: categoryLabels,
    datasets: [
      {
        label: 'File Count',
        data: categoryData,
        backgroundColor: '#000000',
        borderColor: '#000000',
        borderWidth: 2,
        borderRadius: 0,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { font: { family: 'monospace', weight: 'bold' } },
        grid: { color: 'rgba(0,0,0,0.1)', tickLength: 0 }
      },
      x: {
        ticks: { font: { family: 'monospace', size: 10, weight: 'bold' }, maxRotation: 45, minRotation: 45 },
        grid: { display: false }
      }
    }
  };

  // Process data for Domain Complexity Radar
  const radarData = {
    labels: ['ESPRESSO', 'CHEMISTRY', 'WATER', 'ROASTING', 'OPERATIONS', 'SENSORY'],
    datasets: [
      {
        label: 'Advanced Files',
        data: [
          files.filter(f => f.domainId === 'D03' && f.difficulty === 'advanced').length,
          files.filter(f => f.domainId === 'D06' && f.difficulty === 'advanced').length,
          files.filter(f => f.domainId === 'D07' && f.difficulty === 'advanced').length,
          files.filter(f => f.domainId === 'D08' && f.difficulty === 'advanced').length,
          files.filter(f => f.domainId === 'D11' && f.difficulty === 'advanced').length,
          files.filter(f => f.domainId === 'D09' && f.difficulty === 'advanced').length,
        ],
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        borderColor: '#000000',
        borderWidth: 3,
        pointBackgroundColor: '#ffffff',
        pointBorderColor: '#000000',
        pointHoverBackgroundColor: '#000000',
        pointHoverBorderColor: '#ffffff',
        pointRadius: 5,
        pointBorderWidth: 3,
      },
    ],
  };

  const radarOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      r: {
        angleLines: { color: 'rgba(0,0,0,0.3)' },
        grid: { color: 'rgba(0,0,0,0.3)', circular: false },
        pointLabels: {
          font: { family: 'monospace', size: 11, weight: 'bold' },
          color: '#000000',
        },
        ticks: {
          display: false,
          stepSize: 1
        }
      }
    }
  };

  return (
    <>
      <div className="card p-0 border-4 bg-white">
        <div className="p-4 border-b-4 border-black bg-black text-white flex justify-between items-center">
          <SectionLabel number={2} text="CATEGORY DENSITY" className="text-white" inverted />
        </div>
        <div className="p-6 h-[300px]">
          <Bar data={barData} options={barOptions} />
        </div>
      </div>

      <div className="card p-0 border-4 bg-white">
        <div className="p-4 border-b-4 border-black bg-black text-white flex justify-between items-center">
          <SectionLabel number={3} text="ADVANCED COMPLEXITY" className="text-white" inverted />
        </div>
        <div className="p-6 h-[300px]">
          <Radar data={radarData} options={radarOptions} />
        </div>
      </div>
    </>
  );
}
