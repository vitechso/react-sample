import React from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBAnimation  } from "mdbreact";
import Line from './line';
import Stacked from './stacked';
import Column from './column';
import Area from './Area'
const Home = () => {
    return(
        <React.Fragment>
            <section className="back_main">
            <MDBAnimation reveal type="fadeInUp">
            <MDBContainer size="md">
            <MDBRow>
                <MDBCol size="12" md="6" sm="12">
                    <div className="pt-5 pb-5 pr-5 text_managed">
                    <h1>Game Day:</h1>
                    <h2>Real Time Data Collection</h2>
                    <p className="pt-3">Athstat provides all levels of rugby teams with the abilityto easily enter on-field statistics and analyze their data in real time.</p>
                    <p>Artificial Intelligence drives a recommendation engine that gives you a leg up on the opposition.</p>
                    <p>Readily-available reports and visuals help teams to make decisions quickly and not wait for third party applications to send back data</p>
                    <div className="join_us pt-2">
                    <MDBBtn className="join_btns m-0">JOIN US</MDBBtn>
                    </div>
                    </div>
                </MDBCol>
                <MDBCol size="12" md="6" sm="12">
                    <div className="opan_ims">
                        <div>
                            <div className="boll_anima">
                                <img src="img/boll_nami.svg" className="img-fluid" alt="Animate"/>
                            </div>
                        </div>
                        <div className="svg_animations">
                            <img src="img/circle.svg" className="img-fluid" alt="Animate"/>
                        </div>
                        <div className="m-img p-4">
                            <img src="img/_DSC4222_Retouched_Green_No_Logo.png" className="img-fluid" alt="" />
                        </div>
                    </div>
                </MDBCol>  
            </MDBRow>
        </MDBContainer>
        </MDBAnimation>
            </section>

        <section className="back_colors">
        <MDBContainer size="md" className="pt-5 pb-5">
        <MDBRow>
            <MDBCol size="12" md="12">
                <div className="text_managed">
                    <h2 className="text-center text-uppercase">Features</h2>
                </div>
            </MDBCol>
        </MDBRow>
        <MDBRow className="pt-4">
            <MDBCol size="12" md="4" className="mb-3">
            <MDBAnimation reveal type="fadeInUp">
                <div className="inner_boxs">
                    <svg className="top_left" xmlns="http://www.w3.org/2000/svg" width="43" height="49" viewBox="0 0 43 49">
                        <path id="Path_299" data-name="Path 299" d="M0,0H43L5.077,6.687,0,49Z" fill="#333"/>
                    </svg>
                    <svg className="top_right" xmlns="http://www.w3.org/2000/svg" width="49" height="43" viewBox="0 0 49 43">
                        <path id="Path_301" data-name="Path 301" d="M0,0H43L5.077,6.687,0,49Z" transform="translate(49) rotate(90)" fill="#333"/>
                    </svg>

                    <div className="img_inner">
                        <img src="img-icons/Typewriter.svg" className="img-fluid" alt="" />
                    </div>
                    <div className="text_ins">
                        <h3>Real Time Data Entry</h3>
                    </div>
                    <svg className="left_bottom" xmlns="http://www.w3.org/2000/svg" width="49" height="43" viewBox="0 0 49 43">
                        <path id="Path_302" data-name="Path 302" d="M0,0H43L5.077,6.687,0,49Z" transform="translate(0 43) rotate(-90)" fill="#333"/>
                    </svg>

                    <svg className="right_bottom" xmlns="http://www.w3.org/2000/svg" width="43" height="49" viewBox="0 0 43 49">
                        <path id="Path_300" data-name="Path 300" d="M0,0H43L5.077,6.687,0,49Z" transform="translate(43 49) rotate(180)" fill="#333"/>
                    </svg>
                </div>
                </MDBAnimation>
            </MDBCol>

            <MDBCol size="12" md="4" className="mb-3">
            <MDBAnimation reveal type="fadeInUp">
                <div className="inner_boxs">
                <svg className="top_left" xmlns="http://www.w3.org/2000/svg" width="43" height="49" viewBox="0 0 43 49">
                        <path id="Path_299" data-name="Path 299" d="M0,0H43L5.077,6.687,0,49Z" fill="#333"/>
                    </svg>
                    <svg className="top_right" xmlns="http://www.w3.org/2000/svg" width="49" height="43" viewBox="0 0 49 43">
                        <path id="Path_301" data-name="Path 301" d="M0,0H43L5.077,6.687,0,49Z" transform="translate(49) rotate(90)" fill="#333"/>
                    </svg>
                    <div className="img_inner">
                        <img src="img-icons/download.svg" className="img-fluid" alt="" />
                    </div>
                    <div className="text_ins">
                        <h3>Data Hub</h3>
                    </div>
                    <svg className="left_bottom" xmlns="http://www.w3.org/2000/svg" width="49" height="43" viewBox="0 0 49 43">
                        <path id="Path_302" data-name="Path 302" d="M0,0H43L5.077,6.687,0,49Z" transform="translate(0 43) rotate(-90)" fill="#333"/>
                    </svg>

                    <svg className="right_bottom" xmlns="http://www.w3.org/2000/svg" width="43" height="49" viewBox="0 0 43 49">
                        <path id="Path_300" data-name="Path 300" d="M0,0H43L5.077,6.687,0,49Z" transform="translate(43 49) rotate(180)" fill="#333"/>
                    </svg>
                </div>
                </MDBAnimation>
            </MDBCol>

            <MDBCol size="12" md="4" className="mb-3">
            <MDBAnimation reveal type="fadeInUp">
                <div className="inner_boxs">
                <svg className="top_left" xmlns="http://www.w3.org/2000/svg" width="43" height="49" viewBox="0 0 43 49">
                        <path id="Path_299" data-name="Path 299" d="M0,0H43L5.077,6.687,0,49Z" fill="#333"/>
                    </svg>
                    <svg className="top_right" xmlns="http://www.w3.org/2000/svg" width="49" height="43" viewBox="0 0 49 43">
                        <path id="Path_301" data-name="Path 301" d="M0,0H43L5.077,6.687,0,49Z" transform="translate(49) rotate(90)" fill="#333"/>
                    </svg>
                    <div className="img_inner">
                        <img src="img-icons/processor-robotics-brain.svg" className="img-fluid" alt="" />
                    </div>
                    <div className="text_ins">
                        <h3>Visualization and Artificial Intelligence</h3>
                    </div>
                    <svg className="left_bottom" xmlns="http://www.w3.org/2000/svg" width="49" height="43" viewBox="0 0 49 43">
                        <path id="Path_302" data-name="Path 302" d="M0,0H43L5.077,6.687,0,49Z" transform="translate(0 43) rotate(-90)" fill="#333"/>
                    </svg>

                    <svg className="right_bottom" xmlns="http://www.w3.org/2000/svg" width="43" height="49" viewBox="0 0 43 49">
                        <path id="Path_300" data-name="Path 300" d="M0,0H43L5.077,6.687,0,49Z" transform="translate(43 49) rotate(180)" fill="#333"/>
                    </svg>
                </div>
                </MDBAnimation>
            </MDBCol>
        </MDBRow>
    </MDBContainer>
        </section>
        
        <MDBContainer fluid className="p-0">
            <MDBRow className="m-0 box_align_c">
                <MDBCol size="12" md="6" className="p-0">
                    <img src="img/_DSC4235_Retouched_BW_No_Logo.svg" className="img-fluid"/>
                </MDBCol>
                <MDBCol size="12" md="6">
                <MDBAnimation reveal type="fadeInUp">
                    <div className="box_inner_0">
                        <h2>Community</h2>
                        <p>The core features of the app are free – we want you toaccess and use it regardless of your level. All the analysts on your team can enter team data and export reports for free.</p>

                        <p>Email us and we will set your team up with an account and a plac for you to build your own data ecosystem.</p>

                        <p>Our goal is to pair youth rugby teams with professional teams, allowing youth team members to act as data entry stewards for professional teams. This will allow budding rugby players to learn the game. Pro and semi-pro teams will benefit from a large pool of data entry personnel</p>
                    </div>
                    </MDBAnimation>
                </MDBCol>
            </MDBRow>
        </MDBContainer>

        <scetion className="back_colors">
        <MDBContainer className="pt-5 pb-5">
            <MDBRow className="m-0 box_align_c">
                <MDBCol size="12">
                <MDBAnimation reveal type="fadeInUp">
                    <div className="text_managed text-center">
                        <h2 className="text-uppercase">Resources and tools</h2>
                        <p>We provide a solid wiki and knowledge base for people interested in learning both the game of rugby as well as statistical and data analysis. Anyone signing up for the app gets access to free resources including videos, tutorials and articles on the game and how statistics and datahelp teams to augment their performance.</p>
                        <p>Our goal is to grow the game of rugby and provide tools and resources to all levels of the game who want to improve and augment their performance. Contact us for more information and a demo of the app and the services available.</p>
                    </div>
                    </MDBAnimation>
                </MDBCol>
            </MDBRow>

            <MDBAnimation reveal type="fadeInUp">
            <MDBRow className="pt-5">
                <MDBCol size="12" md="5">
                    <div className="graph2">
                        <Stacked></Stacked>
                    </div>
                </MDBCol>
                <MDBCol size="12" md="7">
                    <div className="graph">
                        <Line></Line>
                    </div>
                    <MDBRow className="pt-4">
                        <MDBCol size="12" md="6">
                            <div className="graph3">
                                <Column></Column>
                            </div>
                        </MDBCol>
                        <MDBCol size="12" md="6">
                            <div className="graph4">
                               <Area></Area>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBCol>
            </MDBRow>
            </MDBAnimation>

        </MDBContainer>
        </scetion>

        

  
        </React.Fragment>
        
    )
}
export default Home;