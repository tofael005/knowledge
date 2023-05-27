import React, { useEffect, useState } from 'react';
import Blogs from '../Blogs/Blogs';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Card = ({ setBookMarkItems, bookMarkItems, readingTime, setReadingTime}) => {
    const [card, setCard] = useState([])

    const addBookMark = (title) => {
        const previous = [...bookMarkItems]
        if (previous.includes(title)) {
            toast.error('already added!')
        } else {
            const newBookMark = [...bookMarkItems, title]
            setBookMarkItems(newBookMark)
        }
    }

    const countReadingTime = (blog) => {
        const time = readingTime + blog.readTime;
        setReadingTime(time)
    }

    useEffect(() => {
        fetch('makeData.json')
            .then(res => res.json())
            .then(data => setCard(data))
    }, [])
    return (
        <div className="col-span-2">
            {
                card.map((singleCard) => <Blogs singleCard={singleCard} key={singleCard.id} addBookMark={addBookMark} countReadingTime={countReadingTime}></Blogs>)
            }
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Card;