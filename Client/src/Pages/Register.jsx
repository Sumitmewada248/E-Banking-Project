



const Registration=()=>{
    return(
 <>

 <h1 id="head">Costumer Registration</h1>

 <div id ="login">
<form action="">
    <label>
        Name:
        <input type="text" name="name" required />
    </label>
    <br />
<label>
    Address:<input type="text" />
</label>
<br />


    <label>
        Email:
        <input type="email" name="email" required />
    </label>
   
    <br />
Enter City :<input type="text"/><br/>
Enter Mobile No :<input type="text"/><br/>
Enter Pincode :<input type="text"/><br/>

    <label>
        Account Type:
        <select name="accountType" required>
            <option value="">Select</option>
            <option value="savings">Savings</option>
            <option value="current">Current</option>
        </select>
    </label>
    <br />
    <button type="submit">Register</button>
</form>
    </div>
    </>

    )
}

export default Registration