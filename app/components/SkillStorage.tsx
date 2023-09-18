import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode , faPaintBrush , faLaptop, faVideoCamera, faCut } from '@fortawesome/free-solid-svg-icons';


interface Skill {
  id: number;
  category: string;
  name: string;
  icon: string;
  color: string;
}

const SkillStorage: React.FC = () => {
  const list: Skill[] = [
    {
      id: 1,
      category: 'software development',
      name: 'React',
      icon: "faCode",
      color: 'rgba(148, 133, 242, 1)',
    },
    {
      id: 2,
      category: 'software development',
      name: 'Next Js',
      icon: "faCode",
      color: 'rgba(148, 133, 242, 1)',
    },
    {
      id: 3,
      category: 'software development',
      name: 'Javascript',
      icon: "faCode",
      color: 'rgba(148, 133, 242, 1)',
    },
    {
      id: 4,
      category: 'software development',
      name: 'Html&Css',
      icon: "faCode",
      color: 'rgba(148, 133, 242, 1)',
    },
    {
      id: 5,
      category: 'software development',
      name: 'Node Js',
      icon: "faCode",
      color: 'rgba(148, 133, 242, 1)',
    },
    {
      id: 6,
      category: 'software development',
      name: 'express Js',
      icon: "faCode",
      color: 'rgba(148, 133, 242, 1)',
    },
    {
      id: 7,
      category: 'software development',
      name: 'react native',
      icon: "faCode",
      color: 'rgba(148, 133, 242, 1)',
    },
    {
      id: 8,
      category: 'software development',
      name: 'kotlin',
      icon: "faCode",
      color: 'rgba(148, 133, 242, 1)',
    },
    {
      id: 9,
      category: 'software development',
      name: 'flutter',
      icon: "faCode",
      color: 'rgba(148, 133, 242, 1)',
    },
    {
      id: 10,
      category: 'software development',
      name: 'java',
      icon: "faCode",
      color: 'rgba(148, 133, 242, 1)',
    },
    {
      id: 11,
      category: 'software development',
      name: 'postgresSql',
      icon: "faCode",
      color: 'rgba(148, 133, 242, 1)',
    },
    {
        id: 12,
        category: 'ui/ux Design',
        name: 'figma',
        icon: "faPaintBrush",
        color: 'rgba(219, 37, 235, 1)',
      },
      {
        id: 13,
        category: 'ui/ux Design',
        name: 'mockitt',
        icon: "faPaintBrush",
        color: 'rgba(219, 37, 235, 1)',
      },
      {
        id: 14,
        category: 'Technical writing',
        name: 'medium',
        icon: ".faLaptop",
        color: 'rgba(190, 83, 83, 1)',
      },
      {
        id: 15,
        category: 'Technical writing',
        name: 'Twitter',
        icon: "faLaptop",
        color: 'rgba(190, 83, 83, 1)',
      },
      {
        id: 16,
        category: 'Video Editing',
        name: 'Vidcutter',
        icon: "faLaptop",
        color: 'rgba(144, 2, 255, 1)',
      },
      {
        id: 17,
        category: 'Video Editing',
        name: 'Flowblade',
        icon: "faLaptop",
        color: 'rgba(144, 2, 255, 1)',
      },
      
      {
        id: 18,
        category: 'Graphic Design',
        name: 'Krita',
        icon: "faLaptop",
        color: 'rgba(37, 225, 124, 1)',
      },
      {
        id: 19,
        category: 'Graphic Design',
        name: 'inkscape',
        icon: "faLaptop",
        color: 'rgba(37, 225, 124, 1)',
      },
      

  ];

  return (
    <div style={{
      display:"grid",
      gridTemplateColumns:"repeat(auto-fill, minmax(150px, 1fr))",
      gap:"35px",
      
      
    }} >
      
      {list.map(item=><div key={item.id} style={{
          display:"flex",
          flexDirection:"row",
          backgroundColor:item.color,
          justifyContent:"space-evenly",
          marginLeft:5,
          marginRight:5,
          padding:10,
          borderRadius:20
      }} >
          
          <p style={{
               paddingTop:5,
          }} >{item.name}</p>
      </div>)}
      </div>
  )
};

export default SkillStorage;
