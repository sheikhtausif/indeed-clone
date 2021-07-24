import styled from 'styled-components'

const FormDiv = styled.div`
    width: 46%;
    margin: auto;
 *{
     margin:0;
     padding:0;
 }
    div:first-child{
        width: 100%;
        height:7px;
        background: navy;
        border-radius:12px;
        margin: 50px 0 10px;
        padding:0;
    }

    h2{
        margin: 19px 0;
    }
    
    form{
        width: 100%;
        /* border: 1px solid black; */
    }

    & input{
        display: block;
    }
    & label{
        font-weight: bold;
    }
    & input{
        width: 92%;
        padding:11px;
        border: 1px solid black;
        border-radius:7px;
        margin: 8px 0 28px;
        font-size:17px;
        outline:none;
    }
    div:nth-child(12){
        display:flex;
        justify-content:space-between;
        align-items:center;
        background:rgb(243, 242, 241);
        padding:8px;
        border-radius: 5px;
        margin-top: 40px;
    }
    div:nth-child(12)>:first-child{
        width: 25px;
        height: 25px;
        color: grey;
    }
    div:nth-child(12)>p{
        width: 90%;
        text-align:left;
    }

    div:nth-child(13){
        display:flex;
        justify-content:flex-end;
        align-items:center;
        margin-top:50px;
        margin-bottom:50px;
    }
    div:nth-child(13)>:first-child{
        color: rgb(22, 64, 129);
        margin-right: 30px;
        cursor: pointer;
    }
    div:nth-child(13)>button{
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
    p:nth-child(8){
        text-align:left;
        margin-bottom: 40px;
    }
    & p{
        text-align:center;
    }
    p>span{
        color:rgb(22, 64, 129);
    }
    
`;

export default FormDiv