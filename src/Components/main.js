import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import val from "../assets/val.jpg"
import susgato from "../assets/yongV2.png"

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

const TextWrap = styled.div`

`

const Content = styled.div`
`

const WrapContent = styled.p`
    margin: 0;
    font-size: 20px;
    font-family: "DM Sans", sans-serif;
`

const QuestionWrap = styled.div``

const Question = styled.h1`
    font-size: ${props => props.fontSize || "26px"};
    font-family: "DM Sans", sans-serif;
    font-weight: 400;
`

const ButtonWrap = styled.div`
    display: flex;
    gap: 20px;
    margin-bottom: 50px;
`

const AnswerButton = styled.button`
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    border-radius: 8px;
    border: none;
    font-size: 20px;
    background: #24fa24;
    cursor: pointer;
`

const RejectButton = styled.button`
    width: fit-content;
    height: ${props => props.height}px;
    border-radius: 8px;
    border: none;
    font-size: 20px;
    background: #ff3030;
    cursor: pointer;
`

const NO_RESPONSE = [
    {
        label: "Think again?!"
    },
    {
        label: "What about now?"
    },
    {
        label: "Now?"
    },
    {
        label: "Pakki baat hai?"
    },
    {
        label: "Aise kaise firse soch?!"
    },
    {
        label: "How about now?"
    },
    {
        label: "Aur ab?"
    },
    {
        label: "But ab to time hogaya ab to maanja?"
    },
    {
        label: "Ayuyuyuyuyuyu please?!"
    },
    {
        label: "Gian ki kasam please?!"
    },
    {
        label: "Monggo Maem?!"
    },
]

const Main = () => {

    let navigate = useNavigate();

    const [initial, setInitial] = useState(1)

    const [rejectHeight, setHeight] = useState(150)
    const [rejectWidth, setWidth] = useState(300)

    const [acceptHeight, setAcceptHeight] = useState(150)
    const [acceptWidth, setAcceptWidth] = useState(300)

    const toggleSize = () => {
        setInitial(2)

        setHeight(rejectHeight / 1.1)
        setWidth(rejectWidth / 1.1)

        setAcceptHeight(acceptHeight * 1.1)
        setAcceptWidth(acceptWidth * 1.1)
    }

    return (
        <Wrap>
            <TextWrap>
                <Content>
                    <WrapContent>
                        Phool for a fool vaala joke maarke cool ban jaata hun
                    </WrapContent>
                </Content>
                <QuestionWrap>
                    <Question fontSize="20px">
                        Happy Yong Return Day liloggin
                    </Question>
                    <Question>
                        Will you be my yongentine?
                    </Question>
                </QuestionWrap>
                <ButtonWrap>
                    <AnswerButton
                        onClick={() => navigate('/yes')}
                        height={acceptHeight}
                        width={acceptWidth}
                    >
                        YES
                    </AnswerButton>
                    <RejectButton
                        onClick={() => toggleSize()}
                        height={rejectHeight}
                    >
                        {initial === 1 ? "NO" : NO_RESPONSE[Math.floor(Math.random() * NO_RESPONSE.length)].label}
                    </RejectButton>
                    <img src={val} alt="val" height={200} width={200} />
                </ButtonWrap>
            </TextWrap>
        </Wrap>
    )
}

export default Main
