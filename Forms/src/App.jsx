export default function App(){
  
  function handleData(formData){
    const email=formData.get("email");
    const pass=formData.get("password");
    alert(email + pass);
  }
  
  function handleSem(formData){
    const option = formData.get("sem");
    alert(option);
  }
  
  function handleSub(formData){
    const passed = formData.getAll("sub");
    alert(passed);
  }
  
  return(
    <>
     <section className="login">
       <form action={handleData}>
       <h1>Login Form</h1>
         <label htmlFor="email">Username :</label>
         <input 
         id="email" 
         type="email" 
         name="email"
         defaultValue="vraodev@gmail.com"
         />
         <br />
         <label htmlFor="password">password :</label>
         <input 
         id="password" 
         type="password" 
         name ="password"
         defaultValue="123456799"
         />
         
         <br/>
         <button>Log In</button>
       </form>
     </section>
     
     
     
     <section  className="checkbox">
       <fieldset>
         <legend>Current Semester</legend>
         <form action={handleSem}>
         <label htmlFor="sem1">1 st 
         <input 
         type="radio"
         name="sem"
         id="sem1"
         value="sem1"
         defaultChecked={true}
         /></label>
         <label htmlFor="sem2">2 st
         <input 
         type="radio"
         name="sem"
         id="sem2"
         value="sem2"
         />
         </label>
         <label htmlFor="sem3">3 st
         <input 
         type="radio"
         name="sem"
         id="sem3"
         value="sem3"
         
         />  </label>    
         <button>Submit</button>
       </form>
       </fieldset>

     </section>
     
     
     <section className="checkbox">
     <fieldset >
        <legend>Subjectd Passed</legend>
       <form action={handleSub}>
         <label > 
         <input 
         type="checkbox"
         name="sub"
         id="m1"
         value="M1"
         defaultChecked="true"
         />M1</label>
         <label htmlFor="m2">
         <input 
         type="checkbox"
         name="sub"
         id="m2"
         value="M2"
         />M2</label>
         <label htmlFor="m3">
         <input 
         type="checkbox"
         name="sub"
         id="m3"
         value="M3"
         
         /> M3 </label>    
         <button>Submit</button>
       </form>
     </fieldset>
     </section>
     
     </>
    )
}