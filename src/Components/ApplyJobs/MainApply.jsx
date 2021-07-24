import React from 'react'
import styled from 'styled-components'
import ApplyForm from './ApplyForm'


const MainApplyDiv = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
`
const LeftApplyDiv = styled.div`
    width: 60%;
`
const RightApplyDiv = styled.div`
    width: 40%;
    background: rgb(250, 249, 248);
`


const MainApply = () => {

    return (
        <MainApplyDiv>
            <LeftApplyDiv>

                <ApplyForm />

            </LeftApplyDiv>

            <RightApplyDiv>

            </RightApplyDiv>
        </MainApplyDiv>
    )
}

export default MainApply
