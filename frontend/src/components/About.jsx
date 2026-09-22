import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

const About = () => {
  return (
    <section className="about" id="about">
        <div className="container">
            <div className="banner">
                <div className="top">
                    <h1 className="heading">About US</h1>
                    <p>The only things we're serious about is food.</p>
                </div>
                <p className='mid'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam unde iusto magnam commodi laborum ea nobis architecto aliquam quibusdam rerum? Laborum, aliquid exercitationem ipsam voluptatem rem vero tenetur et, consectetur eveniet adipisci ipsa praesentium consequuntur asperiores doloribus commodi fuga necessitatibus voluptatibus dignissimos officiis ea quae iste odit! Saepe, quaerat quasi.
                </p>
                <Link to={"/"}>
                <span>
                    <HiOutlineArrowNarrowRight/>
                    </span>
                    </Link>
            </div>
            <div className="banner">
                <img src="/about.png" alt="about"/>
            </div>
        </div>
    </section>
  )
}

export default About