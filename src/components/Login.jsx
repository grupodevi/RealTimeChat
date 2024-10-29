import React from 'react'
import { Link } from 'react-router-dom';

const login = () => {
  return (
    <div className='register'>
      <div className='card'>
        <div className='card-header'>
          <h3> Giriş Sayfası </h3>
        </div>

        <div className='card-body'>
          <form>
            <div className='form-group'>
              <label htmlFor="email">Email</label>
              <input type="email" className='form-control' placeholder='Email' id='email' />
            </div>

            <div className='form-group'>
              <label htmlFor="password">Şifre</label>
              <input type="password" className='form-control' placeholder='Şifre' id='password' />
            </div>

            <div className='form-group-2'>
              <input type="submit" value="Giriş Yap" className='btn' />
              <Link to="/register"> Kayıt Ol </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default login