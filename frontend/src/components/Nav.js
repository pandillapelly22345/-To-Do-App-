import React from 'react'
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom'

const Nav = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div className='flex justify-center items-center'>
        <div className='flex gap-3 '>
           { !isLoggedIn &&
             <Link to="/">
                <button>
                    Login
                </button>
            </Link>
           }

            { !isLoggedIn &&
                <Link to="/signup">
                    <button>
                        Sign Up
                    </button>
                </Link>
            }

            { isLoggedIn &&
                <Link to="/">
                    <button onClick={() => {
                        setIsLoggedIn(false);
                        toast.success("Logged out successfully.")
                    }}>
                        Log Out
                    </button>
                </Link>
            }

            { isLoggedIn &&
                <Link to="/">
                    <button>
                        Help
                    </button>
                </Link>
            }

        </div>
    </div>
  )
}

export default Nav