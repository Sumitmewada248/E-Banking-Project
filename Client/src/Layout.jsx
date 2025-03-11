import {Link,Outlet} from "react-router-dom"



const Layout = () => {
    return (
        <> 
<nav>
        <Link to="home">Home</Link> 
        <Link to="login">Login</Link>
        

</nav>

        <Outlet id="outlet"/>

        
        </>
    );
};  

export default Layout