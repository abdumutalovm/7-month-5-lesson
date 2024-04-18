import { useNavigate } from 'react-router-dom';
import { FaRegMoon } from "react-icons/fa6";
import { CiSun } from "react-icons/ci";
import './style.css';
import { useState, useEffect } from 'react';

function Login() {
    const [dark, setDark] = useState(() => {
        const savedDark = localStorage.getItem('dark');
        return savedDark ? JSON.parse(savedDark) : false;
    });

    useEffect(() => {
        localStorage.setItem('dark', JSON.stringify(dark));
        const body = document.querySelector('body');
        if (dark) {
            body.classList.add('bg-black');
        } else {
            body.classList.remove('bg-black');
        }
    }, [dark]);

    const navigate = useNavigate();

    function handleNav() {
        const isLoggedIn = localStorage.getItem('users');

        if (isLoggedIn) {
            navigate('/home');
        } else {
            alert('You need to sign up first!');
        }
    }

    function handleDark() {
        setDark(prevDark => !prevDark);
    }

    return (
        <div className={dark ? 'container mx-auto bg-black' : 'container mx-auto'}>
            <div onClick={handleDark} className='cursor-pointer w-20 flex mx-auto items-center gap-1'>
                {dark ? <FaRegMoon className='text-2xl text-center cursor-pointer mt-3 mb-3 text-zinc-600' /> : <CiSun className='text-2xl text-center cursor-pointer mt-3 mb-3' />}
                <h1 className={dark ? 'text-md text-zinc-600' : ''}>{dark ? "Dark" : "Light"}</h1>
            </div>

            <div className={dark ? 'bg-[#181818] p-3 w-2/6 w-100 shadow-xl rounded-t-lg mx-auto px-9 py-6' : 'bg-white p-3 w-2/6 w-100 shadow-xl rounded-t-lg mx-auto px-9 py-6'}>
                <h1 className={dark ? 'text-center text-white text-[29px] font-bold' : 'text-center text-[29px] font-bold'}>Welcome back!</h1>
                <div className='flex flex-col'>

                    <label htmlFor="email" className={dark ? 'text-md text-white mb-3' : 'text-md mb-3'}>Email</label>
                    <input type="email" id='email' placeholder='example@site.com' className={dark ? 'bg-[#181818] text-zinc-600 outline-zinc-400 border border-zinc-400 px-3 py-3.5 rounded-xl mb-4 bg-email placeholder:text-[#7D7D7D] bg-no-repeat bg-[15px] indent-9' : 'outline-zinc-400 border border-zinc-400 px-3 py-3.5 rounded-xl mb-4 bg-email placeholder:text-[#7D7D7D] bg-no-repeat bg-[15px] indent-9'} />
                    <label htmlFor="password" className={dark ? 'text-md text-white mb-3' : 'text-md mb-3'}>Choose Password</label>
                    <input type="password" placeholder='Minimum 8 characters' className={dark ? 'bg-[#181818] text-zinc-600 outline-zinc-400 border border-zinc-400 px-3 py-3.5 rounded-xl mb-4 bg-lock placeholder:text-[#7D7D7D] bg-no-repeat bg-[15px] indent-9' : 'outline-zinc-400 border border-zinc-400 px-3 py-3.5 rounded-xl mb-4 bg-lock placeholder:text-[#7D7D7D] bg-no-repeat bg-[15px] indent-9'} />
                    <button onClick={handleNav} className='p-[20px] rounded-xl bg-gradient-to-r from-[#FFA7A7] to-[#FF014E] text-white mt-4 mb-3 transition-all hover:bg-gradient-to-r hover:from-[#FF8394] hover:to-[#FF7089] '>Log in</button>
                    <button className={dark ? 'border border-zinc-800 p-[20px] bg-google bg-no-repeat bg-[65px] transition-all hover:border-zinc-600 rounded-xl mt-2 mb-3 font-semibold text-zinc-300' : "border p-[20px] bg-google bg-no-repeat bg-[65px] transition-all hover:border-zinc-400 rounded-xl mt-2 mb-3 font-semibold text-[#797979]"}>Log in Up with Google</button>
                    <span className={dark ? 'text-center text-white' : 'text-center '}>or log in width <a href="#" className='hover:text-zinc-400 hover:underline'>SSO</a></span>
                </div>
            </div>
            <div className={dark ? 'border bg-[#181818] border-t-zinc-800 border-l-0 border-r-0 border-b-0 text-zinc-400 w-2/6 mx-auto p-4 text-[10px] text-center rounded-b-lg' : 'border bg-white border-t-indigo-200 text-zinc-400 w-2/6 mx-auto p-4 text-[10px] text-center rounded-b-lg'}>
                <p>By lobby the button above, you agree to our <a href="#" className='underline'>Terms of Services</a> and <a href="#" className='underline'>Privacy Policy.</a></p>
            </div>
        </div>
    )
}

export default Login;
