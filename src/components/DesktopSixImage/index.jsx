import React from "react";

import { Img, Text } from "components";

const DesktopSixImage = ({props}) => {
  return (
    <>
    {props?.images_list.slice(1, 5).map((imgs, index) => (
      <div className="flex flex-col items-center justify-start w-full">
      <Img
          className="h-[120px] md:h-auto object-cover rounded-bl-lg rounded-br-lg w-full"
          src={imgs}
          alt="rectangleThirtyOne"
        />
      </div>
    ))}
      
    </>
  );
};

DesktopSixImage.defaultProps = {'images_list':["images/img_rectangle31.png"]  };

export default DesktopSixImage;
