import "./SectionTitle.css";

interface Props{

title:string;

subtitle:string;

}

const SectionTitle=({

title,

subtitle

}:Props)=>{

return(

<div className="section-title">

<h2>{title}</h2>

<p>{subtitle}</p>

</div>

);

}

export default SectionTitle;