import styled from 'styled-components'

const AddExperience = styled.div`
    width: 56%;
    margin: auto;

    div:first-child{
        width: 100%;
        height:7px;
        background: navy;
        border-radius:12px;
        margin: 50px 0 10px;
        padding:0;
    }

    div:nth-child(2){
        display:flex;
        align-items: center;
    }
    div:nth-child(2)>:first-child{
        cursor:pointer;
        width: 20px;
        margin-right: 8px;
        padding:5px;
    }
    div:nth-child(2)>:first-child:hover{
        background: rgb(238, 241, 254);
        border-radius:5px;
    }

    h2{
        margin: 19px 0;
    }
    h4>span{
        font-weight: normal;
    }

    form{
        width: 100%;
        border: 1px solid black;
        padding:21px;
        border: 1px solid wheat;
        border-radius:8px;
        margin-top: 8px;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }

    & input{
        display: block;
    }
    & label{
        font-weight: bold;
    }
    & input{
        width: 100%;
        padding:11px;
        border: 1px solid rgba(0,0,0,.3);
        border-radius:7px;
        margin: 8px 0 28px;
        font-size:17px;
        outline:none;
    }

    div:nth-child(6){
        display:flex;
        justify-content:flex-end;
        align-items:center;
        margin-top:50px;
        margin-bottom:50px;
    }
    div:nth-child(6)>:first-child{
        color: rgb(22, 64, 129);
        margin-right: 30px;
        cursor: pointer;
    }
    div:nth-child(6)>button{
        width: 125px;
        background: rgb(22, 64, 129);
        padding:13px;
        font-weight: bold;
        font-size:15px;
        border-radius:5px;
        border: none;
        color: white;
        cursor: pointer;
    }

    & p{
        text-align:center;
    }
    p>span{
        color:rgb(22, 64, 129);
    }
`;

export default AddExperience