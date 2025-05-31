import React from "react";
import Card from "./Card";

function Grid() {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 p-2 md:p-6">
      <Card
        header="Web Development"
        description="Take your business online with a highly responsive, attractive, and professional website."
        image="./coding_1329016.png"
      />
      <Card
        header="SEO"
        image="./seo.png"
        description="Boost your visibility with expert SEO strategies that drive traffic and grow your business."
      />
      <Card
        image="social-media_1968777.png"
        header="Social Media Optimization (SMO)"
        description="Enhance your brand presence and engagement across platforms with data-driven social media strategies that connect and convert."
      />
      <Card
        image="marketing_15245530.png"
        header="Social media ads"
        description="Enhance your brand presence and engagement across platforms with data-driven social media strategies that connect and convert."
      />
      <Card
        image="bag_15245414.png"
        header="E-commerce Website"
        description="Take your business online with a highly responsive, attractive, and professional website."
      />
    </div>
  );
}

export default Grid;
