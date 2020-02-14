import React from 'react';


export default class Reportrowcells extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <tr>
                    <td>{this.props.pid}</td>
                </tr>
            </div>
        )
    }
}