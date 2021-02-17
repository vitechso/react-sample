import React, { Fragment } from 'react'
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
    MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBAnimation } from "mdbreact";
const Features = () => {
    return(
        <React.Fragment>
            <section className="banner py-5">
                <div className="text_title">
                    <h1>Features</h1>
                </div>
            </section>
            <MDBAnimation reveal type="fadeInUp">
            <MDBContainer className="py-5">
                <MDBRow className="box_align_c">
                    <MDBCol size="12" md="6">
                        <div className="about_texts p-4 text-center">
                            <h3 className="text-uppercase Jersey">Data Entry and Data Export are Free with Athstat</h3>
                            <h5 className="pt-3 text-uppercase Open-Sans"><b>Anyone can join and we will set up your team’s page for free.</b></h5>
                        </div>
                    </MDBCol>
                    <MDBCol size="12" md="6">
                        <img src="img/features_top.png" className="img-fluid"/>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            </MDBAnimation>

            <section className="py-5 back_g">
            <MDBAnimation reveal type="fadeInUp">
            <MDBContainer className="py-5 mobile_padd">
            <MDBRow>
                <MDBCol className="bancks py-5" size="12">
                    <div className="text_abioy">
                        <p>In addition to our core offerings, we do offer <br></br> the following premium features.</p>
                    </div>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        </MDBAnimation>

            <MDBContainer className="py-5">
            <MDBRow className="py-5">
              <MDBCol md="4">
                <MDBCard className="pt-4 card_rounds">
                  <div className="flex_rows">
                    <MDBCol size="6" md="6">
                      <h4 className="color_base">Basic</h4>
                    </MDBCol>
                    <MDBCol size="6" md="6">
                      <p className="text-right">monthly</p>
                    </MDBCol>
                  </div>
                  <MDBCardImage className="py-5 auto_imgs" src="img-icons/house.svg" />
                  <MDBCardBody>
                    <MDBCardTitle className="text-center pt-2">Number Of Users</MDBCardTitle>
                    <MDBCardTitle className="text-center pb-4"><b>10</b></MDBCardTitle>
                    <MDBCardText>
                      <div className="desh">
                        <MDBRow>
                          <MDBCol size="8">
                            <p>Real Time Data Entry</p>
                          </MDBCol>
                          <MDBCol size="4">
                              <div className="text-right ticks">
                                <i class="far fa-check-circle"></i>
                              </div>
                          </MDBCol>
                        </MDBRow>
                        <MDBRow>
                          <MDBCol size="8">
                            <p>Downloadable Match Report</p>
                          </MDBCol>
                          <MDBCol size="4">
                              <div className="text-right ticks">
                                <i class="far fa-check-circle"></i>
                              </div>
                          </MDBCol>
                        </MDBRow>
                        <MDBRow>
                          <MDBCol size="8">
                            <p>Visualization</p>
                          </MDBCol>
                          <MDBCol size="4">
                              <div className="text-right ticks">
                                <i class="far fa-check-circle"></i>
                              </div>
                          </MDBCol>
                        </MDBRow>
                        <MDBRow>
                          <MDBCol size="8">
                            <p>Integrated GPS Data</p>
                          </MDBCol>
                          <MDBCol size="4">
                              <div className="text-right ticks">
                              <i class="far fa-times-circle"></i>
                              </div>
                          </MDBCol>
                        </MDBRow>
                        <MDBRow>
                          <MDBCol size="8">
                            <p>Data Field Customization</p>
                          </MDBCol>
                          <MDBCol size="4">
                              <div className="text-right ticks">
                              <i class="far fa-times-circle"></i>
                              </div>
                          </MDBCol>
                        </MDBRow>
                        <MDBRow>
                          <MDBCol size="8">
                            <p>Recommendations</p>
                          </MDBCol>
                          <MDBCol size="4">
                              <div className="text-right ticks">
                              <i class="far fa-times-circle"></i>
                              </div>
                          </MDBCol>
                        </MDBRow>
                      </div>
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4" className="meddles_top">
              <MDBCard className="pt-4 card_rounds">
                  <div className="flex_rows">
                    <MDBCol size="6" md="6">
                      <h4 className="color_base">Premium</h4>
                    </MDBCol>
                    <MDBCol size="6" md="6">
                      <p className="text-right">monthly</p>
                    </MDBCol>
                  </div>
                  <MDBCardImage className="py-5 auto_imgs" src="img-icons/hotel-icon.svg" />
                  <MDBCardBody>
                    <MDBCardTitle className="text-center pt-2">Number Of Users</MDBCardTitle>
                    <MDBCardTitle className="text-center pb-4"><b>50</b></MDBCardTitle>
                    <MDBCardText>
                      <div className="desh">
                        <MDBRow>
                          <MDBCol size="8">
                            <p>Real Time Data Entry</p>
                          </MDBCol>
                          <MDBCol size="4">
                              <div className="text-right ticks">
                                <i class="far fa-check-circle"></i>
                              </div>
                          </MDBCol>
                        </MDBRow>
                        <MDBRow>
                          <MDBCol size="8">
                            <p>Downloadable Match Report</p>
                          </MDBCol>
                          <MDBCol size="4">
                              <div className="text-right ticks">
                                <i class="far fa-check-circle"></i>
                              </div>
                          </MDBCol>
                        </MDBRow>
                        <MDBRow>
                          <MDBCol size="8">
                            <p>Visualization</p>
                          </MDBCol>
                          <MDBCol size="4">
                              <div className="text-right ticks">
                                <i class="far fa-check-circle"></i>
                              </div>
                          </MDBCol>
                        </MDBRow>
                        <MDBRow>
                          <MDBCol size="8">
                            <p>Integrated GPS Data</p>
                          </MDBCol>
                          <MDBCol size="4">
                              <div className="text-right ticks">
                              <i class="far fa-times-circle"></i>
                              </div>
                          </MDBCol>
                        </MDBRow>
                        <MDBRow>
                          <MDBCol size="8">
                            <p>Data Field Customization</p>
                          </MDBCol>
                          <MDBCol size="4">
                              <div className="text-right ticks">
                              <i class="far fa-times-circle"></i>
                              </div>
                          </MDBCol>
                        </MDBRow>
                        <MDBRow>
                          <MDBCol size="8">
                            <p>Recommendations</p>
                          </MDBCol>
                          <MDBCol size="4">
                              <div className="text-right ticks">
                              <i class="far fa-times-circle"></i>
                              </div>
                          </MDBCol>
                        </MDBRow>
                      </div>
                    </MDBCardText>
                    <div className="hny">
                      <MDBBtn className="select_btns">SELECT</MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4">
                <MDBCard className="pt-4 card_rounds">
                <div className="flex_rows">
                    <MDBCol size="8" md="8">
                      <h4 className="color_base">Premium Plus</h4>
                    </MDBCol>
                    <MDBCol size="4" md="4">
                      <p className="text-right">monthly</p>
                    </MDBCol>
                  </div>
                  <MDBCardImage className="py-5 auto_imgs" src="img-icons/wealth.svg" />
                    <MDBCardBody>
                    <MDBCardTitle className="text-center pt-2"><b>Unlimited Number</b></MDBCardTitle>
                    <MDBCardTitle className="text-center pb-4"><b>Of Users</b></MDBCardTitle>
                    <MDBCardText>
                      <div className="desh">
                        <MDBRow>
                          <MDBCol size="8">
                            <p>Real Time Data Entry</p>
                          </MDBCol>
                          <MDBCol size="4">
                              <div className="text-right ticks">
                                <i class="far fa-check-circle"></i>
                              </div>
                          </MDBCol>
                        </MDBRow>
                        <MDBRow>
                          <MDBCol size="8">
                            <p>Downloadable Match Report</p>
                          </MDBCol>
                          <MDBCol size="4">
                              <div className="text-right ticks">
                                <i class="far fa-check-circle"></i>
                              </div>
                          </MDBCol>
                        </MDBRow>
                        <MDBRow>
                          <MDBCol size="8">
                            <p>Visualization</p>
                          </MDBCol>
                          <MDBCol size="4">
                              <div className="text-right ticks">
                                <i class="far fa-check-circle"></i>
                              </div>
                          </MDBCol>
                        </MDBRow>
                        <MDBRow>
                          <MDBCol size="8">
                            <p>Integrated GPS Data</p>
                          </MDBCol>
                          <MDBCol size="4">
                              <div className="text-right ticks">
                              <i class="far fa-check-circle"></i>
                              </div>
                          </MDBCol>
                        </MDBRow>
                        <MDBRow>
                          <MDBCol size="8">
                            <p>Data Field Customization</p>
                          </MDBCol>
                          <MDBCol size="4">
                              <div className="text-right ticks">
                              <i class="far fa-check-circle"></i>
                              </div>
                          </MDBCol>
                        </MDBRow>
                        <MDBRow>
                          <MDBCol size="8">
                            <p>Recommendations</p>
                          </MDBCol>
                          <MDBCol size="4">
                              <div className="text-right ticks">
                              <i class="far fa-times-circle"></i>
                              </div>
                          </MDBCol>
                        </MDBRow>
                      </div>
                    </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
              </MDBCol>
             </MDBRow>    
    </MDBContainer>
            </section>
            <MDBContainer className="py-5">
      <MDBRow>
        <MDBCol size="12">
          <div className="text-center">
            <h3 className="text-uppercase Jersey"><b>Please contact us for pricing for pricing tiers</b></h3>
            <p>We also offer onsite personnel – from data scientists to application <br></br> trainers – who can help your team </p>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
        </React.Fragment>
        
    )
}
export default Features;