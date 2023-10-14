import Axios from "axios";
import{useState,useEffect} from "react"
function Data(){
    const[record,setrecord]=useState([]);
     useEffect(()=>{
        Axios.get("https://dummyjson.com/users")
        .then((res)=>{
            if(res.status===200){
                setrecord(res.data.users);
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>alert(err));
     },[])
     const List = () => {
        
		return record.map((val)=>{
            
	return <tr>
        <td>{val.id}</td>
        <td><img src={val.image} style={{width:50, height:50}}/></td>
        <td>{val.firstName}</td>
        <td>{val.lastName}</td>
        <td>{val.gender}</td>
        <td>{val.email}</td>
        <td>{val.username}</td>
        <td>{val.domain}</td>
        <td>{val.ip}</td>
        <td>{val.university}</td>
        </tr>
                    
})
}
     return(
        <div>
            <center><h1>Dummy data</h1></center>
            {console.log(record)}
            <table border={0} cellSpacing={3} style={{borderBlock:'1px solid white',borderInline:'1px solid white',margin:20}}>
                <tr>
                    <th style={{borderBottom:'1px solid'}}>Sno</th>
                    <th style={{width:80,borderBottom:'1px solid'}}>Profile Pic</th>
                    <th style={{width:85,borderBottom:'1px solid'}}>First Name</th>
                    <th style={{borderBottom:'1px solid'}}>Last Name</th>
                    <th style={{borderBottom:'1px solid'}}>Gender</th>
                    <th style={{borderBottom:'1px solid'}}>E-mail</th>
                    <th style={{borderBottom:'1px solid'}}>Username</th>
                    <th style={{borderBottom:'1px solid'}}>Domain</th>
                    <th style={{borderBottom:'1px solid'}}>IP</th>
                    <th style={{borderBottom:'1px solid'}}>University</th></tr>
           {List()}
           </table>
        </div>
     )
}
export default Data;