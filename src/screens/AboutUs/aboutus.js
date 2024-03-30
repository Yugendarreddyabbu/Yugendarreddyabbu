import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

const AboutUs = () => {
    return (
        <div>
            <Header/>
            <section className="about pt-4 pt-lg-5">
                <header>
                    <div className="container">
                        <h2 className="title">About Us</h2>
                        <div className="text">
                            <p>Welcome to CAR Service, your trusted partner in automotive care and maintenance. At [Your Company Name], we understand the importance of keeping your vehicle running smoothly and efficiently. With a commitment to excellence and customer satisfaction, we strive to provide top-notch service for all your car servicing needs.</p>
                        </div>
                    </div>
                </header>

                {/* <div className="container-fluid">
                    <div className="image">
                        <img src="assets/images/gallery-2.jpg" alt="Alternate Text" />
                    </div>
                </div> */}

                <div className="container">
                    <div className="row">
                        
                        <div className="col-md-4">
                            <h2>Our Mission</h2>
                            <p>
                            Our mission at CAR Service is to deliver exceptional car servicing solutions that prioritize safety, reliability, and customer convenience. We aim to exceed our customers' expectations by offering personalized service, expert advice, and a hassle-free experience every time they visit us.
                            </p>
                            
                        </div>
                        <div className="col-md-4">
                            <h2>Who We Are</h2>
                            <p>
                            CAR Service is a team of dedicated automotive professionals with years of experience in the industry. From certified technicians to friendly customer service representatives, our staff members are passionate about cars and dedicated to providing the highest quality service to our valued customers.
                            </p>

                        </div>
                   
                    <div className="col-md-4">
                            <h2>What We Offer</h2>
                            <p>
                            At CAR Service, we offer a comprehensive range of car servicing solutions to meet all your needs. Whether you require routine maintenance, repairs, or diagnostics, we have the expertise and resources to get the job done right. Our services<br></br> 
                            include:Regular Maintenance: Oil changes, tire rotations, filter replacements, and more  to keep your vehicle running smoothly.
                            {/* Diagnostics: Advanced diagnostic tools and techniques to identify and address any issues with your vehicle.
                            Repairs: From brakes and suspension to engine and transmission repairs, we have the skills and equipment to tackle any problem.
                            Inspections: Thorough inspections to ensure your vehicle meets safety and emissions standards.
                            Customization: Personalized services to enhance the performance and appearance of your car. */}
                            </p>
                           
                        </div>
                        </div>
                </div>
            </section>

            <section className="team">
                <header>
                    <div className="container">
                        <h2 className="h2 title">Why Choose Us</h2>
                        <div className="text">
                            <p>When you choose [Your Company Name], you can expect:
                            Experienced Professionals: Our team consists of highly skilled technicians who are committed to delivering superior service.
                            Quality Parts: We use only genuine and high-quality parts to ensure the reliability and longevity of your vehicle.
                            Transparent Pricing: We believe in honesty and transparency, so you'll always know what to expect when it comes to pricing and services.
                            Convenient Locations: With multiple locations and flexible appointment scheduling, we make it easy for you to get the service you need, when you need it.
                            Exceptional Customer Service: Our friendly and knowledgeable staff are here to answer your questions and provide guidance every step of the way.</p>
                        </div>
                    </div>
                </header>

                <div className="container">
                    <div className="row">
                        {/* Team members */}
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
};

export default AboutUs;