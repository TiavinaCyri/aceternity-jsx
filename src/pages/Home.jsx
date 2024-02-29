import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <div className='space-y-5'>
                <h1 className='font-semibold text-2xl'>List of all components</h1>
                <div>
                    <Link to='/tabs'>
                        <button className='btn btn-primary'>Tabs</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home