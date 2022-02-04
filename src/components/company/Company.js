import React from 'react';
import { AiOutlinePlusSquare } from "react-icons/ai";
import { BiBuildings } from "react-icons/bi";
import { AiOutlineTags} from "react-icons/ai";
import { RiNewspaperLine } from "react-icons/ri";
import { AiFillCloseCircle } from "react-icons/ai";
import { BiDownArrow } from "react-icons/bi";
import Card from '../card/Card'
import './company.css'


const Company = () => {
  return (
      <div className="wrapper">
          <div className="side-nav">
                <p>
                   <span> Competitive Database </span><br />
                    ALDI SUD Dienstleistungs-SE & co.oHG
                </p>
                <div className="tags">
                    <div className="sub-tags">
                        <span className="icon">  <BiBuildings size={32} /></span>
                        <a href="/" className="">Companies</a>
                    </div>
                    <div className="sub-tags">
                        <span className="icon">  <AiOutlineTags size={32} /></span>
                        <a href="/" className="">Tags</a>
                    </div>
                    <div className="sub-tags">
                        <span className="icon">  <RiNewspaperLine size={32} /></span>
                        <a href="/" className="">News</a>
                    </div>

                  
                </div>
                
          </div>
          <div className="nav-wrapper">
                <div className="top-nav">
                    <h2>Companies</h2>
                    <div className="top-link">
                        <span className="icon"><AiOutlinePlusSquare size={24}  /></span>
                        <a href="/">
                            CREATE COMPANY
                        </a>
                    </div>
                    
                </div>
               <div className="wrapper-link">
                <div className="group-dropdown">
                        <div className="dropdown">
                            <span className="icon"><AiFillCloseCircle size={24}  /></span>
                                <a href="/">
                                    DELETE
                                </a>
                            <span><BiDownArrow /></span>
                        </div>
                            <a href="/">APPLY </a>  
                    </div>
               </div>
               <Card />
               <Card />
               <Card />
          </div>
      </div>
  )
};

export default Company;
