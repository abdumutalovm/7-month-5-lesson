import { useNavigate } from 'react-router-dom';
import { FaRegMoon } from "react-icons/fa6";
import { CiSun } from "react-icons/ci";
import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveUserData } from '../../redux/userSlice';
import './style.css';

function Register() {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passRef = useRef(null);

    const userData = useSelector(state => state.userSlice);

    const dispatch = useDispatch();

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
        const newUser = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passRef.current.value,
        };
        dispatch(saveUserData(newUser));

        let existingUsers = JSON.parse(localStorage.getItem('users')) || [];
        existingUsers.push(newUser);
        localStorage.setItem('users', JSON.stringify(existingUsers));
        navigate('/login');
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
                <h1 className={dark ? 'text-center text-white text-[29px] font-bold' : 'text-center text-[29px] font-bold'}>Let's go!</h1>
                <div className='flex flex-col'>
                    <label htmlFor="name_" className={dark ? 'text-md text-white mb-3' : 'text-md mb-3'}>Full Name</label>
                    <input type="text" ref={nameRef} id='name_' placeholder='John Doe' className={dark ? 'bg-[#181818] text-zinc-600 outline-zinc-400 border border-zinc-400 px-3 py-3.5 rounded-xl mb-4 bg-ava placeholder:text-[#7D7D7D] bg-no-repeat bg-[15px] indent-9' : 'outline-zinc-400 border border-zinc-400 px-3 py-3.5 rounded-xl mb-4 bg-ava placeholder:text-[#7D7D7D] bg-no-repeat bg-[15px] indent-9'} />
                    <label htmlFor="email_" className={dark ? 'text-md text-white mb-3' : 'text-md mb-3'}>Email</label>
                    <input type="email" ref={emailRef} id='email_' placeholder='example@site.com' className={dark ? 'bg-[#181818] text-zinc-600 outline-zinc-400 border border-zinc-400 px-3 py-3.5 rounded-xl mb-4 bg-email placeholder:text-[#7D7D7D] bg-no-repeat bg-[15px] indent-9' : 'outline-zinc-400 border border-zinc-400 px-3 py-3.5 rounded-xl mb-4 bg-email placeholder:text-[#7D7D7D] bg-no-repeat bg-[15px] indent-9'} />
                    <label htmlFor="password_" className={dark ? 'text-md text-white mb-3' : 'text-md mb-3'}>Choose Password</label>
                    <input type="password" id='password_' ref={passRef} placeholder='Minimum 8 characters' className={dark ? 'bg-[#181818] text-zinc-600 outline-zinc-400 border border-zinc-400 px-3 py-3.5 rounded-xl mb-4 bg-lock placeholder:text-[#7D7D7D] bg-no-repeat bg-[15px] indent-9' : 'outline-zinc-400 border border-zinc-400 px-3 py-3.5 rounded-xl mb-4 bg-lock placeholder:text-[#7D7D7D] bg-no-repeat bg-[15px] indent-9'} />
                    <button onClick={handleNav} className='p-[20px] rounded-xl bg-gradient-to-r from-[#FFA7A7] to-[#FF014E] text-white mt-4 mb-3 transition-all hover:bg-gradient-to-r hover:from-[#FF8394] hover:to-[#FF7089] '>Sign Up</button>
                    <button className={dark ? 'border border-zinc-800 p-[20px] bg-google bg-no-repeat bg-[65px] transition-all hover:border-zinc-600 rounded-xl mt-2 mb-3 font-semibold text-zinc-300' : "border p-[20px] bg-google bg-no-repeat bg-[65px] transition-all hover:border-zinc-400 rounded-xl mt-2 mb-3 font-semibold text-[#797979]"}>Sign Up with Google</button>
                    <span className={dark ? 'text-center text-white' : 'text-center '}>or login width <a href="#" className='hover:text-zinc-400 hover:underline'>SSO</a></span>
                </div>
            </div>
            <div className={dark ? 'border bg-[#181818] border-t-zinc-800 border-l-0 border-r-0 border-b-0 text-zinc-400 w-2/6 mx-auto p-4 text-[10px] text-center rounded-b-lg' : 'border bg-white border-t-indigo-200 text-zinc-400 w-2/6 mx-auto p-4 text-[10px] text-center rounded-b-lg'}>
                <p>By clicking the button above, you agree to our <a href="#" className='underline'>Terms of Services</a> and <a href="#" className='underline'>Privacy Policy.</a></p>
            </div>
        </div>
    );
}

export default Register;
