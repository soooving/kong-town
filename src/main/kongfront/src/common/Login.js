import { Component } from 'react';

/* ? CSS */
import '../assets/css/reset.css'
import '../assets/css/main.css'
import '../assets/css/common.css'

/* ? IMAGE */
import logo from '../assets/image/logo-bean.png';


class Login extends Component {

    render(){
        return (
            <div className={'login'}>
                <div className={'login-logo'}>
                    <img className={'img-logo lg'} src={ logo }  alt={'로고'} />
                </div>
                <div className={'login-area'}>
                    <div className={'login-area-input'}>
                        <ul>
                            <li>아이디</li>
                            <li>
                                <input type={'text'} />
                            </li>
                        </ul>
                        <ul>
                            <li>패스워드</li>
                            <li>
                                <input type={'password'} />
                            </li>
                        </ul>
                    </div>
                    <div className={'login-area-btn'}>
                        <a className={'a-btn login-btn'} href={'/'}>로그인</a>
                    </div>
                    <div className={'login-area-link'}>
                        <div>
                            <a className={'a-text-btn'} href={'/'}>회원가입</a>
                        </div>
                        <div>
                            <a className={'a-text-btn'} href={'/'}>아이디찾기</a>
                            <a className={'a-text-btn'} href={'/'}>비밀번호변경</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;