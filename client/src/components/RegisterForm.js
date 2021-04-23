import React from 'react'

const RegisterForm = ({handleSubmit, name, setName, email, setEmail, password, setPassword}) => {
    return (
        <div>
            <form onSubmit={handleSubmit} className="mt-5">
            <div className="form-group">
                <label className="form-label">Name</label>
                <input 
                    type="text"
                    placeholder="Enter name"
                    className="form-control mb-2"
                    value={name}
                    onChange={e=> setName(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label className="form-label">Email</label>
                <input 
                    type="email"
                    placeholder="Enter Email"
                    className="form-control mb-2"
                    value={email}
                    onChange={e=> setEmail(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label className="form-label">Password</label>
                <input 
                    type="password"
                    placeholder="Enter password"
                    className="form-control mb-2"
                    value={password}
                    onChange={e=> setPassword(e.target.value)}
                />
            </div>

            <button disabled={!name || !password || !email} type="submit" className="btn btn-primary btn-lg">Submit</button>
        </form>
        </div>
    )
}

export default RegisterForm
