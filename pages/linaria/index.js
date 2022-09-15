import React from 'react';
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import {Page} from "../../components/elements/Example";
import {cx} from "@linaria/core";


export default function Linaria() {
    return (
        <div className={cx(Page)}>
            <Header />
            <Hero />
        </div>
    );
}
