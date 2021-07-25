import styled from "styled-components";

const ReviewDiv = styled.div`
    width: 40%;
    position:absolute;
    background:white;
    right:410px;
    
    z-index:102S;
    margin:16px auto;
    padding:24px;
    border: 1px solid lightgrey;
    border-radius:8px;

        font-size:16px;
     #prog{
        width: 100%;
        height:7px;
        background: navy;
        border-radius:12px;
        margin: 6px 0 10px;
        padding:0;
    } 
    *{
        margin:0;
        padding:0;
    }
    h3{
        color: #3d3a3a;
    }
    .backArrow{
        display:flex;
        align-items: center;
    }
    .backArrow>:first-child{
        cursor:pointer;
        width: 20px;
        margin-right: 8px;
        padding:5px;
    }
    .backArrow>:first-child:hover{
        background: rgb(238, 241, 254);
        border-radius:5px;
    }
    h2{
        font-size:20px;
        margin: 15px 0;
    }
    h4{
        font-size:16px;
        color: grey;
    }
    div:nth-child(5){
        margin: 10px 0 20px;
        padding:0 10px 10px 10px;
        border: 1px solid lightgrey;
        border-radius:8px;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }
    div:nth-child(5)>div,div:nth-child(9)>div{
        border-bottom: 1px solid lightgrey;
        padding: 10px;
    }
    div:nth-child(5) p, div:nth-child(9) p{
        color: #706e6e;
    }
    div:nth-child(5) h3, div:nth-child(9) h3, div:nth-child(11) h3{
        font-size:17px;
        margin-bottom:20px !important;
    }
    small{
        color: grey;
    }
    span{
        cursor: pointer;
        color: rgb(22, 64, 129);
    }
    div:nth-child(5)>div:last-child,div:nth-child(9)>div:last-child{
        border: none;
    }
    .resume{
        margin: 10px 0 20px;
        height:70px;
        border: 1px solid lightgrey;
        border-radius: 8px;
        padding:10px;
        display:flex;
        align-items: center;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    }

    .resume>:first-child{
        width: 30px;
        height: 30px;
        color: #ee1b1b;
        margin-right: 16px;
    }
    .resume>h3{
        color: rgb(22, 64, 129);
        font-size:16px;
        cursor: pointer
    }

    div:nth-child(9){
        margin: 10px 0 20px;
        border: 1px solid lightgrey;
        border-radius: 8px;
        padding:0 10px 10px 10px;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }
    
    div:nth-child(11){
        margin: 18px 0;
        padding-bottom: 14px;
        border-top: 1px solid lightgrey;
        border-bottom: 1px solid lightgrey;
    }
    div:nth-child(11)>div{
        display:flex;
        align-items: center;
        
    }
    div:nth-child(11) input{
        width: 25px;
        height: 25px;
        margin-right: 16px;
    }
    div:nth-child(11) h3{
        padding-top: 10px;
        margin-top: 8px;
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

    .textCenter{
        text-align:center;
    }
`

export default ReviewDiv