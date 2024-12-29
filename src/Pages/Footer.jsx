import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Play',
    path: '/trivia',
    icon: <IoIcons.IoLogoGameControllerA />,
    cName: 'nav-text'
  },
  {
    title: 'Analytics',
    path: '/analytics',
    icon: <IoIcons.IoIosPie />,
    cName: 'nav-text'
  },
  {
    title: 'Team',
    path: '/about',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Leaderboard',
    path: '/leaderboard',
    icon: <IoIcons.IoIosPodium />,
    cName: 'nav-text'
  }
];