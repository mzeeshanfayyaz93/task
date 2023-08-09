import React from 'react'

const Circle = () => {
  return (
    <div>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
  <g filter="url(#filter0_ddd_1_2564)">
    <circle cx="12" cy="9" r="6" fill="#FFCC00"/>
    <circle cx="12" cy="9" r="5" stroke="#FFCC00" stroke-width="2"/>
  </g>
  <defs>
    <filter id="filter0_ddd_1_2564" x="0" y="0" width="24" height="25" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="4"/>
      <feGaussianBlur stdDeviation="3"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_2564"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="1"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.941176 0 0 0 0 0.768627 0 0 0 0 0.0980392 0 0 0 0.5 0"/>
      <feBlend mode="normal" in2="effect1_dropShadow_1_2564" result="effect2_dropShadow_1_2564"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset/>
      <feGaussianBlur stdDeviation="0.5"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.941176 0 0 0 0 0.768627 0 0 0 0 0.0980392 0 0 0 1 0"/>
      <feBlend mode="normal" in2="effect2_dropShadow_1_2564" result="effect3_dropShadow_1_2564"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_1_2564" result="shape"/>
    </filter>
  </defs>
</svg>
    </div>
  )
}

export default Circle
