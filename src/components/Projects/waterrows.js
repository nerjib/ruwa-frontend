import React from 'react'

export default class WaterRows extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        let row=[]
        Object.keys(this.props.monReps).map((e,i)=>row.push(<tr><td>{i+1}</td><td>{this.props.monReps[e].gentime}</td>
                             { this.props.title=='Community Borehole' &&
                            <td><a target='_blank' href={`/#/waterevalreport/${this.props.monReps[e].id}`} ><button >view 
                                </button></a></td>}
                                { this.props.title=='Motorized Solar Borehole' &&
                            <td><a target='_blank' href={`/#/solarevalreport/${this.props.monReps[e].id}`} ><button >view 
                                </button></a></td>}
                      <td>{this.props.monReps[e].mon}</td>
                             </tr>))
        return(
            {row}
        )
    }
}