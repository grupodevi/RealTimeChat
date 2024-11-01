import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import {useDispatch} from "react-redux"
// import { userRegister } from '../store/actions/authAction';

const Register = () => {


  // const dispatch = useDispatch();

  const [state, setstate] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
    image: ''
  })

  const [loadImage,setLoadImage] = useState('');
  const inputHendle = e => {
    setstate({
      ...state,
      [e.target.name]: e.target.value
    })

  }
  const fileHendle = e => {
    if (e.target.files.length !== 0) {
      setstate({
        ...state,
        [e.target.name]: e.target.files[0]
      })
    }

    const reader = new FileReader();
    reader.onload = () => {
      setLoadImage(reader.result);
    }
    reader.readAsDataURL(e.target.files[0]);


  }

  const register = e => {

  e.preventDefault();
  console.log(state);


    // const {userName,email,password,confirmPassword,image} = state;

    

    // const formData = new formData();

    // formData.append('userName',userName)
    // formData.append('email',email)
    // formData.append('password',password)
    // formData.append('confirmPassword',confirmPassword)
    // formData.append('image',image)

    // dispatch(userRegister(formData)) 

    // console.log(state)
  }


  return (
    <div className='register'>
      <div className='card'>
        <div className='card-header'>
          <h3> Kayıt Sayfası </h3>
        </div>

        <div className='card-body'>
          <form onSubmit={register}>
            <div className='form-group'>
              <label htmlFor="username">Kullanıcı Adı</label>
              <input type="text" onChange={inputHendle} name="userName" value={state.userName} className='form-control' placeholder='Kullanıcı Adı' id='username' />
            </div>

            <div className='form-group'>
              <label htmlFor="email">Email</label>
              <input type="email" onChange={inputHendle} name="email" value={state.email} className='form-control' placeholder='Email' id='email' />
            </div>

            <div className='form-group'>
              <label htmlFor="password">Şifre</label>
              <input type="password" onChange={inputHendle} name="password" value={state.password} className='form-control' placeholder='Şifre' id='password' />
            </div>

            <div className='form-group'>
              <label htmlFor="confirmpassword">Şifre Tekrar</label>
              <input type="password" onChange={inputHendle} name="confirmPassword" value={state.confirmPassword} className='form-control' placeholder='Şifre Tekrar' id='confirmpassword' />
            </div>

            <div className='form-group'>
              <div className='file-image'>
                <div className='image'>
                  {loadImage ? <img src ={loadImage}/> : ''}

                </div>
                <div className='file'>
                  <label htmlFor="image">Profil Fotoğrafı</label>
                  <input type="file" onChange={fileHendle} name="image" className='form-control' id='image' />
                </div>
              </div>

            </div>

            <div className='form-group-2'>
              <input type="submit" value="Kayıt Ol" className='btn' />
              <Link to="/login"> Giriş Yap </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
