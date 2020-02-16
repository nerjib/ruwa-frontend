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
                        data:[this.props.sanitations,this.props.forcelift,this.props.solarpump,this.props.communitypump],
                        backgroundColor:['red','blue','yellow','green']
                    }]
                }}
                    height='100%'
                />
                
            </div>
    )
    }
}

export default MyPie;