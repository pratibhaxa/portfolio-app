import { Link } from "react-router-dom";
import styled from "styled-components";
import Navigation from "./Navigation";
import image from '../images/proj1.png';
import WIP from '../images/WIP.jpg';

const Container = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`;

const Body = styled.div`
    
`;

// const Project1 = styled.img`
//     /* margin: 40px;
//     width: 300px;
//     height: 200px;
//     background-color: lightgray;
//     display: flex;
//     justify-content: center;
//     cursor: pointer;
//     &:hover {
//         transform: scale(1.02);
//         background-color: #b8b8b8;
//         border-color: black;
//     } 
//     */
//     width: 300px;
//     height: 200px;
// `;

// const Box1 = styled.a`
//     display: flex;
//     margin-top: 20%;
//     margin-left: 25%;
//     margin-right: 50%;
//     vertical-align: middle;
// `;

const Text = styled.h4`
    font-size: x-large;
    /* width: 270px; */
    text-align: center;
`;

const Box1 = styled.div`
    /* background-color: teal; */
    /* margin: 45%; */
    width: 300px;
    height: 200px;
    position:absolute;
    top:35%;
    left:25%;
    /* display: flex; */
`;

const Box2 = styled.div`
    
    width: 300px;
    height: 200px;
    position:absolute;
    top:35%;
    left:55%;
`;

const Image = styled.img`
    
`;

function Projects() {
    return(
        <Container>
            <Navigation />
            <Body>
                <Box1>
                    <a href="https://library-app-c6bf9.web.app/" target="_blank" rel="noreferrer">
                        <Image
                            style ={{
                                width: "300px",
                                height: "200px",
                                boxShadow: '0px 0px 99px #a29a91',
                                // margin: '4em',
                                padding: '0.5em',
                            }}
                        src = {image} />
                    </a>
                    <Text>
                        <a 
                            href="https://library-app-c6bf9.web.app/" 
                            target="_blank" 
                            rel="noreferrer"
                            style={{
                                textDecoration: "underline", 
                                textDecorationColor: "#926122", 
                                color: "#2C2C2C", 
                                fontFamily: "Courier New"
                            }}
                        >Check Live</a>
                    </Text>
                </Box1>
                <Box2>
                    <div>
                        <Image
                            style ={{
                                width: "300px",
                                height: "200px",
                                boxShadow: '0px 0px 99px #a29a91',
                                // margin: '4em',
                                padding: '0.5em',
                            }}
                        src = {WIP} />
                    </div>
                    <Text>
                        <div 
                            // href="https://library-app-c6bf9.web.app/" 
                            // target="_blank" 
                            // rel="noreferrer"
                            style={{
                                textDecoration: "underline", 
                                textDecorationColor: "#926122", 
                                color: "#2C2C2C", 
                                fontFamily: "Courier New"
                            }}
                        >Check Live</div>
                    </Text>
                </Box2>
            </Body>
        </Container>
    )
}

export default Projects;