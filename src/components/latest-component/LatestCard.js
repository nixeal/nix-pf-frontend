import React, { useContext } from "react";
import "./latest.css";
import {Card} from 'react-bootstrap';
import { ThemeContext } from "../../utils/ThemeContext";
export  function LatestCard ({ latests }) {
  const {theme}= useContext(ThemeContext) 
  return (
      <Card className="latest-card shadow hover" style={theme}>
        <div className="bottom">
          <p className="info d-inline">{"nothing"}</p>
        </div>
      </Card>
  );
};
