import React from 'react';
import BarChart from 'react-bar-chart'
import { Pie } from 'react-chartjs-2';


export default class Barcharts extends React.Component{


    render(){
        const data = [
            {
                    text: 'Ongoing Projects', value:this.props.ongoing, backgroundColor:'red'
            },
            {
                    text:'Reports Received', value:this.props.allreports
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
                    labels: ['Ongoing Project','Report received this week'],
                    datasets: [{
                        data:[this.props.ongoing,this.props.allreports],
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