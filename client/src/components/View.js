import React, { Component } from 'react'

import {NavLink} from 'react-router-dom';
export class View extends Component {
    data=[
    ]
    
    constructor(){
        super();
        
        this.state={
            data:this.data,
            loading:false

        }
    }
    
    async componentDidMount(){
        console.log("cdm");
        let url ="http://localhost:5000/view";
        let data=await fetch(url);
        let parsedData=await data.json()
        console.log(parsedData);
        this.setState({data:parsedData.data})
    }
  
  render() {
    console.log('render')
    return (
      <>
      <div>
        <h1 className='text-center'>Details of the students</h1>
        <div className='container row'> 
        <div class=" col-sm-8 container mt-5">

<div class="row">

  <div class="col-md-8 mx-auto">

  
    <table class="table bg-white rounded border">
        
<thead>
<tr>
<th scope="col">Sno</th>
<th scope="col">Name</th>
<th scope="col">Department</th>
<th scope="col">Email</th>
<th scope="col">Phone</th>
<th scope="col">Address</th>
</tr>
</thead>
<tbody>
{this.state.data.map((element)=>{

return <tr>
  <td>{element.ID}</td>
<td>{element.name}</td>
<td>{element.department}</td>
<td>{element.email}</td>
<td>{element.mobile}</td>
<td>{element.address}</td>


</tr>})}




</tbody>
</table>
    
  </div>
  
</div>


</div>
<div className='col-sm-2 mt-5'>
  <NavLink  to="/"><button className='btn btn-primary'>Add Student</button></NavLink>
</div>
</div>
      </div>
      </>
    )
  }
}

export default View
