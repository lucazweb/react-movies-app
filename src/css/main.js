import styled from 'styled-components';

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
        .thumb{
            width:50%;
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

            .tags{
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
                
            }
        }
    }

`;

export const Pagination = styled.div`
    display:flex;
    justify-content: space-between;
    margin-top:30px;
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



