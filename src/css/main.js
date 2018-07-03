import styled from 'styled-components';

const CorAzulPadrao = "#266092";
const CorAzulClaro = "#48e8e5";

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
        color: #fff;
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
            width:50%;
            @media only screen and (min-device-width : 320px) and (max-device-width : 767px) { 
                display:none;
            }
            img{
                width:100%;
            }
        }
        .movie-info{
            background: #f3f3f3;
            .movie-header{
                position:relative;
                display:flex;
                align-items: flex-end;
                width:100%;
                height:70px;
                padding: 10px 10px 10px 80px;
                color: #48e8e5;
                background: #266092;

                .rating{
                    position: absolute;
                    background: #266092;
                    border: 2px solid #266092;
                    box-shadow: 0 0 0 3px #48e8e5 inset;
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
        padding:4px 8px;
        border-radius: 20px;
        border:1px solid #266092;
        color: #266092;
        background: #fff;
        font-size: 0.8em;
        margin-right: 6px;
    }
`;


export const Pagination = styled.div`
    display:flex;
    justify-content: space-between;
    margin:30px auto 30px auto;
    width: 200px;
    .page{
        color: #266092;
        padding: 12px 16px;
        cursor: pointer;
        transition: all ease 0.3s;
        &:hover{
            color: #039;
        }
    }
    .page.active{
        border: 2px solid #266092;
        box-shadow: 0 0 0 3px #48e8e5 inset;
        border-radius: 40px;
        padding: 12px 16px; 
        text-align:center; 
        color: white; 
        background: #266092;       
    }
`;


export const MovieDetail = styled.div`
    display:flex;
    width:80%;
    flex-direction: column; 
    .detail-header{
        display:flex;
        width:100%;
        height: 70px;
        padding:20px;
        background: #e2e2e2;
        justify-content:space-between;
        
        .movie-title{
            font-size: 2em;
            color: ${CorAzulPadrao}
            
        }
    }

    .detail-body{
        display:flex;
        
        .infos{
            display:flex;
            flex-direction: column;
            width: 100%;
            padding: 12px;
            background: #f3f3f3;

            .detail-info{               
                width:100%;
                margin-bottom:20px;
                h3{
                    color: ${CorAzulPadrao};
                    border-bottom: 1px solid ${CorAzulPadrao};
                    margin-bottom: 14px;
                    padding-bottom:12px;
                }
         
            }

            .topics{
                display:flex;
                flex-direction: column;
                .info-topics{
                    display:flex;
                    justify-content: space-between;
                    .info{
                        display:flex;
                        flex-direction:column;
                        width: 20%;
                        h4{
                            color: ${CorAzulPadrao}
                        }
                    }                    
                }
            }

        }

        .rating{
            width: 82px;
            font-size: 1.7em;
            display:flex;
            background: #266092;
            border: 2px solid #266092;
            box-shadow: 0 0 0 3px ${CorAzulClaro} inset;
            border-radius: 40px;
            padding: 24px 12px;
            text-align:center;
            margin:20px;
            
        }

    }

`;
