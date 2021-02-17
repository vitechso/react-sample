import React, { Fragment } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBAnimation  } from "mdbreact";
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const faqs = () => {
    return(

        <React.Fragment>

            <section className="banner py-5">
                <div className="text_title">
                    <h1>FAQS</h1>
                </div>
            </section>

            <MDBAnimation reveal type="fadeInUp">
            <MDBContainer size="md" className="py-5">
                <MDBRow>
                    <MDBCol size="12" md="6">
                        <div className="pt-3 about-text">
                        <h1>Why Athstat</h1>
                        <h3 className="pros">For Professional Teams:</h3>
                        <div className="dots_n">
                        <p className="pt-3"><i class="fas fa-circle"></i> Real time data collection – you don’t have to wait for the post-game video analysis</p>
                        <p><i class="fas fa-circle"></i> All your team data available in a single place – athstat, GPS, video links</p>
                        <p><i class="fas fa-circle"></i> The ability to leverage a powerful recommendation engine built on cutting edge AI tools</p>
                        <p><i class="fas fa-circle"></i> Charts, visualizations and graphs to interrogate your data</p>
                        <p><i class="fas fa-circle"></i> Get your feeder and youth teams involved in data collection to learn the game</p>
                        <p><i class="fas fa-circle"></i> Data is secure and accessible by other tools through our analytical programming interface (API)</p>
                        </div>
                        </div>
                    </MDBCol>
                    <MDBCol size="12" md="6">
                        <div className="">
                            <img src="img/faq_top.png" className="img-fluid" alt="" />
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            </MDBAnimation>

            <MDBAnimation reveal type="fadeInUp">
            <MDBContainer size="md" className="pt-0 pb-5">
                <MDBRow className="box_align_c">
                    <MDBCol size="12" md="6">
                        <div className="">
                            <img src="img/WHY-ATHSTAT.jpg" className="img-fluid" alt="" />
                        </div>  
                    </MDBCol>
                    <MDBCol size="12" md="6">
                        <div className="pt-3 pb-5 about-text">
                        <h3 className="pros">For Club and Youth Teams:</h3>
                        <div className="dots_n">
                        <p className="pt-3"><i class="fas fa-circle"></i> Create and track your season and games in a central place</p>
                        <p><i class="fas fa-circle"></i> All your statistical data available for free all the time</p>
                        <p><i class="fas fa-circle"></i> Export your data at any point for any game</p>
                        <p><i class="fas fa-circle"></i> The ability to get the same AI features as the pro teams</p>
                        <p><i class="fas fa-circle"></i> Resources and tools to train new team members on the game of rugby</p>
                        <p><i class="fas fa-circle"></i> Get players interested in statistical analysis, data crunching and analytics</p>
                        </div>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            </MDBAnimation>

            <section className="back_colors">
            <MDBAnimation reveal type="fadeInUp">
                <MDBContainer size="md" className="pt-0 py-5">
                    <MDBRow className="">
                        <MDBCol size="12" md="12">
                            <div className="text_managed text-center">
                                <h2 className="text-uppercase pb-2">Frequently Asked Questions</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br></br> Lorem Ipsum has been the industry's</p>
                            </div>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="py-5">
                      <MDBCol size="12" md="8">
                      <div className="addcoding">
                          <Accordion className="mb-3">
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1bh-content"
                              id="panel1bh-header"
                            >
                              <Typography>What is ATHSTAT?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Typography>
                                ATHSTAT is a top of the line application that will allow you and your team
                                to track game statistics and then analyze that data to give you
                                recommendations on how to improve your play. ATHSTAT will also
                                visualize your data in reports so it’s easier to understand and distribute. 
                              </Typography>
                            </AccordionDetails>
                          </Accordion>
                          <Accordion className="mb-3">
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel2bh-content"
                              id="panel2bh-header"
                            >
                              <Typography>Who is ATHSTAT For?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Typography>
                                Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
                                diam eros in elit. Pellentesque convallis laoreet laoreet.
                              </Typography>
                            </AccordionDetails>
                          </Accordion>
                          <Accordion className="mb-3">
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel3bh-content"
                              id="panel3bh-header"
                            >
                              <Typography >How does this Technology Work?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Typography>
                                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                                vitae egestas augue. Duis vel est augue.
                              </Typography>
                            </AccordionDetails>
                          </Accordion>
                          <Accordion className="mb-3">
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel4bh-content"
                              id="panel4bh-header"
                            >
                              <Typography >Where can I sign up?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Typography>
                                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                                vitae egestas augue. Duis vel est augue.
                              </Typography>
                            </AccordionDetails>
                          </Accordion>
                          <Accordion className="mb-3">
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel5bh-content"
                              id="panel5bh-header"
                            >
                              <Typography >Want to Request a New Feature?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <Typography>
                                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                                vitae egestas augue. Duis vel est augue.
                              </Typography>
                            </AccordionDetails>
                          </Accordion>
                        </div>
                      </MDBCol>

                      <MDBCol md="4" size="12">
                          <div className="form_divs py-5 pl-4 pr-4">
                              <div className="hed_end pb-2">
                                <h5 className="text-uppercase">make your questions</h5>
                              </div>
                              <div className="form-group">
                                  <input type="text" id="exampleInput" className="form-control" placeholder="Name" />
                              </div>
                            
                            
                              <div className="form-group">
                                  <input type="email" id="exampleInput" className="form-control" placeholder="E-mail" />
                              </div>
                            
                            
                              <div className="form-group">
                              <textarea class="form-control" rows="5" id="comment" placeholder="While Something"></textarea>
                              </div>
                            
                            
                                <Fragment>
                                  <div className="contans">
                                    <MDBBtn className="m-0">SEND MESSAGE</MDBBtn>
                                  </div>
                                </Fragment> 
                            
                          </div>
                      </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </MDBAnimation>
            </section>

            

        </React.Fragment>

    )

}
export default faqs;