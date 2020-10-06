import React from 'react'

export default class SanRows extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        let row=[]
        Object.keys(this.props.SanmonReps).map((e,i)=>{row.push(<tr><td>{i+1}</td><td>{this.props.SanmonReps[e].gentime}</td>
       <td><a target='_blank' href={`/#/waterevalreport/${this.props.SanmonReps[e].id}`} ><button >view 
           </button></a></td>                              

 <td>{this.props.SanmonReps[e].mon}</td>
        </tr>)})
        return(
           {row}
        )
    }
}