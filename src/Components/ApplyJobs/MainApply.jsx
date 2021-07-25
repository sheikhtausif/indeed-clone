import React from 'react'
import styled from 'styled-components'
import ApplyForm from './ApplyForm'
import { Header1 } from '../Home/Header1';
import { Header } from '../Home/Header';
import { Head1 } from '../Home/Head1';
import styles from "../Home/landing.module.css";
import { useState } from 'react';

// import { useLocation } from 'react-router'

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
    const [sign, setSign] = useState(false)

    return (<>
            <div className={styles.head}> {sign ? <Header /> : <Header1 />}</div>
      <div className={styles.head2}>
        <Head1 />
      </div>
        <MainApplyDiv>
            <LeftApplyDiv>

                <ApplyForm />

            </LeftApplyDiv>

            <RightApplyDiv>

            </RightApplyDiv>
        </MainApplyDiv>
        </>
    )
}

export default MainApply
