import React from "react";
import styled from "styled-components";

interface VideoCollageProps {
  videos: { source: string }[];
}

const CollageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px;
  width: 45%;
  height: 550px;
  overflow-y: scroll;

  @media (max-width: 1070px) {
    width: 20%;
  }
`;

const VideoItem = styled.video`
  width: 100%;
  height: auto;
`;

const VideoCollage: React.FC<VideoCollageProps> = ({ videos }) => {
  return (
    <CollageContainer>
      {videos.map((video, index) => (
        <VideoItem key={index} controls>
          <source src={video.source} type="video/mp4" />
          Your browser does not support the video tag.
        </VideoItem>
      ))}
    </CollageContainer>
  );
};

export default VideoCollage;
