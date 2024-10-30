import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='md:mx-10'>
            <div className='flex  flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

                {/* ----- Left Section ----- */}
                <div>
                    <img className='mb-5 w-40' src={assets.logo} alt="" />
                    <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore architecto laudantium, tempore magnam distinctio, fuga quia, delectus dignissimos molestias nemo commodi atque corporis debitis incidunt ipsam dolorum facere nulla expedita.</p>
                </div>

                {/* ----- Center Section ----- */}
                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flext flex-col gap-2 text-gray-600'>
                        <NavLink onClick={() => setShowMenu(false)} to='/'><li>Home</li></NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to='/doctors'><li>About</li></NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to='/about'><li>Contact us</li></NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to='#'><li>Privacy policy</li></NavLink>
                    </ul>
                </div>

                {/* ----- Right Section ----- */}
                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flext flex-col gap-2 text-gray-600'>
                        <li>+84-365-142-649</li>
                        <li>lequythien1@gmail.com</li>
                    </ul>
                </div>
            </div>

            {/* ----- Copyright Text ----- */}
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 10/2024@ Prescripto - Phòng Khám Sức Khỏe.</p>
            </div>
        </div>
    )
}

export default Footer