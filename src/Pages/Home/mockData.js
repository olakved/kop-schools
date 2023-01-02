import React from "react";
import { FaGraduationCap, FaBrain, FaCloudsmith } from "react-icons/fa";
import schoolImg from "../../Assets/Logo/schoolLogo.PNG";
import homeVideo from '../../Assets/Home/homeVideo.mp4'

export const HomeData = {
  homeBannerData: {
    title: "Let's be part of your story",
    video: homeVideo,
    buttonText: "Enroll Now",
  },

  valueData: [
    {
      icon: <FaGraduationCap />,
      smallText: "We deliver quality education in all our schools",
      bigText: "Quality Education",
    },

    {
      icon: <FaBrain />,
      smallText: `We deliver quality education in all our schools`,
      bigText: `Intellectual Development`,
    },

    {
      icon: <FaCloudsmith />,
      smallText: "We deliver quality education in all our schools",
      bigText: "Moral Ethics",
    },
  ],

  schoolData: {
    smallText: "OUR SCHOOLS",
    bigTitle: "A Quick View Of Our Schools",

    otherSchools: [
      {
        schoolImg: schoolImg,
        schoolName: "School A",
      },
      {
        schoolImg: schoolImg,
        schoolName: "School B",
      },
      {
        schoolImg: schoolImg,
        schoolName: "School C",
      },
      {
        schoolImg: schoolImg,
        schoolName: "School D",
      },
    ],
  },
};
