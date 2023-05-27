import React from 'react';

const Blogs = ({singleCard, countReadingTime, addBookMark}) => {
    const { coverImgUrl, authorImgUrl, publishDate, authorName, blogTitle, readTime } = singleCard;
    return (
        <div>
            <div className="w-full bg-base-100 shadow-xl rounded-md mx-auto mb-6">
                <figure className="p-4">
                    <img className="rounded-md w-full" src={coverImgUrl} alt="Shoes" />
                </figure>

                <div className='flex justify-between items-center px-4'>
                    <div className='flex gap-4 items-center'>
                        <img className="w-12 rounded-full my-2" src={authorImgUrl} alt="" />
                        <div className="text-left">
                            <p className='font-bold md:text-md text-lg'>{authorName}</p>
                            <small className="text-gray-500"><p>{publishDate}</p></small>
                        </div>
                    </div>

                    <div className="flex text-gray-500">
                        <p>{readTime} min</p>
                        <button onClick={() => addBookMark(blogTitle)} className='ml-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                        </svg>
                        </button>
                    </div>
                </div>

                <div className="text-left px-4">
                    <h2 className="text-2xl font-bold py-2">{blogTitle}</h2>
                    <p className="text-gray-500 ">#programming &nbsp; #beginners</p>
                    <div className=" text-violet-600 font-semibold underline py-4">
                        <a onClick={() => countReadingTime(singleCard)} href="#">Mark as read</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;