import React from 'react';

const SideCard = ({readingTime, bookMarkItems}) => {
    return (
        <div>
            <div  className="p-4 bg-violet-100 rounded-md text-left mt-5">
                <h1 className="text-2xl font-bold text-violet-700">Spent time on read : {readingTime} min</h1>
            </div>
            <div className="p-4 bg-violet-100 rounded-md text-left mt-6">
                <p className="text-2xl font-bold">Bookmarked blogs : {[bookMarkItems.length]}</p>
                {
                    bookMarkItems.map(bookMarkTitle => {
                        return ( <p key={bookMarkTitle} className='bg-white p-5 rounded-xl my-4'>{bookMarkTitle}</p>)
                    })
                }
            </div>
        </div>
    );
};

export default SideCard;