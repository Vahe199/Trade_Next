import React from 'react';
import codeSample from '../public/vercel.svg';
import {HeroContainer} from "./elements/HeroContainer";
import Container from "./elements/Container";
import {Row} from "./elements/Row";
import {LeftColumn} from "./elements/LeftColumn";
import {Heading} from "./elements/Heading";
import {Button} from "./elements/Button";
import {RightColumn} from "./elements/RightColumn";
import {CodeSample} from "./elements/CodeSample";
import {Description} from "./elements/Description";


export default function Hero() {
    return (
        <HeroContainer>
            <Container>
                <Row>
                    <LeftColumn>
                        <Heading>Zero-Runtime CSS in JS</Heading>
                        <Description>
                            Write CSS in JS and get real CSS files during build. Use dynamic
                            prop based styles with the React bindings and have them transpiled
                            to CSS variables automatically. Great productivity with source
                            maps and linting support.
                        </Description>
                        <Button cursor={"pointer"}
                            as="a"
                            href="https://github.com/callstack/linaria#installation"
                        >
                            Get Started
                        </Button>
                    </LeftColumn>
                    <RightColumn>
                        <CodeSample alt="Linaria code sample" src={codeSample} />
                    </RightColumn>
                </Row>
            </Container>
        </HeroContainer>
    );
}




