import React from 'react'
import Button from './Button'

const SignIn = () => {
  return (
    <div>
        <div className="container w-[90%] h-[300px] md:w-[68%] md:h-[200px] ms-5   bg-postbtn md:ms-16 my-20 rounded-md">
            <div className='flex flex-col text-center pt-10'>
            <h2 className='text-white text-[25px] font-larsseit font-normal'>Kijiji’s better when you’re a member</h2>
            <p className='text-white text-[16px] font-larsseit font-normal'>See more relevant listings, find what you’re looking for quicker, and more!</p>
            <Button text="Sign in" />
            </div>
        </div>
    </div>
  )
}

export default SignIn