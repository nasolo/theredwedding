import React from 'react'

const Arrow = props => (
    <svg width={14} height={6} {...props}>
      <g fill="none" fillRule="evenodd">
        <path
          fill="black"
          d="M7 .07v1.428l-5.55 5.5L0 6.982zM7 .07v1.428l5.55 5.5L14 6.982z"
        />
        <path fill="black" d="M1.45 7L7 1.498 12.55 7z" />
      </g>
    </svg>
  );

  export default Arrow