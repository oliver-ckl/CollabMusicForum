import { useState } from 'react'
import style from '../styles/Login.module.css'

function LoginPage () {
	let [loginParam, setLoginParam] = useState({});

	return (
		<>
			<div className={style.main}>
				<h2>Login</h2>
				<div>Email/Username</div>
				<form>
					<input type="email" onChange={(e) => setLoginParam({ ...loginParam, email: e.target.value })}></input>
				</form>
				<div>Password</div>
				<form>
					<input type="password" onChange={(e) => setLoginParam({ ...loginParam, password: e.target.value })}></input>
				</form>
				<button onClick={() => console.log(loginParam)}>Login</button>

			</div>
			<>Login Data : {JSON.stringify(loginParam)}</>
		</>
	);
}

export default LoginPage;