import React from "react";

import Container from "components/ui/Container";
import Icon from "components/ui/Icon";

import * as Styled from "./styles";
import {
    faGithub,
    faInstagram,
    faYoutube,
    faSlack,
    faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import FirstLogo from "./FirstLogo";

const Footer: React.FC = () => (
    <Styled.Footer>
        <Container>
            <Styled.Links>
                <Styled.Link
                    href="https://www.instagram.com/7539teamelev8/"
                    rel="noreferrer noopener"
                    target="_blank"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Styled.Icon>
                        <Icon icon={faInstagram} />
                    </Styled.Icon>
                </Styled.Link>
                <Styled.Link
                    href="https://www.youtube.com/channel/UCsyFy_yFugPpYI08NQgjQnw"
                    rel="noreferrer noopener"
                    target="_blank"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Styled.Icon>
                        <Icon icon={faYoutube} />
                    </Styled.Icon>
                </Styled.Link>

                <Styled.Link
                    href="https://www.facebook.com/team7539/"
                    rel="noreferrer noopener"
                    target="_blank"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Styled.Icon>
                        <Icon icon={faFacebook} />
                    </Styled.Icon>
                </Styled.Link>
            </Styled.Links>
            <Styled.Links>
                <FirstLogo />
            </Styled.Links>
        </Container>
    </Styled.Footer>
);

export default Footer;
