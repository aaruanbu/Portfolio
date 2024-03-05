
import React, { useState, useEffect } from 'react';
import Particles from 'react-particles-js';
import { Box } from "@mui/material"
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { Avatar, List, Skeleton, Card, Switch, Image } from 'antd';
import reactimg from "../assets/react.svg"
import myphoto from "../assets/Aaru.jpg"
export const Home = () => {
    const [loading, setLoading] = useState(true);
    const particlesConfig = {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800,
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
                value: 0.8,
                random: false,
                anim: {
                    enable: true,
                    speed: 7,
                    opacity_min: 0.3,
                    sync: false,
                },
            },
            size: {
                value: 30,
                random: true,
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#217dff",
                opacity: 0.4,
                width: 10,
            },
            move: {
                enable: true,
                speed: 9,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: true,
                attract: {
                    enable: true,
                    rotateX: 600,
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
                    distance: 190,
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

    const listData = Array.from({
        length: 1,
    }).map((_, i) => ({
        href: 'https://ant.design',
        title: `ant design part ${i + 1}`,
        avatar: `https://api.dicebear.com/7.x/miniavs/svg?seed=${i}`,
        role: 'i am a Frontend-Developer.',
        content: "A FRONDEND-DEVELOPER", name: "AARU ANBU",
        img: "../assets/Aaru.jpg",
    }));

    const { Meta } = Card;

    return (<>

        <Box component="section" id="particles-js" sx={{ position: "relative" }}>
            <div data-aos="fade-down">
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", }} >
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
                                marginTop: 16,
                                textAlign: "center",
                                display: "flex",
                                backgroundColor: "white"
                            }}
                        >
                            <Box sx={{ display: "flex", alignItems: "center", }}>
                                <Image
                                    src={"../assets/Aaru.jpg"}
                                    width={100}
                                    alt="AARU ANBU"
                                />
                                <img src={myphoto} />
                                <Box
                                    // className="animate" 
                                    sx={{ backgroundColor: "white" }}>
                                    <h2>\AARU ANBU</h2>
                                    <h3>
                                        FRONTEND-DEVELOPER
                                    </h3>
                                    <h4 style={{ animation: "animate 8s linear infinite" }}>i am a frontend-developer</h4>
                                </Box>
                            </Box>
                        </Card>
                    </>
                    }
                </Box>


            </div>
            <Particles
                params={{ particlesConfig }}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: "-1" }}
            />
        </Box>
        <Box component="section">
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
                                // description="MORE ABOUT ME"
                                title="MORE ABOUT ME"
                            />
                        </Skeleton>
                    </Box>
                </Card>
            </Box >
        </Box>
        <Box component="section">
            <Box>
                <Card
                    style={{
                        width: 250,
                        marginTop: 19,
                    }}
                >
                    <Box >
                        <Box>
                            {/* <Skeleton.Image active /> */}
                            <Skeleton loading={loading} active>
                                <Meta
                                    // description="MORE ABOUT ME"
                                    title="Skills I Have"
                                // name="Aaruanbu"
                                />
                            </Skeleton>

                        </Box>

                    </Box>
                </Card>
            </Box>
        </Box>
        <Box component="section">
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
                                // description="MORE ABOUT ME"
                                title="Projects"
                            />
                        </Skeleton>
                    </Box>
                </Card>
            </Box>
        </Box >

        <Box component="section">
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
        <Box component="section">

        </Box>
    </>);
}


