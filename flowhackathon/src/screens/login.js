import './css/login.css'
import googlelogo from './svgs/google.svg'
import facebooklogo from './svgs/facebook.svg'
import applelogo from './svgs/apple.svg'
function Login() {
  return (
    <div className='container'>
      <div class="sign-in-page" >
        <div class="group">
          <div class="welcome">Welcome Back!</div>

          <div className='emailinput'>
            <input className='email' type='email' placeholder='Email'>
            </input>
          </div>
          <div className='passwordinput'>
            <input className='password' type='password' placeholder='Password'>
            </input>
          </div>
          <div className='forgotpassword'>
            <button className='forgot' type='submit'>Forgot your password?</button>
          </div>
          
          <button className='signin' type='submit'>Sign in</button>
          <div className='alternativesignin'>Or continue with</div>
          <div className='socialmedias'>
            <button className='socialmedia'>
              <img class = 'img' src= {googlelogo} alt='google'/>
            </button>
            <button className='socialmedia'>
              <img class = 'img' src= {facebooklogo} alt='facebook'/>
            </button>
            <button className='socialmedia'>
              <img class = 'img' src= {applelogo} alt='apple'/>
            </button>
          </div>
          <div class='noact'>Dont have an account?
            <button className='SignUp' type='submit'>Sign Up</button>
          </div>
          
          
          {/* <div class="social-media">
            <div class="text-wrapper-4">Or continue with</div>
            <img class="img" src="https://c.animaapp.com/XkQgmUU1/img/social-media-1.svg" />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Login;