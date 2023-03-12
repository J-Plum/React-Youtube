import React from 'react';

export default function VideoItem({video}) {
  return (
    <li key={video.id}>
      {video.snippet.title}
    </li>
  );
}

