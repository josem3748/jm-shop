import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import React from "react";

function StartsRating(props) {
  const stars = [];
  for (let i = 1; i <= props.qestrellas; i++) {
    stars.push(<FontAwesomeIcon key={i} icon={faStar} color="green" />);
  }
  return stars;
}

export default StartsRating;
