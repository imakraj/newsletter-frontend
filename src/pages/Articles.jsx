import React from 'react';
import { FiSearch } from 'react-icons/fi';
import Article from './Article';
import { articlesData } from '../data/articles';
import bg from '../images/mobile-project-2.jpg';

const Articles = () => {
    return (
        <div className='container mx-auto'>
            <section className="py-5 sm:py-10 mt-5 sm:mt-10">
                <div className="text-center">
                    <p className="font-normal text-2xl sm:text-4xl mb-1 text-white">
                        Articles
                    </p>
                </div>

                <div className="mt-10 sm:mt-16">
                    <h3 className="font-normal text-center text-white text-md sm:text-xl mb-3">
                        Search articless by title or filter by category
                    </h3>
                    <div className="flex justify-between border-b border-gray-200 pb-3 gap-3">
                        <div className="flex justify-between gap-2">
                            <span className="hidden sm:block bg-gray-400 p-2.5 shadow-sm rounded-xl cursor-pointer">
                                <FiSearch className="text-gary-400 w-5 h-5"></FiSearch>
                            </span>
                            <input className="font-normal pl-3 pr-1 sm:px-4 py-2 border border-gray-200 rounded-lg text-sm sm:text-md bg-gray-200 text-gray-800"
                                id="name"
                                name="name"
                                type="search"
                                required=""
                                placeholder="Search Projects"
                                aria-label="Name"
                            />
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10'>
                    {
                        articlesData.map((article) => (
                            <Article
                                title={article.title}
                                category={article.category}
                                image={article.img}
                                key={article.id}
                            />
                        ))
                    }
                </div>

                {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
                    <Article 
                    title="Hello"
                    category = "Dev"
                    image = {bg}
                    />
                    
                </div> */}
            </section>
        </div>
    )
}

export default Articles