import React, { useContext, Fragment } from 'react'
import highcharts from 'highcharts'
import ReactHighcharts from 'highcharts-react-official'
import FlickerContext from '../../context/flicker/flickerContext'
import setPieData from '../../utils/setPieData'

const Pie = () => {

    const flickerContext = useContext(FlickerContext);
    const { groups } = flickerContext;

    const pieData = setPieData(groups);

    const options = {
        chart: {
            type: 'pie',
            backgroundColor: 'black',
        },
        title: {
            text: 'Group Photo Count',
            style: {
                color: 'yellow'
            }
        },
        credits: {
            enabled: false
        },
        series: [
            {
                name: 'Photo Count',
                dataLabels: {
                    enabled: true,
                    color: 'white'
                },
                colorByPoint: true,
                data: pieData
            }
        ]
    }

    return (
        <div className=''>
            { groups.length >= 1 && <Fragment>
                <hr/>
                <ReactHighcharts options={options} highcharts={highcharts} />
                <hr/>
            </Fragment> }
        </div>
    )
}

export default Pie;