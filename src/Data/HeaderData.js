import React from "react";
import {FaFacebook} from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

export const HeaderLinks = [
  {
    id: 1,
    url: "/",
    text: "Home",
  },
  {
    id: 2,
    url: "/about",
    text: "About",
  },
  {
    id: 3,
    url: "/projects",
    text: "Projects",
  },
  {
    id: 4,
    url: "/contact",
    text: "Contact",
  },
  {
    id: 5,
    url: "/resume",
    text: "Resume",
  },
];

export const socialMediaIcon = [ 
{
    id: 1,
    url: 'https://www.facebook.com/',
    icon: <FaFacebook />
},
{
    id: 2,
    url: 'https://github.com/',
    icon: <FaGithub/>
}
]
