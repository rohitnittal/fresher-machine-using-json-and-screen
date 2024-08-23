import React,{usestate,useeffect} from 'react';
import {fetchcontacts} from '../utils/api';

const constantview=()={
  const[contacts,setcontacts]=usestate([]);
  const[loading,setloading]=usestate(true);

useeffect())={
  fetchcontacts().then(data={
    setcontacts(data);
    setloading(false);
    });
};[]);

const handledelete=(id)={
  setcontacts(contacts.filter(contact=contact.id!==id));
};

return(
  <div>
  {loading?(
    <p>loading...</p>
  ):(
    <ul>
  {contacts.map(contact=(
    <li key={contact.id}>
                {contact.name}
<button onclick={()=console.log(edit ${contact.name} )}
<button onclick={()=console.log(view ${contact.name}
details)}>view</button>
  </li>
))}
  </ul>
)}
</div>
);
};

export default ContactView;
