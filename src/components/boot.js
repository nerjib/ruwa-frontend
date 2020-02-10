import React from 'react';

export default class Boot extends React.Component{


    render(){

        return(
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='well'>
                        <div className='row'>
                        <div className='col-md-4'> <button></button></div>
                        <div className='col-md-4'> <button></button></div>
                        <div className='col-md-4'> <button></button></div>
                        <div className='col-md-4'> <button></button></div>

                        </div>


                        </div>

                    </div>
                    <div className='col-md-6'>
                        <div className='well'>
                        <div className='row'>
                        <div className='col-md-2'> <button></button></div>
                        <div className='col-md-2'> <button></button></div>
                        <div className='col-md-2'> <button></button></div>
                        </div>

                        </div>
                        
                    </div>

                    
                </div>
                <form>

    <div class="row">
  <div class="col-xs-7"> 

    <input type="text" class="form-control" placeholder="cat photo URL" required/>
  </div>
  <div class="col-xs-5">
    <button type="submit" class="btn btn-primary"><i class="fa fa-paper-plane"></i> Submit</button>
  </div>

  </div>
  </form>
  <div class="col-xs-8"> <h2 class="text-info text-center">CatPhotoApp</h2>
</div>

            </div>
        )
    }

} 