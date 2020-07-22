import React, { useContext, Fragment, useEffect } from 'react'
import highcharts from 'highcharts'
import ReactHighcharts from 'highcharts-react-official'
import FlickerContext from '../../context/flicker/flickerContext'
import setPieData from '../../utils/setPieData'

const Pie = () => {

    const flickerContext = useContext(FlickerContext);
    const { groups } = flickerContext;

    const pieData = setPieData(groups);

    console.log(pieData);

    const options = {
        chart: {
            type: 'pie'
        },
        title: {
            text: ''
        },
        credits: {
            enabled: false
        },
        series: [
            {
                name: 'Photo Count',
                colorByPoint: true,
                data: pieData
            }
        ]
    }

    return (
        <div className='container'>
            { groups.length >= 1 && <ReactHighcharts options={options} highcharts={highcharts} /> }
        </div>
    )
}

export default Pie;