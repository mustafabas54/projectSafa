import {useState } from 'react'
import{
    Button,
    Card,
    CardBody,
    CardTitle,
    Input,
    InputGroup,
    InputGroupText,
    Row,
    Col
} from 'reactstrap'
import '../styles/panel.scss'
import { Store } from '../Store'
import { loginData } from '../data/loginData'

const LoginPage = () => {
    const { dispatch } = React.useContext(Store);
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

    const handleChange = e => {
        const { name, value } = e.target
        if(name === 'user'){
            setUser(value)
        }else{
            setPassword(value)
        }
    }

    const login = () => {
        return { type: 'LOGIN', payload: true }
    }

    const handleSubmit = e =>{
       if(user === loginData.user){
            if(password === loginData.password){
                dispatch(login())
            }else{
                alert('Şifre Hatalı!')
            }
        }else{
            alert('Kullanıcı Adı Hatalı!!')
        }
    }
    return(
        <div className='panel-container'>
            <Card className='login-card'>
                <CardBody>
                    <CardTitle>
                        <h2>Panel Giriş</h2>
                    </CardTitle>
                    <Row>
                        <Col sm='12' className='mb-3'>
                            <InputGroup>
                            <InputGroupText className='input-text'>Kullanıcı:</InputGroupText>
                            <Input type='text' value={user} name='user' onChange={handleChange} />
                            </InputGroup>
                        </Col>
                        <Col sm='12' className='mb-3'>
                            <InputGroup>
                            <InputGroupText className='input-text'>Şifre:</InputGroupText>
                            <Input type='password' value={password} name='password' onChange={handleChange}/>
                            </InputGroup>
                        </Col>
                        <Col sm='12' className='mb-3'>
                            <Button color='success' block onClick={handleSubmit}>Giriş Yap!</Button>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </div>
    )
}

export default LoginPage