
import React, { useState, useEffect } from 'react';
import Particles from 'react-particles-js';
import { Box } from "@mui/material"
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { Avatar, List, Skeleton, Card, Switch, Image } from 'antd';
import reactimg from "../assets/react.svg"
export const Home = () => {
    const [loading, setLoading] = useState(true);
    const particlesConfig = {
        "particles": {
            "number": {
                "value": 8,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "line_linked": {
                "enable": true
            },
            "move": {
                "speed": 4,
                "out_mode": "out"
            },
            "shape": {
                "type": [
                    "image",
                    "circle"
                ],
                "image": [
                    {
                        "src": reactimg,
                        "height": 20,
                        "width": 23
                    },
                    {
                        "src": reactimg,
                        "height": 100,
                        "width": 100
                    },
                    {
                        "src": reactimg,
                        "height": 20,
                        "width": 20
                    }
                ]
            },
            "color": {
                "value": "#CCC"
            },
            "size": {
                "value": 30,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 7,
                    "size_min": 50,
                    "sync": true
                }
            }
        },
        "retina_detect": true
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
        img: `https://api.dicebear.com/7.x/miniavs/svg?seed=${i}`,
    }));

    const { Meta } = Card;

    return (
        <div data-aos="fade-down">
            <Particles
                params={{ particlesConfig }}
                style={{ position: 'fixed', width: '100%', height: '100%', zIndex: -1 }}
            />
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
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
                                src="https://via.placeholder.com/150"
                                width={100}
                                alt="Naruto"
                            />
                            <Box sx={{ backgroundColor: "white" }}>
                                <h3>
                                    A FRONTEND-DEVELOPER
                                </h3>
                                <h2>AARU ANBU</h2>
                                <h4>i am a frontend-developer</h4>
                            </Box>
                        </Box>
                    </Card>
                </>
                }
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
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap", }}>
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
        </div>
    );
}


