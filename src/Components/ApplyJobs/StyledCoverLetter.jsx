import styled from 'styled-components'


const AddCoverLetter = styled.div`
    width: 46%;
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

    & label{
        font-weight: bold;
    }
    & input{
        display: block;
        width: 94%;
        padding:11px;
        border: 1px solid black;
        border-radius:7px;
        margin: 8px 0 28px;
        font-size:17px;
        outline:none;
    }
    div:nth-child(5),div:nth-child(6){
        display:flex;
        /* justify-content:space-evenly; */
        align-items: center;
        border: 1px solid rgb(22, 64, 129);
        border-radius:8px;
        padding: 11px;
        margin-top: 10px;
        cursor: pointer;
    }
    div:nth-child(5)>:first-child,div:nth-child(6)>:first-child{
        width: 30px;
        height: 30px;
        color: grey;
        margin-right: 8px;
    }
    div:nth-child(5)>:nth-child(3),div:nth-child(6)>:nth-child(3){
        width: 20px;
        height: 20px;
        color: white;
        background: rgb(22, 64, 129);
        border-radius: 50%;
        margin-left: 120px;
    }
    div:nth-child(6)>:nth-child(3){
        margin-left: 150px;
    }
    div:nth-child(6)>:nth-child(5){
        display:block;
    }
    & section>h4{
        color: rgb(22, 64, 129);
    }
    & section>p{
        font-size:14px;
    }

    div:nth-child(7){
        display:flex;
        justify-content:flex-end;
        align-items:center;
        margin-top:50px;
        margin-bottom:50px;
    }
    div:nth-child(7)>:first-child{
        color: rgb(22, 64, 129);
        margin-right: 30px;
        cursor: pointer;
    }
    div:nth-child(7)>button{
        width: 220px;
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
        cursor: pointer;
    }
`;

export default AddCoverLetter;