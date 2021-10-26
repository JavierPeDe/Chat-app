import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import axios from "axios"
import { useState } from "react"

export const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault();
        const authObject = { 'Project-ID': "1cec1eec-fd8c-4c6c-ab83-555ab13c6a7d", 'User-Name': username, 'User-Secret': password }
        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            window.location.reload();
        } catch (error) {
            setError('Incorret credentials.')
        }
    }
    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat App</h1>
                <form onSubmit={handleSubmit}     >
                    <div align='center'>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className='input'
                            placeholder='username'
                        />
                        <div style={{ position: 'relative', }}>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className='input'
                                placeholder='password'
                            />
                            <button type='button' className='eye-button' onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <EyeInvisibleOutlined /> : <EyeOutlined />}
                            </button>
                        </div>
                    </div>
                    <div align='center'>
                        <button className="button">
                            <span>Start</span>
                        </button>
                    </div>
                    <h2 className='error'>{error}</h2>
                </form>

            </div>
        </div >


    )
}

