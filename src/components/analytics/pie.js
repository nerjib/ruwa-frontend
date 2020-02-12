import React from 'react'
import { Pie } from 'react-chartjs-2';



class MyPie extends React.Component{
   render(){
    return(
        <div>
<Pie
data={{
                    labels: ['sanitation','Hand pump','Motorized Solar', 'Community borehole'],
                    datasets: [{
                        data:[2,9,6,5],
                        backgroundColor:['red','blue','yellow','green']
                    }]
                }}
                    height='40%'
                />
                
            </div>
    )
    }
}

export default MyPie;