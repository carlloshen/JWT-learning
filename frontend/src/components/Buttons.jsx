function Buttons({login, logout}) {
    return (
        <div className="row">
            <div className="col-md-12 text-center" style={{marginTop: "30px"}}>
                <button onClick={login} className="btn btn-primary" style={{margin: "10px"}}>Login</button>
                <button onClick={logout} className="btn btn-dark" style={{margin: "10px"}}>Logout</button>
            </div>
        </div>
    );
}

export default Buttons;