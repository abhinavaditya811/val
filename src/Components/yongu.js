import React from "react";
import styled from "styled-components"
import susgato from "../assets/yong.png"

const Wrap = styled.div`
    background: url(${susgato});
    height: 100vh;
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-size: cover;
`

const Message = styled.div``

const MessageContent = styled.p`
    margin: 0;
    font-size: 40px;
    color: #2178b8;
`

const Yongu = () => {
    return (
        <Wrap>
            <Message>
                <MessageContent>
                    WELCOME BACK YONGUUUUGUGUUGUUGUU
                </MessageContent>
            </Message>
        </Wrap>
    )
}

export default Yongu