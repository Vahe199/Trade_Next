import React from 'react';
import Header from "../../component/Header";
import Hero from "../../component/Hero";
import {Page} from "../../component/elements/Example";
import {cx} from "@linaria/core";


export default function Linaria() {
    return (
        <div className={cx(Page)}>
            <Header />
            <Hero />
        </div>
    );
}
