import React from 'react'
import { Pie } from 'react-chartjs-2';



class ProPie extends React.Component{
   render(){
    return(
        <div>
<Pie
data={{
                    labels: ['Completed','Abandoned','Ongoing'],
                    datasets: [{
                        data:[this.props.completed, this.props.abandoned, this.props.ongoing,],
                        backgroundColor:['green','red','yellow']
                    }]
                }}
                    height='70%'
                />
                
            </div>
    )
    }
}

export default ProPie;