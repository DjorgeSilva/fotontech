import styled from "styled-components"
import bgBanner from "../../img/bgBanner.png"

export const Container = styled.div`
    width: 100%;
    height: 90vh;
    background: ${props => props.theme.primary_color};
    position: relative;
    top: 10px;
`

export const BannerHome = styled.div`
    width: 100%;
    height: 90vh;
    background-image: url(${bgBanner});
    background-size: cover;

    display: flex;
    justify-content: center;
    flex-direction: column;

    @media (min-width: 950px){
        flex-direction: row;
    }

    .txtBanner{
        width: 100%;
        height: 100%;
        margin: 0 auto;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;


        h1{
            font-size: clamp(1.8rem, 3vw, 6rem);
            width: 80%;
            color: #fff;
            text-align: center;
            margin: 0 auto;
        }
        h6{
            font-size: clamp(1.1rem, 3vw, 2rem);
            width: 80%;
            color: #fff;
            text-align: center;
            margin: 0 auto;
            padding-top: 40px;
            font-weight: lighter;
        }
    }

        
    .txtBannerMarcas{
        width: 100%;
        height: 100%;
        margin: 0 auto;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;

        .wrap-grid{
            width: 50%;
            margin: 0 auto;

            .box-icone{
                width: 100%;

                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: row;
                
                img{
                    width:50px;
                    margin-right: 15px;
                }
    
                p{
                    color: #fff;
                    font-size: 1.8rem;
                    margin-top: 20px;
                }
            }


        }


    }

`