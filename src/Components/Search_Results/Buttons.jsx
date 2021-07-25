import React from 'react'
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import ArrowDropDownSharpIcon from '@material-ui/icons/ArrowDropDownSharp';
import ClearIcon from '@material-ui/icons/Clear';
import './Buttons.css'
import { useRef,useState } from 'react';
import { CropLandscapeSharp } from '@material-ui/icons';
export const Buttons = ({tag,filters ,setUsers,jobs}) => {
    const [state, setState] = useState(false);
    const [crss, setCrss] =useState(true);
    const [label,setLabel] = useState("")
  const buttref = useRef();
  const options = useRef();

    const handleClick = (e) => {
        setState((prev) => !prev);
    
        console.log(tag);
      };
      const handlein=(e)=>{
        buttref.current.value = e.target.innerText
        let temp = buttref.current.value;
        if(tag == "Date Posted"){
          if(temp.length==12){
          temp = temp.slice(5,7)
          let fData = jobs.filter((el)=>(Number(el.date) <=Number(temp)))
          setUsers(fData)

          }
          else{
           
              temp = temp.slice(5,6)
              let fData = jobs.filter((el)=>(Number(el.date) <=Number(temp)))
          setUsers(fData)
        }
        }
        else if (tag=="Remote"){
          if(temp[0]=="W"){
            let fData = jobs.filter((el)=>(el.remote=="Work From Home"))
            setUsers(fData)
  
          }
          else{
            let fData = jobs.filter((el)=>(el.remote=="Onsite"))
            setUsers(fData)
          }
        }

        else if (tag=="Education level"){
          console.log(temp[0],"kj");
          if(temp[0]=="B"){
            let fData = jobs.filter((el)=>(el.education=="btech"))
            setUsers(fData)
  
          }
          else if(temp[1]=="2"){
            let fData = jobs.filter((el)=>(el.education=="intermediate"))
            setUsers(fData)
          }
          else if(temp[1]=="0"){
            let fData = jobs.filter((el)=>(el.education=="matric"))
            setUsers(fData)
          }
        }

        else if (tag=="Company"){
            let fData = jobs.filter((el)=>(el.companyName==temp))
            setUsers(fData)          
        }

      }
     
    return (
        <div id="parentDiv" >
        <Button ref={buttref} classes={{ root:  ( crss?'button':"butclicked"), label: 'button-label' }}  onClick={handleClick} variant="contained">
          {(label=="")?tag:label} {crss?<ArrowDropDownSharpIcon/>:<ClearIcon style={{width:17}} onClick={()=>{
            setCrss(!crss)
            setUsers(jobs)}}/>}{" "}
        </Button>
        <Paper ref={options} className={state ? "show" : "hidden"} id="expand" variant="outlined" square>
          {
              filters.map((el)=>{
                  return <p value="sdsd" onClick={(e)=>{
                    console.log(e.target.value);
                    handlein(e)
                    setLabel(el)
                    handleClick()
                    setCrss(false)
                  }}>{el}</p>
              })
          }
        </Paper>
      </div>
    )
}
