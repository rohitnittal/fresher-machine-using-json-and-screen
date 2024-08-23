import react,{usestate} from 'react';
import{validatecontact} from '.../utils/validation';

const addcontact=()={
  const[name,setname]=usestate(");
  const[email,setemail]=usestate(");
  const[phone,setphone]=usestate(");
  const[errors,seterrors]=usestate({});

                                 const handlesubmit=(event)={
                                   event.preventdefault();
                                   const contact={name,email,phone};
                                   const errors=validatecontact(contact);
                                   if(object.keys(errors).length===0){
                                     console.log('contact added successfully!');
                                   }else{
                                     seterrors(errors);
                                   }
                                 };

  return(
    <form onsubmit={handlesubmit}>
    <label>
    name:
    <input type="text"value={name}
  onchange={(event)=setname(event.target.value)}/>
    </label>
  <label>
    email:
        <input type="email"
  value={email} onchange={(event)=setemail(event.target.value)}/>
  </label>
<label>
  phone:
        <input type="text"value={phone}
      onchange={(event)=setphone(event.target.value)}/>
        </label>
      <label>
        <button type="submit">addcontact</button>
{errors && (
  <ul>
  {object.keys(errors).map((error,index)=(
    <li key={index}>{errors[error]}</li>
              ))}
</ul>
)}
</form>
);
};

export default addcontact;

    
                                   
                               
