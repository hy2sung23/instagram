import React from 'react';
import './StoryList.scss'
import {Card} from "antd";

export default function StoryList ({style}) {
    return (
        <div style={style}>
            <Card title={"Stories"}>
                Stories from people you follow
            </Card>
        </div>
    )
}