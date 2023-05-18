import React, {useState} from "react";
import ArrowDropUpIcon  from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import "./style.css";

export default function App() {
  const [count, setCount] = useState(0)
  return (
    <div className='mainBox'>
      <ArrowDropUpIcon sx={{ fontSize: '10rem', cursor:'pointer'}} onClick = {()=>setCount(count+1)}/>
      <div className='middle'>
        <ArrowLeftIcon sx={{ fontSize: '10rem', cursor:'pointer'}} onClick = {()=>setCount(count-10)}/>
      <span>{count}</span>
        <ArrowRightIcon sx={{ fontSize: '10rem', cursor:'pointer'}} onClick = {()=>setCount(count+10)}/>
      </div>
      <ArrowDropDownIcon sx={{ fontSize: '10rem', cursor:'pointer'}} onClick = {()=>setCount(count-1)}/>
    </div>
  );
}
