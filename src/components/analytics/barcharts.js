import React from 'react';
import BarChart from 'react-bar-chart'
import { Pie } from 'react-chartjs-2';


export default class Barcharts extends React.Component{


    render(){
        const data = [
            {
                    text: 'Weekly Reports', value:this.props.weeklyreports, backgroundColor:'red'
            },
            {
                    text:'Daily Reports', value:this.props.dailyeports
            }
        ];
        return(
            <div ref='root'>
           {/*     <div>
                    <BarChart width={70} height={70} data={data}  labels={['sanitation','Hand pump']}/>       
                </div>
                */
               <Pie
data={{
                    labels: ['Weekly Reports','Daily Reports'],
                    datasets: [{
                        data:[this.props.weeklyreports,this.props.dailyreports],
                        backgroundColor:['red','blue']
                    }]
                }}
                    height='70%'
                />
                

           }
            </div>

        )
    }

}