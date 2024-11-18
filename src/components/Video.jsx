// eslint-disable-next-line no-unused-vars
import React from 'react';
import {Link} from "react-router-dom"

function Video({video}){
    console.log(video);
  return (
    <div className=''>
        <Link to={`/video/${video?.videoId}`}>

            <div className='flex flex-col'>
                <div>
                    <img src={video?.thumbnails[0]?.url} alt=""/>
                </div>
            </div>

        </Link>
    </div>
  )
}

export default Video