import React from "react";

const Login = () => {
	return(
		<section className={`bg-gray-50 content-center grid h-screen justify-center w-screen`}>
			<div className={`bg-white border p-5 max-w-sm rounded shadow`}>
				<h1 className={`text-xl`}>Welcome to the tasks application</h1>
				<p className={`mb-5`}>Please, introduce your data</p>

				<form id="form-login">
					<label for="email">Email</label>
					<input
						id="email"
						name="email"
						type="email"
						className={`border-0 border-b-2 border-gray-200 focus:border-b-slate-700 focus:ring-0 mb-5 px-0.5 w-full`}
					></input>

					<label for="password">Password</label>
					<input
						id="password"
						name="password"
						type="password"
						className={`border-0 border-b-2 border-gray-200 focus:border-b-slate-700 focus:ring-0 mb-5 px-0.5 w-full`}
					></input>

					<button
						className={`bg-violet-800 mb-5 p-2 rounded text-white w-full`}
					>Login</button>
				</form>


				<p>Not registered? sign up <span className={`text-decoration-solid text-violet-900`}><a href="#">here</a></span></p>
			</div>
		</section>
	)
}

export default Login;