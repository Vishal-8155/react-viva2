import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

export const LocalStorage = () => {

     const [initialInfo] = useState({ name: "", email: "", password: "", address: "", mo_number: "" });
     const [array, setArr] = useState(JSON.parse(localStorage.getItem("Array")) || []);
     const [info, setInfo] = useState(initialInfo);
     
     const convert = (e) => {
          console.log(e.target);
          setInfo({ ...info, [e.target.name]: e.target.value });
     }

     const submit = (e) => {
          
          setArr([...array, info]);
          

          localStorage.setItem("Array", JSON.stringify(array));
          setInfo(initialInfo);


          localStorage.setItem("Array", JSON.stringify([...array, info]));
          if (!info.name || !info.email || !info.password || !info.address || !info.mo_number) {
               alert("Please Enter all the fields");
               return;
          }
     }

     const Delete = (index) => {
          const newArray = [...array];
          newArray.splice(index, 1);
          setArr(newArray);
          localStorage.setItem("Array", JSON.stringify(newArray));
     }

     const searchdata = (val) => {

          if(val !== ''){

               let data = array.filter((i)=>{

                    if(i.name.includes(val)){

                         return i;

                    }

               })

               setArr(data);


          }else{

               setArr(JSON.parse(localStorage.getItem("Array")));

          }

     }

     const navigate = useNavigate();

     return (
          <>
               <div>
                    <ul>
                         <li>
                              <Link to='/'>Home</Link> <br />
                         </li>
                    </ul>
                <button type="button" onClick = {()=>navigate(-1)}>Back</button>
                <button type="button" onClick = {()=>navigate(1)}>Next</button>
                    <form action="" className="text-center mt-5 text-light">
                         <label htmlFor="name">Name : </label>
                         <input type="text" name="name" id="name" placeholder="Enter Name" required value={info.name} onChange={convert} />
                         <br /><br />
                         <label htmlFor="email">Email :</label>
                         <input type="email" name="email" id="email" placeholder="Enter Email" required value={info.email} onChange={convert} />
                         <br /><br />
                         <label htmlFor="password" >Password :</label>
                         <input type="password" name="password" id="password" placeholder=" Enter Password" required value={info.password} onChange={convert} />
                         <br /><br />
                         <label htmlFor="address" >Address : </label>
                         <input type="text" id="address" name="address" required value={info.address} onChange={convert} placeholder="Enter Address" />
                         <br /><br />
                         <label htmlFor="mo_number" >Mobile Number : </label>
                         <input type="number" id="mo_number" name="mo_number" required value={info.mo_number} onChange={convert} placeholder="Enter Mobile" />
                         <br /><br />
                         <button type="submit" onClick={submit} >Submit</button>
                    </form >
               </div>
               <input type="text" placeholder="Search" name="search" onChange={(e)=>searchdata(e.target.value)}/>
               <table>
                    <thead>
                         <th>Name</th>
                         <th>Email</th>
                         <th>Password</th>
                         <th>Address</th>
                         <th>Mobile Number</th>
                         <th>Action</th>
                    </thead>
                    <tbody >
                         {array.map((item, index) => {
                              return (
                                   <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.password}</td>
                                        <td>{item.address}</td>
                                        <td>{item.mo_number}</td>
                                        <td><button onClick={() => Delete(index)}>Delete</button>
                                        </td>
                                   </tr>
                              )
                         })}
                    </tbody>
               </table>
          </>
     )
}

export default LocalStorage;