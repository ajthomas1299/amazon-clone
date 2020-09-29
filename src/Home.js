import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">

            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB42868420_.jpg" alt="" />


                <div className="home__row">

                    <Product
                        id="12121212"
                        title="The Lean Startup: How Today's Entrpreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                        price={16.58}
                        image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                        rating={5} />


                    <Product
                        id="12121222"
                        title="Soft Skills: The Software Developer's Life Manual"
                        price={15.74}
                        image="https://m.media-amazon.com/images/I/51RYWlY9LrL.jpg"
                        rating={5} />

                </div>

                <div className="home__row">
                    <Product
                        id="12122212"
                        title='Made to Stick: Why Some Ideas Survive and Others Die'
                        price={10.75}
                        image="https://m.media-amazon.com/images/I/51IOePlEH-L.jpg"
                        rating={5} />
                    <Product
                        id="12122213"
                        title="Purple Cow, New Edition: Transform Your Business by Being Remarkable"
                        price={14.55}
                        image="https://m.media-amazon.com/images/I/51bi5ayzaKL.jpg"
                        rating={5} />
                    <Product
                        id="12122214"
                        title="Good to Great: Why Some Companies Make the Leap...And Others Don't"
                        price={19.99}
                        image="https://m.media-amazon.com/images/I/41tCQsn8UGL.jpg"
                        rating={4} />
                </div>

                <div className="home__row">
                    <Product
                        id="12123212"
                        title='Eloquent JavaScript, 3rd Edition: A Modern Introduction to Programming'
                        price={25.00}
                        image="https://images-na.ssl-images-amazon.com/images/I/51MSWCvCmcL._SX377_BO1,204,203,200_.jpg"
                        rating={5} />
                    <Product
                        id="12123213"
                        title='Python Crash Course, 2nd Edition: A Hands-On, Project-Based Introduction to Programming'
                        price={17.00}
                        image="https://images-na.ssl-images-amazon.com/images/I/510-dE3N1PL._SX376_BO1,204,203,200_.jpg"
                        rating={5} />
                    <Product
                        id="12123214"
                        title="Learning Web Design: A Beginner's Guide to HTML, CSS, JavaScript, and Web Graphics 5th Edition"
                        price={56.48}
                        image="https://images-na.ssl-images-amazon.com/images/I/51iVcZUGuoL._SX408_BO1,204,203,200_.jpg"
                        rating={4} />
                </div>

                <div className="home__row">
                    <Product
                        id="12124212"
                        title="C# 8.0 and .NET Core 3.0 - Modern Cross-Platform Development: Build applications with C#, .NET Core, Entity Framework Core, ASP.NET Core, and ML.NET using Visual Studio Code, 4th Edition"
                        price={35.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51draL1vcoL._SX404_BO1,204,203,200_.jpg"
                        rating={5} />
                </div>
            </div>
            {/* put footer here */}

        </div>
    )
}

export default Home
