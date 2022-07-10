import React ,{useState} from 'react'
import {NavLink, useNavigate } from 'react-router-dom';
const Table = () => {
    const navigate=useNavigate();
    const [student,setStudent]=useState({
        name:"", department:"", email:"", mobile:"", address:""
    }); 
    let name,value;
    const handleInputs=(e)=>{
        console.log(e);
        name=e.target.name;
        value=e.target.value;

        setStudent({...student,[name]:value});
    }
    const PostData= async (e)=>{
        e.preventDefault(); 

        const {name, department, email, mobile, address}=student;

       const res=await fetch("/view",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name:name,department:department,email:email,mobile:mobile,address:address
        })
       });
       const data =await res.json();
        if(res.status===400|| !data){
            window.alert("Not submited")
        }
        else{
            window.alert("Data Submited");

            navigate("/details");
        }
    }
  return (
    <div>
       <div class="row d-flex justify-content-center">
        <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
            <h3>welcome to the form</h3>
            <p class="blue-text">Fill the students details here</p>
            <div class="card">
                <h5 class="text-center mb-4">Add Student</h5>
                <form class="form-card" method='POST'>
                    <div class="row justify-content-between text-left">
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Name<span class="text-danger"> *</span></label> <input type="text" id="name" name="name" placeholder="Enter your name" onblur="validate(1)" 
                        value={student.name}
                        onChange={handleInputs}
                        required/> </div>
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Department<span class="text-danger"> *</span></label> <input type="text" id="department" name="department" placeholder="Enter your Department" onblur="validate(2)"
                        value={student.department}
                        onChange={handleInputs}
                        /> </div>
                    </div>
                    <div class="row justify-content-between text-left">
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Email<span class="text-danger"> *</span></label> <input type="text" id="email" name="email" placeholder="" onblur="validate(3)" 
                        value={student.email}
                        onChange={handleInputs}/> </div>
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Phone number<span class="text-danger"> *</span></label> <input type="text" id="mobile" name="mobile" placeholder="" onblur="validate(4)" 
                        value={student.mobile}
                        onChange={handleInputs}/> </div>
                    </div>
                    <div class="row justify-content-between text-left">
                        <div class="form-group  flex-column d-flex"> <label class="form-control-label px-3">Address<span class="text-danger"> *</span></label> <input type="text" id="address" name="address" placeholder="" onblur="validate(5)"
                        value={student.address}
                        onChange={handleInputs}/> </div>
                    </div>
                    
                    <div class="row justify-content-end">
                        <div class="form-group "> <button type="submit" onClick={PostData} class="btn btn-primary">Submit</button> </div>
                        
                    </div>
                    <NavLink to='/details'><button  className='btn btn-primary'>view details</button></NavLink>
                </form>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Table
