import React from 'react'
import { Link } from 'react-router-dom'

const Article = ({title, category, image}) => {
    return (
        <>
            <Link to="/articles/article" aria-label="Article">
                <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-slate-800">
                    <div className='overflow-hidden rounded-t-xl border-none'>
                        <img
                            src={image}
                            className="scale-110 hover:scale-125 transition-all ease-in-out border-none duration-1000"
                            alt="Article"
                        />
                    </div>
                    <div className="text-center px-4 py-6">
                        <p className="font-normal text-lg md:text-xl text-gray-400 mb-2">
                            {title}
                        </p>
                        <span className="text-lg text-gray-400">
                            {category}
                        </span>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default Article