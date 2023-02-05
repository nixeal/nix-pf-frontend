import React, { useContext } from "react";
import "./latest.css";
import {Card} from 'react-bootstrap';
import { ThemeContext } from "../../utils/ThemeContext";
import WritingCard from "../writing-components/WritingCard";
export  function LatestCard ({ latestWriting }) {

  const {theme}= useContext(ThemeContext) 
  return (
      <Card className="latest-card shadow hover text-left h-auto"  style={theme}>
        <div className="bottom" >
          {latestWriting.map((each)=>{
            return (
              <WritingCard key={each._id} writing={each}></WritingCard>
            )
          })}
        </div>
      </Card>
  );
};
