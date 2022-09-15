import React from 'react';
import logo from '../public/favicon.ico';
import {NavBar} from "./elements/NavBar";
import {LogoImage} from "./elements/LogoImage";
import {Links} from "./elements/Links";
import {LinkItem} from "./elements/LinkItem";

export default function Header() {
    return (
        <NavBar>
            <LogoImage src={logo} alt="Linaria Logo" />
            <Links>
                <li>
                    <LinkItem href="https://github.com/callstack/linaria#features">
                        Features
                    </LinkItem>
                </li>
                <li>
                    <LinkItem
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/callstack/linaria/tree/master/docs"
                    >
                        Docs
                    </LinkItem>
                </li>
                <li>
                    <LinkItem
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/callstack/linaria"
                        title="GitHub"
                    >
                        GitHub
                    </LinkItem>
                </li>
            </Links>
        </NavBar>
    );
}

