import { useEffect, useState } from 'react';
import request from '../axios_helper'

function AuthContext() {

    const [data, setData] = useState([])

    useEffect(() => {
        const requisicao = async () => {
            const req = await request('GET', '/')
            setData(req.data)
        }
        requisicao();
    }, [])

    return (
        <div className='row justify-content-md-center'>
            <div className='col-4'>
                <div className='card' style={{ width: "18rem" }}>
                    <div className='card-body'>
                        <h5 className='card-title'>Backend response</h5>
                        <p className='card-text'>Content:</p>
                        <ul>
                        {data && data.map((line, key) => <li key={key}>{line}</li>)}
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default AuthContext;