import React from 'react'
import { Pie } from 'react-chartjs-2';



class ReportPie extends React.Component{



    checkStatus=(e)=>{
    //    alert(e)
        if (e=='TOS'){
            return(10)
        }
     
        else if(e=='GS'){
            return(25)
        }
        else if(e=='Drilling'){
            return(45)
        }
        else if(e=='PT'){
            return(55)
        }
        else if(e=='FS'){
            return(65)
        }
        else if(e=='ES'){
            return(80)
        }
        else if(e=='ISP'){
            return(85)
        }
        else if(e=='Reticulation'){
            return(90)
        }
             else if(e=='FR'){
            return(100)
        }
       
        else if(e=='Excavation'){
            return(20)
        }
     
        else if(e=='SubS'){
            return(40)
        }
        else if(e=='Finishing'){
            return(80)
        }
        else if (e=='SuperS'){
            return(60)
        }
    }

   render(){
 //      alert(this.props.pstatus)
    return(
        <div>
<Pie
data={{
                    labels: ['% completion','% remainder'],
                    datasets: [{
                        data:[this.checkStatus(this.props.pstatus),100- this.checkStatus(this.props.pstatus)],
                        backgroundColor:['green','red']
                    }]
                }}
                    height='100%'
                />
                
            </div>
    )
    }
}

export default ReportPie;