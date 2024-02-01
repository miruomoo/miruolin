import React from "react";
import { Stack, Flex } from "@chakra-ui/react";

import "../styles/Work.scss";

const Work = ({
  imagePic,
  companyName,
  companyPosition,
  companyDate,
  companyDesc,
  companyLink,
  darkMode
}) => {
  return (
    <a className="a-link" href={companyLink}>
      <div className={
        darkMode?'WorkExperienceTextContainer':'WorkExperienceTextContainer light'
      }>
        <Flex direction="row">
          <img
            className="WorkExperienceImage"
            src={imagePic}
            alt="work experience"
          />
          <Stack>
            <p className="WorkExperienceTitle">{companyName}</p>
            <p className="WorkExperiencePosition">{companyPosition}</p>
            <p className="WorkExperienceDate">{companyDate}</p>
            <p className="WorkExperienceText">{companyDesc}</p>
          </Stack>
        </Flex>
      </div>
    </a>
  );
};

export default Work;