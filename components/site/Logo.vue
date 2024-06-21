<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 200 200"
    width="400"
    height="400"
    class="coolshapes star-1"
  >
    <g clip-path="url(#cs_clip_1_star-1)">
      <mask
        id="cs_mask_1_star-1"
        style="mask-type: alpha"
        width="200"
        height="200"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M64 0H199V135H190.196V67.5C190.196 35.0833 163.917 8.80435 131.5 8.80435C99.0833 8.80435 72.8044 35.0832 72.8044 67.5V135H64V0ZM136 65L136 200L1 200L1.00001 65L9.80436 65L9.80436 132.5C9.80435 164.917 36.0833 191.196 68.5 191.196C100.917 191.196 127.196 164.917 127.196 132.5V65H136Z"
          fill="#fff"
        />
      </mask>
      <g mask="url(#cs_mask_1_star-1)">
        <path fill="#fff" d="M200 0H0v200h200V0z"></path>
        <path fill="#FFF9C5" fill-opacity="0.44" d="M200 0H0v200h200V0z"></path>
        <g filter="url(#filter0_f_748_4325)">
          <path
            fill="#00F0FF"
            fill-opacity="0.85"
            d="M158 22H15v108h143V22z"
          ></path>
          <path fill="#FF58E4" d="M209 101H52v116h157V101z"></path>
          <ellipse
            cx="156"
            cy="80"
            fill="#FFE500"
            fill-opacity="0.79"
            rx="83"
            ry="57"
          ></ellipse>
        </g>
      </g>
    </g>
    <!-- blur gradient -->
    <defs>
      <filter
        id="filter0_f_748_4325"
        width="344"
        height="315"
        x="-45"
        y="-38"
        color-interpolation-filters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
        <feBlend
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        ></feBlend>
        <feGaussianBlur
          result="effect1_foregroundBlur_748_4325"
          stdDeviation="30"
        ></feGaussianBlur>
      </filter>
      <clipPath id="cs_clip_1_star-1">
        <path fill="#fff" d="M0 0H200V200H0z"></path>
      </clipPath>
    </defs>
    <!-- noise -->
    <g style="mix-blend-mode: overlay" mask="url(#cs_mask_1_star-1)">
      <path
        fill="gray"
        stroke="transparent"
        d="M200 0H0v200h200V0z"
        filter="url(#cs_noise_1_star-1)"
      ></path>
    </g>
    <defs>
      <filter
        id="cs_noise_1_star-1"
        width="100%"
        height="100%"
        x="0%"
        y="0%"
        filterUnits="objectBoundingBox"
      >
        <feTurbulence
          baseFrequency="0.6"
          numOctaves="5"
          result="out1"
          seed="4"
        ></feTurbulence>
        <feComposite
          in="out1"
          in2="SourceGraphic"
          operator="in"
          result="out2"
        ></feComposite>
        <feBlend
          in="SourceGraphic"
          in2="out2"
          mode="overlay"
          result="out3"
        ></feBlend>
      </filter>
    </defs>
  </svg>
</template>
