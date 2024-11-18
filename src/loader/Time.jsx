import React from "react";
import moment from 'moment';
function Time({time}) {
  const videoTime=moment()?.startOf("day")?.seconds(time)?.format("H:mm:ss")
  return (
    <div>Time</div>
  )
}

export default Time;
