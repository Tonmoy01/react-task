import React from 'react';
import { Row, Col } from 'react-bootstrap';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { PillarChart } from './Pilarchart';

ChartJS.register(ArcElement, Tooltip, Legend);
const data = {
  labels: ['Daraz', 'Pickaboo', 'Bikroy'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const Chart = () => {
  return (
    <>
      <Row className='mt-5'>
        <Col>
          <div style={{ width: '300px' }}>
            <Pie data={data} width={100} height={100} />
            {data.labels.map((label, idx) => (
              <div key={idx}>
                {label}: {data.datasets[0].data[idx]}%
              </div>
            ))}
          </div>
        </Col>
        <Col>
          <PillarChart />
        </Col>
      </Row>
    </>
  );
};

export default Chart;
