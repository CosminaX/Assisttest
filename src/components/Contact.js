import './contacts.css'
const Contact = () => {
  return (
    <div className="formcontact">
      <form className='lista'>
      <label> Name:<input type="text" name="name" /></label>
      <label> Surname:<input type="text" name="name" /></label>
      <label> Phone:<input type="number" name="name" /></label>
      <label> Email:<input type="email" name="name" /></label>
       <input type="submit" value="Submit" className='buton'/>
</form>
      
    </div>
  )
}

export default Contact
