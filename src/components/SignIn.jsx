import React from 'react'
import Button from './Button'

const SignIn = () => {
  return (
    <div>
        <div className="container w-[68%] h-[200px] bg-postbtn ms-16 mb-20 rounded-md">
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