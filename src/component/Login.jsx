import React from 'react'
import '../assets/css/Login.css'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
      <div className='container-fluid al'>
        <div className='overlay'>
          <div className='card' style={{width:"100%"}}>
            <div className='row' style={{background:'#ff5d512'}}>
              <div className='col-md-5'>
                <h1 className='text-center text-primary mt-4'>Login</h1>
                <form action =''>
                  <div className='mt-4'>
                    <label htmlFor=''>Email</label>
                    <input type="text" name='' id='' placeholder='Enter Your Email' className='form-control' />

                  </div>

                  <div className='mt-4'>
                    <label htmlFor=''>Password</label>
                    <input type="password" name='' id='' placeholder='Enter Your Password' className='form-control' />

                  </div>

                  <div className='mt-4'>
                    <button className='btn btn-primary btn-lg'>Login</button>
                    
                  </div>
                  
                </form>
                <p>New User <Link to='/register'>Register</Link>here</p>
              </div>

            </div>

          </div>


        </div>

      </div>
    </>
  )
}

export default Login