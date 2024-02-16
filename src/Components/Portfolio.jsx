// import React from "react";
import { Box } from "@mui/material"
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { Avatar, List, Skeleton, Card, Switch, Image } from 'antd';
export const Portfolio = () => {
    const [loading, setLoading] = useState(true);
    setTimeout(() => {
        setLoading(false);
    }, 3000);
    const listData = Array.from({
        length: 1,
    }).map((_, i) => ({
        href: 'https://ant.design',
        title: `ant design part ${i + 1}`,
        avatar: `https://api.dicebear.com/7.x/miniavs/svg?seed=${i}`,
        role:
            'i am a Frontend-Developer.',
        content: "A FRONDEND-DEVELOPER", name: "AARU ANBU",
        img: `https://api.dicebear.com/7.x/miniavs/svg?seed=${i}`
    }));
    const { Meta } = Card;
    const IconText = ({ icon, text }) => (
        <>
            {React.createElement(icon, {
                style: {
                    marginRight: 8,
                },
            })}
            {text}
        </>
    );
    return (<>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
            {loading ? <>
                <Box sx={{ display: "flex", alignItems: "center", }}>
                    <Card
                        style={{
                            width: 400,
                            marginTop: 16,
                        }}
                    >
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Skeleton.Image active style={{}} />
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
                        backgroundColor: "black"
                    }}
                >
                    <Box sx={{ display: "flex", alignItems: "center", }}>

                        <Image
                            src="https://via.placeholder.com/150"
                            width={100}
                            alt="Naruto"
                        />
                        <Box sx={{ backgroundColor: "black" }}>
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
        </Box>

    </>)
}