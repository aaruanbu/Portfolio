
import React, { useState, useEffect } from 'react';
import Particles from 'react-particles-js';
import { Box } from "@mui/material";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MediationIcon from '@mui/icons-material/Mediation';
import GitHubIcon from '@mui/icons-material/GitHub';
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { Avatar, List, Skeleton, Card, Switch, Image } from 'antd';
import { BsDownload } from "react-icons/bs";
import reactimg from "../assets/react.svg"
import { Typography } from "@mui/material"
import myphoto from "./Img/aaruanbu.png"
import htm from "./Img/htm.png"
import cs from "./Img/cs.png"
import js from "./Img/js.png"
import rjs from "./Img/rjs.png"
import mti from "./Img/mti2.png"
import boost from "./Img/boost3.png"
import api from "./Img/api.png"
import calc from "./Img/calculator.png"
import education from "./Img/educationweb.png"
import reactweb from "./Img/reactweb.png"
import redbus from "./Img/redbus.png"
import mentor from "./Img/mentor.png"
import backcolor from "./Img/backcolor.png"
import resumes from "./Img/aaruanbu.pdf"
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
                random: true,
                anim: {
                    enable: true,
                    speed: 7,
                    opacity_min: 1,
                    sync: true,
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
                width: 30,
            },
            move: {
                enable: true,
                speed: 19,
                direction: "center",
                random: true,
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
        retina_detect: true,
    };
    let imges = [{
        img: api,
        link: 'https://aaruanbu.github.io/API-fetch/',
        usage: "REACT"
    }, {
        img: calc,
        link: 'https://aaruanbu.github.io/calculater/',
        usage: "HTML",
        usage1: " CSS ",
        usage2: "JS "
    }, {
        img: education,
        link: 'https://aaruanbu.github.io/new-website/',
        usage: "HTML", usage1: " CSS ",
        usage2: "JS",
        usage3: "BOOSTRAP ",

    }, {
        img: backcolor,
        link: 'https://aaruanbu.github.io/backgroundcolor-task/',
        usage: "HTML",
        usage1: " CSS ",
        usage2: "JS "
    }, {
        img: reactweb,
        link: 'https://aaruanbu.github.io/React-Web/',
        usage: "REACT",
        usage1: " SCSS ",
        // usage2: "JS "
    }, {
        img: redbus,
        link: 'https://aaruanbu.github.io/Redbus/',
        usage: "REACT", usage1: " SCSS ",
        usage2: "MATERIAL-UI"
    }, {
        img: mentor,
        link: 'https://aaruanbu.github.io/Website-task/',
        usage: "HTML", usage1: " CSS "
    },]
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    const { Meta } = Card;
    return (<>
        <Box component="section" id="particles-js" sx={{ position: "relative", }}>
            <Box data-aos="fade-down">
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
                                marginTop: 16,
                                textAlign: "center",
                                padding: "2%",
                                display: "flex",
                                // backgroundColor: "white",
                                justifyContent: "space-between",
                                backgroundColor: "transparent",
                                border: "none"
                            }}
                        >
                            <Box sx={{
                                display: "flex", alignItems: "center", justifyContent: {
                                    xs: "center",
                                    sm: "space-between",
                                    md: "space-between",
                                    xl: "space-between",
                                }, flexWrap: "wrap", padding: "0"
                            }}>
                                <Box sx={{ display: "flex", alignItems: "center" }} >
                                    <Image
                                        src={myphoto}
                                        width={"200px"}
                                        alt="AARU ANBU"
                                    />
                                </Box>

                                <Box
                                    className='infint'>
                                    <h1 style={{ color: "white", fontSize: "2rem" }}>AARU ANBU</h1>
                                    <h6 >
                                        DEVELOPER
                                    </h6>
                                </Box>
                            </Box>
                        </Card>
                    </>
                    }
                </Box>


            </Box>
            <Particles
                params={{ particlesConfig }}
                style={{
                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: "-1", backgroundColor: "black"
                }}
            />
        </Box>
        <Box component="section" sx={{ display: "flex", alignItems: "center", height: "100%", backgroundImage: loading ? "linear-gradient(to right, #27282d, #191e1f, rgb(23 5 5))" : "linear-gradient(to right, #3b46c9, #4a83e4, rgb(0 0 0 / 67%))" }}>
            {loading ? <Box>
                <Card
                    style={{
                        width: 300,
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
                <Box>
                    <Card style={{ margin: "0%", border: "none", backgroundColor: "transparent !important", color: "black", background: "transparent" }}>
                        <h2 style={{ fontSize: "20px", fontWeight: "800", textAlign: "center" }} title="About Me">About Me</h2>
                        <Typography sx={{ fontSize: "17px", fontWeight: "600", lineHeight: "2", color: "white", backgroundColor: "transparent !important" }}>
                            I am done my MBA at Einstein College of Engineering.
                            Intend with highly dedicated,self-confident and hardworking and with well-developed communication and
                            organizational skills. I am seeking for a position in esteemed organization offering an
                            oppertunitty for growth in the software field.
                        </Typography>
                    </Card>
                    <Box sx={{ display: "grid", justifyItems: "center", lineHeight: 2.5, fontFamily: "monospace !important" }}>
                        <Box sx={{
                            display: "flex", alignItems: "center", justifyContent: "center", width: {
                                xs: "85%", sm: "40%", md: "25%", xl: "25%"
                            }, fontSize: "16px", fontWeight: "700"
                            , color: "white",
                        }}>

                            <Box sx={{ fontfamily: "monospace" }} >
                                <p>NAME</p>
                                <p>PLACE</p>
                                <p>AGE</p>
                                <p>D.O.B</p>
                                <p>CELL</p>
                                <p>G-MAIL</p>
                            </Box>
                            <Box sx={{ paddingLeft: "5%", color: "black", fontWeight: "700" }}>
                                <p>: AARU ANBU</p>
                                <p>: Kallurani</p>
                                <p>: 23</p>
                                <p>: 20/05/2001</p>
                                <p>: +91 7530028405</p>
                                <p>: aaruanbu001@gmail.com</p>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            }
        </Box>
        <Box component="section" sx={{
            padding: "20px 0", borderTop: "1px solid white", borderBottom: "1px solid white", height: {
                md: "100vh", xl: "100vh", sm: "auto", xs: "auto"
            }, display: "flex",
            alignItems: "center", justifyContent: "center", backgroundImage: loading ? "linear-gradient(to right, #27282d, #191e1f, rgb(23 5 5))" : "linear-gradient(to right, #3b46c9, #4a83e4, rgb(0 0 0 / 67%))"
        }}>
            {loading ? <Box>
                <Card
                    style={{
                        width: 300,
                    }}
                >
                    <Box >
                        <Box>
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
                    <Box sx={{
                        display: "flex", alignItems: "center",
                        justifyContent: "space-between", flexWrap: "wrap", width: "100%", gap: "30px", margin: "3% 0"
                    }}>
                        <Box sx={{
                            width: {
                                xs: "100%",
                                sm: "100%",
                                md: "25%",
                                xl: "25%"
                            },
                            display: "flex",
                            justifyContent: "center"
                        }}>
                            <Box
                                sx={{
                                    perspective: "1000px",
                                    width: "200px",
                                    height: "70px",
                                }}
                                className="flip-card"
                            >
                                <Box className="flip-card-inner">
                                    <Box className="flip-card-front">
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                backgroundColor: "white",
                                                width: "200px",
                                            }}
                                            className="shadows"
                                        >
                                            <Image src={htm} width={70} />
                                            <h3>HTML</h3>
                                        </Box>
                                    </Box>
                                    <Box className="flip-card-back">
                                        <Box className="shadow2" sx={{ display: "flex", alignItems: "center", justifyContent: "center", }}>
                                            <Box sx={{
                                                width: "109px", height: {
                                                    xs: "18px", sm: "19px", md: "20px", xl: "25px"
                                                }, boxShadow: "0px 0px 5px rgb(101 215 255)", display: "flex", alignItems: "center"
                                            }}>
                                                <Box sx={{
                                                    backgroundImage: "linear-gradient(to right, #3b46c9, #4a83e4, rgb(0 0 0 / 67%))", padding: {
                                                        xs: "8px", sm: "9px", md: "10px", xl: "11px"
                                                    }, borderRadius: "2px", width: "95%"
                                                }}></Box>
                                            </Box>
                                            <span style={{ padding: "0 10px" }}>95%</span>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>

                        </Box>
                        <Box sx={{
                            width: {
                                xs: "100%",
                                sm: "100%",
                                md: "25%",
                                xl: "25%"
                            }
                            , display: "flex",
                            justifyContent: "center"
                        }}>
                            <Box
                                sx={{
                                    perspective: "1000px",
                                    width: "200px",
                                    height: "70px",
                                }}
                                className="flip-card"
                            >
                                <Box className="flip-card-inner">
                                    <Box className="flip-card-front">
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                backgroundColor: "white",
                                                width: "200px",
                                            }}
                                            className="shadows"
                                        >
                                            <Image src={cs} width={50} /><h3>CSS&SCSS</h3>
                                        </Box>
                                    </Box>
                                    <Box className="flip-card-back">
                                        <Box className="shadow2" sx={{ display: "flex", alignItems: "center", justifyContent: "center", }}>
                                            <Box sx={{
                                                width: "105px", height: {
                                                    xs: "18px", sm: "19px", md: "20px", xl: "25px"
                                                }, boxShadow: "0px 0px 5px rgb(101 215 255)", display: "flex", alignItems: "center"
                                            }}>
                                                <Box sx={{
                                                    backgroundImage: "linear-gradient(to right, #3b46c9, #4a83e4, rgb(0 0 0 / 67%))", padding: {
                                                        xs: "8px", sm: "9px", md: "10px", xl: "11px"
                                                    }, borderRadius: "2px", width: "90%"
                                                }}></Box>
                                            </Box>
                                            <span style={{ padding: "0 10px" }}>90%</span>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>

                        </Box>
                        <Box sx={{
                            width: {
                                xs: "100%",
                                sm: "100%",
                                md: "25%",
                                xl: "25%"
                            },
                            display: "flex",
                            justifyContent: "center"
                        }}>
                            <Box
                                sx={{
                                    perspective: "1000px",
                                    width: "200px",
                                    height: "70px",
                                }}
                                className="flip-card"
                            >
                                <Box className="flip-card-inner">
                                    <Box className="flip-card-front">
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                backgroundColor: "white",
                                                width: "200px",
                                            }}
                                            className="shadows"
                                        >
                                            <Image src={js} width={60} /><h3>JAVASCRIPT</h3>
                                        </Box>
                                    </Box>
                                    <Box className="flip-card-back">
                                        <Box className="shadow2" sx={{ display: "flex", alignItems: "center", justifyContent: "center", }}>
                                            <Box sx={{
                                                width: "103px", height: {
                                                    xs: "18px", sm: "19px", md: "20px", xl: "25px"
                                                }, boxShadow: "0px 0px 5px rgb(101 215 255)", display: "flex", alignItems: "center"
                                            }}>
                                                <Box sx={{
                                                    backgroundImage: "linear-gradient(to right, #3b46c9, #4a83e4, rgb(0 0 0 / 67%))", padding: {
                                                        xs: "8px", sm: "9px", md: "10px", xl: "11px"
                                                    }, borderRadius: "2px", width: "87%"
                                                }}></Box>
                                            </Box>
                                            <span style={{ padding: "0 10px" }}>87%</span>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>

                        </Box>
                        <Box sx={{
                            width: {
                                xs: "100%",
                                sm: "100%",
                                md: "25%",
                                xl: "25%"
                            },
                            display: "flex",
                            justifyContent: "center"
                        }}>
                            <Box
                                sx={{
                                    perspective: "1000px",
                                    width: "200px",
                                    height: "70px",
                                }}
                                className="flip-card"
                            >
                                <Box className="flip-card-inner">
                                    <Box className="flip-card-front">
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                backgroundColor: "white",
                                                width: "200px",
                                            }}
                                            className="shadows"
                                        >
                                            <Image src={rjs} width={70} /><h3>REACTJS</h3>
                                        </Box>
                                    </Box>
                                    <Box className="flip-card-back">
                                        <Box className="shadow2" sx={{ display: "flex", alignItems: "center", justifyContent: "center", }}>
                                            <Box sx={{
                                                width: "102px", height: {
                                                    xs: "18px", sm: "19px", md: "20px", xl: "25px"
                                                }, boxShadow: "0px 0px 5px rgb(101 215 255)", display: "flex", alignItems: "center"
                                            }}>
                                                <Box sx={{
                                                    backgroundImage: "linear-gradient(to right, #3b46c9, #4a83e4, rgb(0 0 0 / 67%))", padding: {
                                                        xs: "8px", sm: "9px", md: "10px", xl: "11px"
                                                    }, borderRadius: "2px", width: "85%"
                                                }}></Box>
                                            </Box>
                                            <span style={{ padding: "0 10px" }}>85%</span>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>

                        </Box>
                        <Box sx={{
                            width: {
                                xs: "100%",
                                sm: "100%",
                                md: "25%",
                                xl: "25%"
                            },
                            display: "flex",
                            justifyContent: "center"
                        }}>
                            <Box
                                sx={{
                                    perspective: "1000px",
                                    width: "200px",
                                    height: "70px",
                                }}
                                className="flip-card"                            >
                                <Box className="flip-card-inner">
                                    <Box className="flip-card-front">
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                backgroundColor: "white",
                                                width: "200px",
                                            }}
                                            className="shadows"
                                        >
                                            <Image src={boost} width={80} /><h3>BOOTSTRAP</h3>
                                        </Box>
                                    </Box>
                                    <Box className="flip-card-back">
                                        <Box className="shadow2" sx={{ display: "flex", alignItems: "center", justifyContent: "center", }}>
                                            <Box sx={{
                                                width: "100px", height: {
                                                    xs: "18px", sm: "19px", md: "20px", xl: "25px"
                                                }, boxShadow: "0px 0px 5px rgb(101 215 255)", display: "flex", alignItems: "center"
                                            }}>
                                                <Box sx={{
                                                    backgroundImage: "linear-gradient(to right, #3b46c9, #4a83e4, rgb(0 0 0 / 67%))", padding: {
                                                        xs: "8px", sm: "9px", md: "10px", xl: "11px"
                                                    }, borderRadius: "2px", width: "80%"
                                                }}></Box>
                                            </Box>
                                            <span style={{ padding: "0 10px" }}>80%</span>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>

                        </Box>
                        <Box sx={{
                            width: {
                                xs: "100%",
                                sm: "100%",
                                md: "25%",
                                xl: "25%"
                            },
                            display: "flex",
                            justifyContent: "center"
                        }}>
                            <Box
                                sx={{
                                    perspective: "1000px",
                                    width: "200px",
                                    height: "70px",
                                }}
                                className="flip-card"
                            >
                                <Box className="flip-card-inner">
                                    <Box className="flip-card-front">
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                backgroundColor: "white",
                                                width: "200px",
                                            }}
                                            className="shadows"
                                        >
                                            <Image src={mti} width={60} /><h3 >MATERIAL-UI</h3>
                                        </Box>
                                    </Box>
                                    <Box className="flip-card-back">
                                        <Box className="shadow2" sx={{ display: "flex", alignItems: "center", justifyContent: "center", }}>
                                            <Box sx={{
                                                width: "120px", height: {
                                                    xs: "18px", sm: "19px", md: "20px", xl: "25px"
                                                }, boxShadow: "0px 0px 5px rgb(101 215 255)", display: "flex", alignItems: "center"
                                            }}>
                                                <Box sx={{
                                                    backgroundImage: "linear-gradient(to right, #3b46c9, #4a83e4, rgb(0 0 0 / 67%))", padding: {
                                                        xs: "8px", sm: "9px", md: "10px", xl: "11px"
                                                    }, borderRadius: "2px", width: "85%"
                                                }}></Box>
                                            </Box>
                                            <span style={{ padding: "0 10px" }}>85%</span>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>}
        </Box >

        <Box component="section"
            sx={{
                display: "flex", justifyContent: "center", height: "auto",
                backgroundImage: loading ? "linear-gradient(to right, #27282d, #191e1f, rgb(23 5 5))" : "linear-gradient(to right, #3b46c9, #4a83e4, rgb(0 0 0 / 67%))"
            }}>
            {loading ? <Box>
                <Card
                    style={{
                        width: 250,
                        marginTop: 19,
                    }}
                >
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Skeleton loading={loading} active>
                            <Meta
                                title="Projects"
                            />
                        </Skeleton>
                    </Box>
                </Card>
            </Box>
                :
                <Box sx={{ margin: "3% 0" }}>
                    <Box className="">
                        <h1 style={{ textAlign: "center" }}>MY PROJECTS</h1>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", margin: "0 20px" }}>
                        <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "60px", }} >
                            {
                                imges?.map((v, i) => {
                                    return <Box key={i} sx={{
                                        width: {
                                            xs: "100%",
                                            sm: "100%",
                                            md: "29%",
                                            xl: "33.33%"
                                        }, display: "flex", justifyContent: "space-between", flexWrap: "wrap", position: "relative", overflow: "hidden"
                                    }} className="positionrelative">
                                        <Box className="positionabsolute" sx={{ position: "absolute" }}>
                                            <a href={v.link} target='blank' title="GO TO THE WEBSITE" style={{ textDecoration: "none", color: "white" }}><MediationIcon /></a>
                                            <ul style={{ listStyle: "none", paddingLeft: "9px", lineHeight: "1.5" }}>
                                                <li>{v.usage}</li>
                                                <li>{v.usage1}</li>
                                                <li>{v.usage2}</li>
                                                <li>{v.usage3}</li>
                                            </ul>
                                        </Box>
                                        <Box sx={{
                                            display: "flex", justifyContent: "center ", flexWrap: "wrap", height: "100%", width: {
                                                xs: "100%",
                                                sm: "100%",
                                                md: "100%",
                                                xl: "100%",
                                            }
                                        }}>
                                            <Box component="img" src={v.img} sx={{
                                                width: {
                                                    xs: "100%",
                                                    sm: "100%",
                                                    md: "100%",
                                                    xl: "100%",
                                                }
                                            }} />
                                        </Box>
                                    </Box>
                                })
                            }

                        </Box></Box>
                </Box>
            }
        </Box>

        <Box component="section" sx={{ padding: "0px 20px", display: "flex", justifyContent: "center", height: "100vh", backgroundImage: loading ? "linear-gradient(to right, #27282d, #191e1f, rgb(23 5 5))" : "linear-gradient(to right, #3b46c9, #4a83e4, rgb(0 0 0 / 67%))" }}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap", width: "100%" }}>
                <h2 style={{ textAlign: "center" }}>My Education</h2>
                {loading ? <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap", width: "100%" }}>
                    <Card
                        style={{
                            width: 300,
                            marginTop: 19,
                            display: "flex", alignItems: "center", justifyContent: "center",
                        }}
                    >
                        <Box >
                            <Skeleton loading={loading} active>

                                <Box>
                                    <Meta
                                        title="Profiles"
                                    />
                                </Box>
                            </Skeleton>
                        </Box>
                    </Card>
                </Box> : <Box sx={{ width: "100%" }}>


                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Box sx={{ display: "flex", flexWrap: "wrap", lineHeight: "1.5", justifyContent: "space-between", width: "100%" }}>
                            <Box sx={{
                                display: "grid", justifyContent: "space-between", width: {
                                    xs: "65%", sm: "65%", md: "30%", xl: "30%"
                                }, fontWeight: "700", fontSize: {
                                    xs: "20px", sm: "20px", md: "30px", md: "32px",
                                }, color: "white"
                            }}>
                                <Box>
                                    <h4>Frontend Developer Traniee</h4>
                                    <h6>Fabevy Institute, Tenkasi</h6>
                                </Box>
                                <Box >
                                    <h4>MBA</h4>
                                    <h6>Einstein College of Engineering,Tirunelveli-12</h6>
                                </Box>
                                <Box>
                                    <h4>BBA</h4>
                                    <h6>Kamaragar Govt Arts College,Surandai</h6>
                                </Box>
                                <Box>
                                    <h4>HSC</h4>
                                    <h6>Govt.Hr.Sec.school,P.K.Valasai</h6>
                                </Box>
                            </Box>

                            <Box sx={{
                                display: "grid", width: {
                                    xs: "30%", sm: "30%", md: "30%", xl: "30%"
                                }, fontWeight: "700", fontSize: {
                                    xs: "20px", sm: "20px", md: "30px", md: "32px"
                                }
                            }}>
                                <Box>
                                    <h4>2023</h4>
                                </Box>
                                <Box>
                                    <h4>2021-2023</h4>
                                </Box>
                                <Box>
                                    <h4>2018-2021</h4>
                                </Box>
                                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                                </Box>
                                <h4>2017-2018</h4>
                            </Box>
                            <Box sx={{
                                display: "flex", alignItems: "center", justifyContent: "center", width: {
                                    xs: "100%", sm: "100%", md: "20%", xl: "20%", margin: "5% 0"
                                }
                            }}>
                                <Box sx={{ borderRadius: "9px", boxShadow: "0px 0px 5px", cursor: "pointer", padding: "1.5%", backgroundColor: "white", color: "black", fontWeight: "700" }}>
                                    <a href={resumes} download={resumes} style={{ textDecoration: "none", }} >
                                        DOWNLOAD CV <BsDownload /></a>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                }

            </Box>
        </Box>
        <Box component="section" sx={{ display: "flex", alignItems: "center", height: "100vh", backgroundImage: loading ? "linear-gradient(to right, #27282d, #191e1f, rgb(23 5 5))" : "linear-gradient(to right, #3b46c9, #4a83e4, rgb(0 0 0 / 67%))" }}>
            {loading ? <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap", }}>
                <Card
                    style={{
                        width: 250,
                        marginTop: 19,
                    }}
                >
                    <Box >
                        <Skeleton loading={loading} active>
                            <Box>
                                <Meta
                                    title="Profiles"
                                />
                            </Box>
                        </Skeleton>
                    </Box>
                </Card>
            </Box> : <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap", }}>
                <h2>PROFILES</h2>
                <Box sx={{ display: "flex", alignItems: "center", padding: "2%", backgroundColor: "#0F0F0F", border: "0.5px solid blue", color: "white", borderRadius: "5px" }}>
                    <a href='https://github.com/aaruanbu' target='blank' style={{ textDecoration: "none", color: "white", cursor: "pointer" }}><GitHubIcon sx={{ fontSize: "40px", borderRadius: "50%", border: "1px solid white" }} /></a>
                    <a style={{ textDecoration: "none", color: "white", cursor: "pointer" }} target='blank' href='https://www.linkedin.com/in/aaru-anbu-p-440a63241?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><TiSocialLinkedinCircular style={{ fontSize: "60px", borderRadius: "50%", }} /></a>
                </Box>
            </Box>}
        </Box>
    </>);
}


