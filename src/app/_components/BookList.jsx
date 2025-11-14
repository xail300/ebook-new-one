import Image from 'next/image'
import React from 'react'

const listContent = [
    {
        image: "/assets/images/book-icon.png",
        title: "Autobiography",
        desc: "We are naturally curious and seek for innovative, original and sometimes unconventional ways. Our intuitive and foresighted development approach allows us to create flexible digital solutions that endure the test of time."
    },
    {
        image: "/assets/images/book-icon.png",
        title: "Business",
        desc: "We are naturally curious and seek for innovative, original and sometimes unconventional ways. Our intuitive and foresighted development approach allows us to create flexible digital solutions that endure the test of time."
    },
    {
        image: "/assets/images/book-icon.png",
        title: "Fiction",
        desc: "We are naturally curious and seek for innovative, original and sometimes unconventional ways. Our intuitive and foresighted development approach allows us to create flexible digital solutions that endure the test of time."
    },
    {
        image: "/assets/images/book-icon.png",
        title: "Mystery Book",
        desc: "We are naturally curious and seek for innovative, original and sometimes unconventional ways. Our intuitive and foresighted development approach allows us to create flexible digital solutions that endure the test of time."
    },
    {
        image: "/assets/images/book-icon.png",
        title: "Non-Fiction",
        desc: "We are naturally curious and seek for innovative, original and sometimes unconventional ways. Our intuitive and foresighted development approach allows us to create flexible digital solutions that endure the test of time."
    },
    {
        image: "/assets/images/book-icon.png",
        title: "Novel Writing",
        desc: "We are naturally curious and seek for innovative, original and sometimes unconventional ways. Our intuitive and foresighted development approach allows us to create flexible digital solutions that endure the test of time."
    },
    {
        image: "/assets/images/book-icon.png",
        title: "Self Help",
        desc: "We are naturally curious and seek for innovative, original and sometimes unconventional ways. Our intuitive and foresighted development approach allows us to create flexible digital solutions that endure the test of time."
    },
]

const BookList = () => {
    return (
        <>
            {
                listContent?.map((item, i) => (
                    <div className="book-list-inner" key={i}>
                        <Image src={item.image} alt={item.title} title={item.title} width={26} height={36} />
                        <span>{item.title}</span>
                        <div className="book-hover">
                            <Image src={item.image} alt="" width={26} height={36} />
                            <h4>{item.title}</h4>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default BookList
