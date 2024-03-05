
import React, { useState, useEffect } from 'react';
import Particles from 'react-particles-js';
import { Box } from "@mui/material"
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { Avatar, List, Skeleton, Card, Switch, Image } from 'antd';
import reactimg from "../assets/react.svg"
import { Typography } from "@mui/material"
import myphoto from "./Img/aaruanbu.png"
import htm from "./Img/html.png"
import cs from "./Img/cs.png"
import js from "./Img/js.png"
import rjs from "./Img/rjs.png"
import mti from "./Img/mti2.png"
import boost from "./Img/boost3.png"
export const Home = () => {
    const [loading, setLoading] = useState(true);
    const particlesConfig = {
        particles: {
            number: {
                value: 90,
                density: {
                    enable: true,
                    value_area: 900,
                },
            },
            color: {
                value: "#217dff",
            },
            shape: {
                type: "image",
                image: [
                    { src: "https://www.google.com/url?sa=i&url=https%3A%2F%2Flevelup.gitconnected.com%2Fdisplay-images-in-react-8ff1f5b1cf9a&psig=AOvVaw2OAhrz1GX0HRvdWxVFlIqW&ust=1709109005455000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCICPq6yNy4QDFQAAAAAdAAAAABAE", height: 20, width: 20 },
                    { src: "https://www.google.com/url?sa=i&url=https%3A%2F%2Flevelup.gitconnected.com%2Fdisplay-images-in-react-8ff1f5b1cf9a&psig=AOvVaw2OAhrz1GX0HRvdWxVFlIqW&ust=1709109005455000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCICPq6yNy4QDFQAAAAAdAAAAABAE", height: 30, width: 30 },
                ],
            },
            opacity: {
                value: 0.9,
                random: false,
                anim: {
                    enable: true,
                    speed: 7,
                    opacity_min: 0.9,
                    sync: false,
                },
            },
            size: {
                value: 30,
                random: true,
            },
            line_linked: {
                enable: true,
                distance: 190,
                color: "#217dff",
                opacity: 0.9,
                width: 19,
            },
            move: {
                enable: true,
                speed: 19,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: true,
                attract: {
                    enable: true,
                    rotateX: 900,
                    rotateY: 1200,
                },
            },
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "grab",
                },
                onclick: {
                    enable: true,
                    mode: "push",
                },
                resize: true,
            },
            modes: {
                grab: {
                    distance: 199,
                    line_linked: {
                        opacity: 1,
                    },
                },
            },
        },
        retina_detect: false,
    };




    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);



    const { Meta } = Card;

    return (<>
        <Box component="section" id="particles-js" sx={{ position: "relative", backgroundColor: "black" }}>
            <div data-aos="fade-down">
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }} >
                    {loading ? <>
                        <Box sx={{ display: "flex", alignItems: "center", }}>
                            <Card
                                style={{
                                    width: 400,
                                    marginTop: 16,
                                }}
                            >
                                <Box sx={{ display: "flex", alignItems: "center" }}>
                                    <Skeleton.Image active />
                                    <Skeleton loading={loading} active>
                                        <Meta
                                            title="Card title"
                                            description="This is the description"
                                        />
                                    </Skeleton>
                                </Box>
                            </Card>
                        </Box></> : <>
                        <Card
                            style={{
                                width: 400,
                                height: 200,
                                marginTop: 16,
                                textAlign: "center",
                                padding: "2%",
                                display: "flex",
                                backgroundColor: "white",
                                justifyContent: "space-between",
                                backgroundImage: "linear-gradient(352deg, rgb(96, 163, 175), rgb(146, 138, 209))"
                            }}
                        >
                            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0" }}>
                                <Box sx={{ display: "flex", alignItems: "center" }} >
                                    <Image
                                        src={myphoto}
                                        width={100}
                                        alt="AARU ANBU"
                                    />
                                </Box>

                                <Box
                                    sx={{ backgroundImage: "linear-gradient(352deg, rgb(96, 163, 175), rgb(146, 138, 209))" }}>
                                    <h2>AARU ANBU</h2>
                                    <h3>
                                        DVELOPER
                                    </h3>
                                    {/* <h4 >i am a developer</h4> */}
                                </Box>
                            </Box>
                        </Card>
                    </>
                    }
                </Box>


            </div>
            {/* <Particles
            params={{ particlesConfig }}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: "-1" }}
        /> */}
        </Box>
        <Box component="section" sx={{ display: "flex", alignItems: "center", height: "100vh", backgroundImage: loading ? "linear-gradient(to right, #27282d, #191e1f, rgb(23 5 5))" : "linear-gradient(to right, #3b46c9, #4a83e4, rgb(0 0 0 / 67%))" }}>
            {loading ? <Box>
                <Card
                    style={{
                        width: 300,
                        // marginTop: 19,
                    }}
                >
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Skeleton loading={loading} active>
                            <Meta
                                title="ABOUT ME"
                            />
                        </Skeleton>
                    </Box>
                </Card>
            </Box > :
                <Card style={{ margin: "0%", border: "none", backgroundColor: "transparent !important", color: "black", background: "transparent" }}>
                    <h2 style={{ fontSize: "20px", fontWeight: "800", textAlign: "center" }} title="About Me">About Me</h2>
                    <Typography sx={{ fontSize: "17px", fontWeight: "600", lineHeight: "2", color: "white", backgroundColor: "transparent !important" }}>
                        I Am done my MBA at Einstein College of Engineering.
                        Intent eith highly dedicated,self-confident and hardworking and with well-developed communication and
                        organizational skills. I am seeking for a position in esteemed organization offering an
                        oppertunitty for growth in the software field.
                    </Typography>
                </Card>}
        </Box >
        <Box component="section" sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", backgroundImage: loading ? "linear-gradient(to right, #27282d, #191e1f, rgb(23 5 5))" : "linear-gradient(to right, #3b46c9, #4a83e4, rgb(0 0 0 / 67%))" }}>
            {loading ? <Box>
                <Card
                    style={{
                        width: 300,
                        // marginTop: 19,
                    }}
                >
                    <Box >
                        <Box>
                            {/* <Skeleton.Image active /> */}
                            <Skeleton loading={loading} active>
                                <Meta
                                    title="Skills I Have"
                                />
                            </Skeleton>

                        </Box>

                    </Box>
                </Card>
            </Box> : <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Box>
                    <h2 style={{ fontWeight: "800", textAlign: "center" }} >Skills I Have</h2>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", width: "100%", gap: "10px" }}>
                        <Box sx={{
                            width: {
                                xs: "100%",
                                sm: "100%",
                                md: "100%",
                                xl: "100%"
                            },
                            display: "flex",
                            justifyContent: "center"
                        }}>
                            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "white", width: "200px" }}>
                                <Image src={htm} width={100} /><h3>HTML</h3>
                            </Box>
                        </Box>
                        <Box sx={{
                            width: {
                                xs: "100%",
                                sm: "100%",
                                md: "100%",
                                xl: "100%"
                            }
                            , display: "flex",
                            justifyContent: "center"
                        }}><Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "white", width: "200px" }}>
                                <Image src={cs} width={50} /><h3>css&SCSS</h3>
                            </Box></Box>
                        <Box sx={{
                            width: {
                                xs: "100%",
                                sm: "100%",
                                md: "100%",
                                xl: "100%"
                            },
                            display: "flex",
                            justifyContent: "center"
                        }}><Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "white", width: "200px" }}>
                                <Image src={js} width={60} /><h3>JAVASCRIPT</h3>
                            </Box></Box>
                        <Box sx={{
                            width: {
                                xs: "100%",
                                sm: "100%",
                                md: "100%",
                                xl: "100%"
                            },
                            display: "flex",
                            justifyContent: "center"
                        }}>
                            <Box>
                                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "white", width: "200px" }}>
                                    <Image src={rjs} width={70} /><h3>REACTJS</h3>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{
                            width: {
                                xs: "100%",
                                sm: "100%",
                                md: "100%",
                                xl: "100%"
                            },
                            display: "flex",
                            justifyContent: "center"
                        }}>
                            <Box>
                                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "white", width: "200px" }}>
                                    <Image src={boost} width={80} /><h3>BOOTSTRAP</h3>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{
                            width: {
                                xs: "100%",
                                sm: "100%",
                                md: "100%",
                                xl: "100%"
                            },
                            display: "flex",
                            justifyContent: "center"
                        }}>
                            <Box>
                                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "white", width: "200px" }}>
                                    <Image src={mti} width={70} /><h3 >MATERIAL-UI</h3>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>}
        </Box>

        <Box component="section" sx={{ display: "flex", alignItems: "center", height: "100vh", backgroundImage: loading ? "linear-gradient(to right, #27282d, #191e1f, rgb(23 5 5))" : "linear-gradient(to right, #3b46c9, #4a83e4, rgb(0 0 0 / 67%))" }}>
            <Box>
                <Card
                    style={{
                        width: 250,
                        marginTop: 19,
                    }}
                >
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        {/* <Skeleton.Image active /> */}
                        <Skeleton loading={loading} active>
                            <Meta
                                title="Projects"
                            />
                        </Skeleton>
                    </Box>
                </Card>
            </Box>
        </Box>

        <Box component="section" sx={{ display: "flex", alignItems: "center", height: "100vh", backgroundImage: loading ? "linear-gradient(to right, #27282d, #191e1f, rgb(23 5 5))" : "linear-gradient(to right, #3b46c9, #4a83e4, rgb(0 0 0 / 67%))" }}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap", }}>

                <Box>
                    <Card
                        style={{
                            width: 250,
                            marginTop: 19,
                        }}
                    >
                        <Box >
                            <Skeleton loading={loading} active>
                                <Box sx={{ display: "flex", alignItems: "center", padding: "2%", backgroundColor: "#0F0F0F", border: "0.5px solid blue", color: "white", borderRadius: "5px" }}>
                                    {/* <Box sx={{ borderRadius: "50px", display: "flex", alignItems: "center", }}> */}
                                    <GitHubIcon sx={{ fontSize: "40px", borderRadius: "50%", border: "1px solid white" }} />
                                    <TiSocialLinkedinCircular style={{ fontSize: "60px", borderRadius: "50%", }} />
                                    {/* </Box> */}
                                </Box>
                                <Box>
                                    <Meta
                                        // description="Projects"
                                        title="Profiles"
                                    />
                                </Box>
                            </Skeleton>
                        </Box>
                    </Card>
                </Box>
            </Box>
        </Box>
        <Box component="section" sx={{ display: "flex", alignItems: "center", height: "100vh", backgroundImage: loading ? "linear-gradient(to right, #27282d, #191e1f, rgb(23 5 5))" : "linear-gradient(to right, #3b46c9, #4a83e4, rgb(0 0 0 / 67%))" }}>

        </Box>
    </>);
}


