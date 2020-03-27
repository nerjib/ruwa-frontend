import React from 'react';
import axios from 'axios';

export default class Calender extends React.Component{
    constructor(props){
        super(props)
        this.state={
                day:'',
                month:'',
                title:''
        }
    }

    handleChange=(e)=>{
        const { value, name } = e.target;
        this.setState({
            [name]: value
        });
    }
    handleSubmit=()=>{
//alert(this.state.day)
this.props.onCalender(this.state.day,this.state.month,this.state.title)
    }
    render(){
        return(
            <div>
                  Day<select className='form-control' id='title' name='day' onChange={this.handleChange}>
                <option >...select</option>
                <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value ='3'>3</option>
                    <option value ='4'>4</option>
                    <option value ='5'>5</option>
                    <option value ='6'>6</option>
                    <option value ='7'>7</option>
                    <option value ='8'>8</option>
                    <option value ='9'>9</option>
                    <option value ='10'>10</option>
                    <option value ='11'>11</option>
                    <option value ='12'>12</option>
                    <option value ='13'>13</option>
                    <option value ='14'>14</option>
                    <option value ='15'>15</option>
                    <option value ='16'>16</option>
                    <option value ='17'>17</option>
                    <option value ='18'>18</option>
                    <option value ='19'>19</option>
                    <option value ='20'>20</option>
                    <option value ='21'>21</option>
                    <option value ='22'>22</option>
                    <option value ='23'>23</option>
                    <option value ='24'>24</option>
                    <option value ='25'>25</option>
                    <option value ='26'>26</option>
                    <option value ='27'>27</option>
                    <option value ='28'>28</option>
                    <option value ='29'>29</option>
                    <option value ='30'>30</option>
                    <option value ='31'>31</option>

                    </select>
                    Month                   <select className='form-control' id='title' name='month' onChange={this.handleChange}>
                <option >...select</option>
                <option value= '0' >Jan</option>
                    <option value='1'>Feb</option>
                    <option value ='2'>Mar</option>
                    <option value ='3'>Apr</option>
                    <option value ='4'>May</option>
                    <option value ='5'>Jun</option>
                    <option value ='6'>Jul</option>
                    <option value ='7'>Aug</option>
                    <option value ='8'>Sep</option>
                    <option value ='9'>Oct</option>
                    <option value ='10'>Nov</option>
                    <option value ='11'>Dec</option>
                    </select>
                    <option1/>

                    Category
                    <select className='form-control' id='title' name='title' onChange={this.handleChange}>
                <option >...select</option>
                <option value='Sanitation'>Sanitation</option>
                    <option value='Force Lift'>Force Lift Borehole</option>
                    <option value ='Community Borehole'>Community Borehole</option>
                    <option value ='Motorized Solar Borehole'>Motorized Solar Borehole</option>

                    </select>
        <button onClick={this.handleSubmit}>Search</button>
            </div>
        )
    }


}