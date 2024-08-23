import react from 'react';

const viewcontactdetails=({contact})={
return(
  <div>
  <h2>contact details</h2>
  <p>name:{contact.name}</p>
  <p>email:{contact.email}</p>
  <p>phone:{contact.phone}</p>
  </div>
  );
};

export default viewcontactdetails;
