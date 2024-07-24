import React from 'react'
import Header from './Header'
import Footer from './Footer'
import image from '../assets/image/stu-grp-gr-001.jpg'
import image1 from '../assets/image/University-of-Greenwich-Picutre-3.jpg'

function About() {
  return (
    <>
      <Header />
      <img src={image} alt='' className='w-100' />
      <br />

      <div className='container'>
        <h1 style={{ textAlign: "center", fontweight: "bold" }}>ABOUT</h1>
        <div className='row'>
          <div className='col-md-6'>
            <p className="a">Students from more than 140 countries choose to study at university, and over 1 in 5 of our students come from outside the United Kingdom.

              Not only are classes intellectually stimulating, they are also taught on campuses steeped in history;  Campus, for example, is part of the Old Royal Naval College, established by Royal Charter in 1694,

              By studying with us, you will gain an in-depth understanding of British society and culture by living and studying alongside British students, and you will be able to experience London, one of the world's great capital cities.

              We work hard to ensure that Study Abroad and Erasmus+ students are well-supported before, during and after their studies and are integrated into the Greenwich community as soon as they arrive. Additionally, students can choose to live in on-campus accommodation at one of the three campuses providing you with a great way to meet new friends during your stay with us.

              If you're looking for an ideal location to study abroad, stimulating academic courses, and a chance to experience London, the best city in the world for university students, get in touch today!</p>

          </div>
          <div className='col-md-6'>
            <img src={image1} alt="" />

          </div>

        </div>

      </div>
      <Footer />
    </>
  )
}

export default About