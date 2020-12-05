import React from 'react'
import { Pie } from 'react-chartjs-2';



const  AllPie =({labels,zone_a,zone_b,zone_c, backgroundColor,data})=>{
  /* render(){
    let kf={a:'ddd',
   }
let hh=['hh','Kaduna North','Kaduna South','Giwa','Chikun','Igabi','Birnin Gwari', 'Kajuru']
let kk=this.props.labels */

return(
        <div >
         
<Pie
data={{
               //     labels: [kf.],
              // labelthiss: ['Kaduna North','Kaduna South','Giwa','Chikun','Igabi','Birnin Gwari', 'Kajuru'],
labels:  labels,
                    datasets: [{
                        data,
                        backgroundColor
                    }]
                }}
                    height='150%'
                />
                
            </div>
    )
 //   }


}
export default AllPie
/*
const HFire =({zone_a, zone_b,zone_c})=> {
    return(
        <div>
            <Pie
data={{
                    labels: ['Zone A','Zone B','Zone C'],
                    datasets: [{
                        data:[zone_a,zone_b,zone_c],
                        backgroundColor:['red','blue','green']
                    }]
                }}
                    height='100%'
                />
        </div>
    )
}

export {
    HFire
};*/