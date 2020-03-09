import React from 'react'
import { Pie } from 'react-chartjs-2';



class ReportPie extends React.Component{
   render(){
    return(
        <div>
<Pie
data={{
                    labels: ['% remainder','% completion'],
                    datasets: [{
                        data:[100-this.props.stage,this.props.stage],
                        backgroundColor:['red','green']
                    }]
                }}
                    height='100%'
                />
                
            </div>
    )
    }
}

export default ReportPie;