import './login.css';
const Login = () => {
    return (
        <>
        <div className="login">
    <form>
            <input type="text" placeholder="username"></input>
            <input type="password" placeholder="Enter password"></input>
            <a href="index.html">Forgot Password ?</a>
            <button type="submit">LOGIN</button>
        </form> 
        </div>
        <div className="sign">
            <form>
            <input type="text" placeholder="username"></input>
            <input type="password" placeholder="Enter password"></input>
            <input type="password" placeholder="Confirm password"></input>
            <input type="number" placeholder="Ph No"></input>
            <input type="email" placeholder="Enter email"></input>
            <button type="submit">SIGN UP</button>
            </form>
    </div>
    </>
    )
}

export default Login