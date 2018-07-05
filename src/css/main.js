import styled from 'styled-components';

const CorAzulPadrao = "#266092";
const CorAzulClaro = "#48e8e5";
const CorAzulHover = "#0e2d48";
const CorPretaPadrao = "#333";
const CorCinza = "#e2e2e2";
const CorCinzaSecundaria = "#f3f3f3";
const CorBranca = "#fff";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width:100%;
    
    .header{
        width:100%;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #069;
        color: ${CorAzulClaro};
    }
`;

export const SearchForm = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    width: 80%;
    height: 40px;
    margin:40px auto auto auto;
    input{
        width:100%;
        border:none;
        border-radius: 20px;
        padding: 12px 20px;
        color: blue;
        background: #f3f3f3;
        font-size: 0.9em;
        transition: all ease 0.4s;
        &:focus{
            background:#ccc;
        }
    }
`;

export const MoviesBox = styled.div`
    
    display:flex;
    flex-direction:column;
    align-items: center;
    width: 70%;
    margin:40px auto auto auto;

    .movie{
        width:100%;
        display:flex;
        flex-direction:row;
        align-items:left;
        margin-bottom:20px;
        .thumb{
            width:20%;
            @media only screen and (min-device-width : 320px) and (max-device-width : 1024px) { 
                display:none;
            }
            img{
                width:100%;
                transition: all ease 0.3s;
                &:hover{
                    opacity: 0.6;
                }
            }
        }
        .movie-info{
            width: 80%;
            background: #f3f3f3;
            .movie-header{
                position:relative;
                display:flex;
                align-items: flex-end;
                width:100%;
                height:70px;
                padding: 10px 10px 10px 80px;
                color: ${CorAzulClaro};
                background: ${CorAzulPadrao};

                .rating{
                    position: absolute;
                    background: ${CorAzulPadrao};
                    border: 2px solid ${CorAzulPadrao};
                    box-shadow: 0 0 0 3px ${CorAzulClaro} inset;
                    border-radius: 40px;
                    padding: 20px 12px;
                    text-align:center; 
                    left: 12px;
                    bottom: -30px;
                }

                .date{
                    position:absolute;
                    left: 85px;
                    bottom: -25px;
                    color: #333;
                }
            }

            .movie-synopsis{
                padding: 50px 12px 12px 12px;
            }


        }
    }

`;

export const Tags = styled.div`
    display:flex;
    margin-left:12px;
    width:70%;
    .tag{
        cursor: pointer;
        padding:4px 8px;
        border-radius: 20px;
        border:1px solid ${CorAzulPadrao};
        color: ${CorAzulPadrao};
        background: ${CorBranca};
        font-size: 0.8em;
        margin-right: 6px;
        &:hover{
            color: ${CorAzulHover};
        }
    }
`;


export const Pagination = styled.div`
    display:flex;
    justify-content: space-between;
    margin:30px auto 30px auto;
    width: 200px;
    .page{
        color: ${CorAzulPadrao};
        padding: 12px 16px;
        cursor: pointer;
        transition: all ease 0.3s;
        &:hover{
            color: ${CorAzulHover};
        }
    }
    .page.active{
        border: 2px solid ${CorAzulPadrao};
        box-shadow: 0 0 0 3px ${CorAzulClaro} inset;
        border-radius: 40px;
        padding: 12px 16px; 
        text-align:center; 
        color: white; 
        background: ${CorAzulPadrao};       
    }
`;


export const MovieDetail = styled.div`
    display:flex;
    width:100%;
    flex-direction: column; 
    .detail-header{
        display:flex;
        width:100%;
        height: 70px;
        padding:20px;
        background: ${CorCinza};
        justify-content:space-between;
        
        .movie-title{
            font-size: 2em;
            color: ${CorAzulPadrao}
        }

        .date{
            color: ${CorPretaPadrao};
        }
    }

    .detail-body{
        display:flex;
        @media only screen and (min-device-width : 320px) and (max-device-width : 1024px) {
            flex-direction: column-reverse;
        }
        .infos{
            display:flex;
            flex-direction: column;
            width: 70%;
            padding: 12px;
            background: ${CorCinzaSecundaria};
            @media only screen and (min-device-width : 320px) and (max-device-width : 1024px) {
                width: 100%;
            }
            .detail-info{               
                width:100%;
                margin-bottom:20px;
                h3{
                    color: ${CorAzulPadrao};
                    border-bottom: 1px solid ${CorAzulPadrao};
                    margin-bottom: 14px;
                    padding-bottom:12px;
                }
                p{
                    color: ${CorPretaPadrao};
                    line-height: 17pt;
                }
         
            }

            .topics{
                display:flex;
                flex-direction: column;
                .info-topics{
                    display:flex;
                    justify-content: space-between;
                    @media only screen and (min-device-width : 320px) and (max-device-width : 1024px) {
                        flex-direction: column;
                        justify-content: left !important;
                        align-content: center;
                    }                    
                    .info{
                        display:flex;
                        flex-direction:column;
                        width: 20%;
                        text-align:center;
                        @media only screen and (min-device-width : 320px) and (max-device-width : 1024px) {
                            width: 100%;
                            margin-bottom:10px;
                            justify-content: center;
                            align-items: center;
                        }                        
                        h4{
                            color: ${CorAzulPadrao}
                            padding-bottom:14px;
                            @media only screen and (min-device-width : 320px) and (max-device-width : 1024px) {
                                border-bottom: 1px dotted ${CorAzulPadrao};
                            }
                        }
                    }                    
                }
            }

        }

        .detail-image{
            width:30%;
            @media only screen and (min-device-width : 320px) and (max-device-width : 1024px) {
                width:100%;
            }
            img{
                width:100%;
            }
        }
    }

`;

export const RatingBox = styled.div`
    display:flex;
    width:100%;
    flex-direction: row-reverse;

    .rating{
        width: 82px;
        font-size: 1.7em;
        display:flex;
        color: ${CorAzulClaro};
        background: #266092;
        border: 2px solid #266092;
        box-shadow: 0 0 0 3px ${CorAzulClaro} inset;
        border-radius: 80px;
        padding: 24px 12px;
        text-align:center;
        margin:20px;
        transition: all ease 0.4s;
        cursor:pointer;
        
        &:hover{
            background: ${CorAzulHover};
        }
        
    }
`;

export const MensagemBusca = styled.div`
    margin-top:50px;
    text-align: center;
    font-size: 2.5em;
    color: ${CorCinza};
`;