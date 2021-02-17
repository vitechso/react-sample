import React from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBAnimation  } from "mdbreact";
const About = () => {
    return(
        <React.Fragment>
            <section className="banner py-5">
                <div className="text_title">
                    <h1>About us</h1>
                </div>
            </section>

            <MDBAnimation reveal type="fadeInUp">
            <MDBContainer size="md" className="py-5">
            <MDBRow>
                <MDBCol size="12" md="6">
                    <div className="pt-3 pb-5 about-text">
                    <h1>Welcome</h1>
                    <p className="pt-3">Athstat is made up dedicated people with a diverse background
                    focused on bringing analytics and technology to the game of
                    rugby. The company was founded by two sport-loving friends
                    who identified a need for better analytics and data management
                    in the game of rugby. Kisset and Thariq grew up in Harare,
                    Zimbabwe – a place full of sunshine and sporting potential
                    – where they developed their love of sport and entrepreneurial
                    endeavor.</p>
                    <p>As the Athstat product moves along the product roadmap, we
                    want to stray true to the culture that defines the company:
                    ensuring that everyone in the rugby world can access the product
                    regardless of their resources. Most importantly we want to focus
                    on grassroots and the idea that rugby can bring communities
                    together and provide youth with an avenue to express themselves.</p>
                    </div>
                </MDBCol>
                <MDBCol size="12" md="6">
                    <div className="p-4">
                        <img src="img/about-01.png" className="img-fluid" alt="" />
                    </div>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        </MDBAnimation>


        <MDBAnimation reveal type="fadeInUp">
        <MDBContainer fluid className="p-0">
            <MDBRow className="m-0 box_align_c">
                <MDBCol size="12" md="6" className="p-0">
                    <img src="img/about_img.jpg" className="img-fluid"/>
                </MDBCol>
                <MDBCol size="12" md="6">
                    <div className="about_texts p-4">
                        <h2 className="text-uppercase"><span className="textcolor">Kiss</span>et Chirengende</h2>
                        <p className="pt-3">Kisset founded Kyros Sports in 2011. During his time with Kyros
                        Sports, the organization has put together high profile fixtures
                        involving Super Rugby franchises, Vodacom Bulls, Toyota
                        Cheetahs, DHL Stormers, Emirates Lions + Kyros Sports owned
                        invitational side, Zambezi Steelers.</p>

                        <p>In 2020 Kyros Sports facilitated arguably Major League Rugby’s
                        biggest signing, when World Cup winner Beast Mtawarira
                        penned a deal with Washington D.C’s expansion team Old Glory
                        D.C.</p>

                        <p>Kisset graduated from Leeds Beckett University in West
                        Yorkshire, England with a B.A in Sport Business Management.
                        Apart from running Kyros sports, he is also the current head
                        coach of William Paterson University rugby program and has
                        helped lead the Pioneers to three consecutive 7s Tri-State
                        Conference Championships, two 15s Tri-State Conference
                        Championships as well as numerous national title runs as
                        assistant coach and head coach.</p>

                        <div class="socails_about">
                            <ul class="list-unstyled">
                                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        </MDBAnimation>


        <MDBAnimation reveal type="fadeInUp">
        <MDBContainer fluid className="p-0">
            <MDBRow className="m-0 box_align_c">
                <MDBCol size="12" md="6">
                    <div className="about_texts p-4">
                        <h2 className="text-uppercase"><span className="textcolor">Tha</span>riq Kara</h2>
                        <p className="pt-3">Thariq Kara founded NU Borders LLC in 2015, focused on
                        providing advanced analytics, data science and custom software
                        engineering services to the US Government. Customers incude
                        th Department of Defense, Departnent of State, and large and
                        small federal contractors.</p>

                        <p>Prior to founding NU Borders, Thariq was a Government employee
                        with US Immigration and Customs Enforcement (ICE) where he
                        ended his career as the Chief Data Architect for the Agency.</p>

                        <p>Thariq graduated from the Florida Institute of Technology with BSc
                        in Mechanical Engineering, where he also captained the Mens
                        Tennis team competing in the NCAA Division II. He then went on to
                        complete graduate studies at Duke University, completing a Masters
                        in Engineer Management.</p>

                        <div class="socails_about">
                            <ul class="list-unstyled">
                                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </MDBCol>
                <MDBCol size="12" className="p-0" md="6">
                    <img src="img/6K4B4531.jpg" className="img-fluid img_h"/>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        </MDBAnimation>

        <MDBAnimation reveal type="fadeInUp">
        <MDBContainer className="py-5">
            <MDBRow>
                <MDBCol className="bancks py-5" size="12">
                    <div className="text_abioy">
                        <p>Athstat is supported by talented people across the globe. Our goal is to bring the sport of rugby to people across the world and show them how data can augment their game.</p>
                    </div>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        </MDBAnimation>


        </React.Fragment>
    )
}
export default About;