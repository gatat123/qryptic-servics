"use client";

import Data from "@data/sections/hero-1.json";
import Link from "next/link";

import { useEffect } from "react";
import { ScrollAnimation } from "@common/scrollAnims";

const HeroOne = () => {
    useEffect(() => {
        ScrollAnimation();
    }, []);

    return (
        <>
            {/* banner */}
            <section className="mil-banner">
                <img src={Data.bg_image} className="mil-bg-img mil-scale" data-value-1=".4" data-value-2="1.4" alt="image" />
                
                <div className="mil-overlay" />
                <div className="container">
                    <div className="mil-background-grid mil-top-space" />
                    <div className="mil-banner-content">
                        <div className="row align-items-end">
                            <div className="col-xl-7">
                                <div className="mil-mb-60">
                                    <span className="mil-suptitle mil-light mil-upper mil-mb-30" dangerouslySetInnerHTML={{__html : Data.subtitle}} />
                                    <h1 className="mil-upper mil-light mil-mb-30" dangerouslySetInnerHTML={{__html : Data.title}} />
                                    {Data.description && (
                                        <p className="mil-text-lg mil-light-soft mil-mb-40" dangerouslySetInnerHTML={{__html : Data.description}} />
                                    )}
                                </div>
                            </div>
                            <div className="col-xl-5">
                                <div className="mil-center mil-mb-40">
                                    <Link href={Data.button.link} className="mil-button mil-sm mil-light">{Data.button.label}</Link>
                                </div>
                                <div className="row mil-mb-60">
                                    {Data.numbers.map((item, key) => (
                                    <div className="col-6" key={`hero-numbers-item-${key}`}>
                                        <div className="mil-counter-frame mil-light mil-mb-30">
                                            <h4 className="mil-accent-enhanced on-dark mil-thin mil-mb-10">
                                                <span className="mil-counter" data-number={item.value}>0</span>{item.afterValue}
                                            </h4>
                                            <p className="mil-light mil-mb-5" dangerouslySetInnerHTML={{__html : item.label}} />
                                            {item.description && (
                                                <small className="mil-light-soft mil-text-xs">{item.description}</small>
                                            )}
                                        </div>
                                    </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* banner end */}
        </>
    );
}
export default HeroOne;