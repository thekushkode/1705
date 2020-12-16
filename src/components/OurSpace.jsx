import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn, MDBJumbotron, MDBCardTitle } from "mdbreact";
import Nav from "./Nav";
import FooterPage from "./Footer";

const OurSpace = () => {
    return (
        <div>
            <header>
                <Nav />
            </header>
            <main>
                <MDBJumbotron fluid style={{ top: '0', left: '0' }}>
                    <MDBCol className="text-white text-center py-5 px-4" style={{ backgroundImage: `url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)` }}>
                        <MDBCol className="py-5">
                            <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">Create your beautiful website with MDBootstrap</MDBCardTitle>
                            <p className="mx-5 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
                            optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos. Odit sed qui, dolorum!
                        </p>
                            <MDBBtn outline color="white" className="mb-5"><MDBIcon icon="clone" className="mr-2"></MDBIcon> View project</MDBBtn>
                        </MDBCol>
                    </MDBCol>
                </MDBJumbotron>
                <MDBCard className="px-5 pb-5">
                    <MDBCardBody>
                        <h2 className="h1-responsive font-weight-bold text-center my-5">
                            Vibrant Spaces
                        </h2>
                        <p className="text-center w-responsive mx-auto mb-5">
                            The experience at Seventeen05 has been designed as a dynamic interplay between spaces crafted to maximize your vision of an event.
                            Spacious event options featuring a welcoming background of contemporary art and design, unparalleled style for any gathering.
                            People, passions and plans come alive in our new state-of-the-art Atlanta event venue. Whether you are coming together for a purposeful meeting, team-building events, planning your next Gala or wedding, our spaces are perfectly designed with flow and tailored for connecting and enjoying your surroundings.
                        </p>
                        <MDBRow>
                            <MDBCol lg="5">
                                <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                                    <img
                                        className="img-fluid"
                                        src="https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg"
                                        alt=""
                                    />
                                    <a href="#!">
                                        <MDBMask overlay="white-slight" />
                                    </a>
                                </MDBView>
                            </MDBCol>
                            <MDBCol lg="7">
                                <a href="#!" className="green-text">
                                    <h6 className="font-weight-bold mb-3">
                                        <MDBIcon icon="utensils" className="pr-2" />
                                    Food
                                    </h6>
                                </a>
                                <h3 className="font-weight-bold mb-3 p-0">
                                    <strong>Title of the news</strong>
                                </h3>
                                <p>
                                    Nam libero tempore, cum soluta nobis est eligendi optio cumque
                                    nihil impedit quo minus id quod maxime placeat facere possimus,
                                    omnis voluptas assumenda est, omnis dolor repellendus et aut
                                    officiis debitis.
                                </p>
                                <p>
                                    by
                                    <a href="#!">
                                        <strong>Carine Fox</strong>
                                    </a>
                                    , 19/08/2018
                                    </p>
                                <MDBBtn color="success" size="md" className="waves-light ">
                                    Read more
                                </MDBBtn>
                            </MDBCol>
                        </MDBRow>
                        <hr className="my-5" />
                        <MDBRow>
                            <MDBCol lg="7">
                                <a href="#!" className="pink-text">
                                    <h6 className="font-weight-bold mb-3">
                                        <MDBIcon icon="image" className="pr-2" />
                                Lifestyle
                                </h6>
                                </a>
                                <h3 className="font-weight-bold mb-3 p-0">
                                    <strong>Title of the news</strong>
                                </h3>
                                <p>
                                    At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                    blanditiis praesentium voluptatum deleniti atque corrupti quos
                                    dolores et quas molestias excepturi sint occaecati cupiditate
                                    non provident.
                                </p>
                                <p>
                                    by
                                <a href="#!">
                                        <strong>Carine Fox</strong>
                                    </a>
                                    , 14/08/2018
                                </p>
                                <MDBBtn
                                    color="pink"
                                    size="md"
                                    className="mb-lg-0 mb-4 waves-light"
                                >
                                    Read more
                                </MDBBtn>
                            </MDBCol>
                            <MDBCol lg="5">
                                <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                                    <img
                                        className="img-fluid"
                                        src="https://mdbootstrap.com/img/Photos/Others/img%20(34).jpg"
                                        alt=""
                                    />
                                    <a href="#!">
                                        <MDBMask overlay="white-slight" />
                                    </a>
                                </MDBView>
                            </MDBCol>
                        </MDBRow>
                        <hr className="my-5" />
                        <MDBRow>
                            <MDBCol lg="5">
                                <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                                    <img
                                        className="img-fluid"
                                        src="https://mdbootstrap.com/img/Photos/Others/img (28).jpg"
                                        alt=""
                                    />
                                    <a href="#!">
                                        <MDBMask overlay="white-slight" />
                                    </a>
                                </MDBView>
                            </MDBCol>
                            <MDBCol lg="7">
                                <a href="#!" className="indigo-text">
                                    <h6 className="font-weight-bold mb-3">
                                        <MDBIcon icon="suitcase" className="pr-2" />
                                    Food
                                    </h6>
                                </a>
                                <h3 className="font-weight-bold mb-3 p-0">
                                    <strong>Title of the news</strong>
                                </h3>
                                <p>
                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                                    aut fugit, sed quia consequuntur magni dolores eos qui ratione
                                    voluptatem sequi nesciunt. Neque porro qui dolorem ipsum quia
                                    sit amet.
                                </p>
                                <p>
                                    by
                                <a href="#!">
                                        <strong>Carine Fox</strong>
                                    </a>
                                    , 11/08/2018
                                </p>
                                <MDBBtn color="indigo" size="md" className="waves-light ">
                                    Read more
                                </MDBBtn>
                            </MDBCol>
                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>
            </main>
            <footer>
                <FooterPage />
            </footer>
        </div>
    );
}

export default OurSpace;