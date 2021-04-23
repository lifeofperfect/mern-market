import React from 'react'

const LoginForm = ({handleSubmit, email, setEmail, password, setPassword}) => {
    return (
        <div>
            <form onSubmit={handleSubmit} className="mt-5">
                <div className="form-group">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        placeholder="Enter email"
                        className="form-control mb-3"
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        placeholder="Enter password"
                        className="form-control mb-3"
                        value = {password}
                        onChange={(e)=> setPassword(e.target.value)}
                     />
                </div>

                <button disabled={!email || !password} className="btn btn-primary btn-lg">Login</button>
            </form>
        </div>
    )
}

export default LoginForm
