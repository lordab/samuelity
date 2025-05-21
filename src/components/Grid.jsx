import React from "react";
import Card from "./Card";
function Grid() {
    return(
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 p-2 md:p-6">
            <Card header="Web Development" description="Take your business online with a highly responsive, attractive, and professional website."/>
            <Card header="SEO" description="Boost your visibility with expert SEO strategies that drive traffic and grow your business."/>
            <Card header="Social Media Optimization (SMO)" description="Enhance your brand presence and engagement across platforms with data-driven social media strategies that connect and convert."/>
            <Card header="Social media ads" description="Enhance your brand presence and engagement across platforms with data-driven social media strategies that connect and convert."/>
        </div>
    )
}

export default Grid;