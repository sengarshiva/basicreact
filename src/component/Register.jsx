import React from 'react'
import{Link} from 'react-router-dom'
import '../assets/css/Registration.css'
import image from '../assets/image/img4.webp'

function Register() {
  return (
    <>
    <div className='col-md-5'>
      <img src= {image} className='w-100'/>
    </div>
    <div className='mask d-flex align-item-center h-100 gradient-custom-3'>
      <div className='container h-100'>
        <div className='row d-flex justify-content-center align-items-center h-100'>
          <div className='col-12 col-md-9 col-lg-7 col-xl-6'>
            <div className='card' style={{borderradius:"15px"}}>
              <div className='card-body p-5'>
                <h2 className='text-uppercase text-center mb-5'>Create an account </h2>
                <form action="/insertuser" method='post' encType='mutipart/form-data'>
                <div className='form-outline mb-4'>
                  <input name='n' type="text" className='form-control ' />
                  <label className='form-label'htmlFor='form3Example1cg'>Your Name</label>
                </div>

                <div className='form-outline mb-4'>
                  <input name='e' type="email" className='form-control ' />
                  <label className='form-label'htmlFor='form3Example3cg'>Your Email</label>
                </div>

                <div className='form-outline mb-4'>
                  <input name='p' type="password" className='form-control ' />
                  <label className='form-label'htmlFor='form3Example4cg'>Password</label>
                </div>

                <div className='form-outline mb-4'>
                  <input name='cp' type="password" className='form-control  ' />
                  <label className='form-label'htmlFor='form3Example4cdg'>Repeat Your Password</label>
                </div>

                <div className='form-outline mb-4'>
                  <input name='image' type="file" className='form-control ' />
                  <label className='form-label'htmlFor='form3Example1cg'>Upload Your Image</label>
                </div>

                <div className="d-flex justify-content-center">
                  <button 
                    className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" type="submit" >Register</button>
                </div>

                <p className="text-center text-muted mt-5 mb-0">Have already an account? <a href="#!"
                    className="fw-bold text-body" ><u>Login here</u></a></p>


                </form>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
    
    </>
  )
}

export default Register