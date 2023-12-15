import { MouseEventHandler } from "react";

interface EyeIconProps {
  isVisible: boolean;
  onClick: MouseEventHandler<SVGElement>;
}

function EyeIcon({ isVisible, onClick }: EyeIconProps) {
  return isVisible ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="20"
      width="20"
      viewBox="0 0 18 18"
      className="absolute top-3 right-3 cursor-pointer"
      onClick={onClick}
    >
      <title>eye open</title>
      <g fill="#171A1FFF" stroke="#171A1FFF" className="nc-icon-wrapper">
        <path
          d="M1.859,8c1.815-1.851,4.344-3,7.141-3s5.326,1.148,7.141,3"
          fill="none"
          stroke="#171A1FFF"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <circle
          cx="9"
          cy="10.5"
          r="2.75"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          data-color="color-2"
        />
        <line
          x1="4.021"
          y1="6.328"
          x2="2.75"
          y2="4.25"
          fill="none"
          stroke="#171A1FFF"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <line
          x1="7.3"
          y1="5.144"
          x2="6.823"
          y2="2.769"
          fill="none"
          stroke="#171A1FFF"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <line
          x1="13.979"
          y1="6.328"
          x2="15.25"
          y2="4.25"
          fill="none"
          stroke="#171A1FFF"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <line
          x1="10.7"
          y1="5.144"
          x2="11.177"
          y2="2.769"
          fill="none"
          stroke="#171A1FFF"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </g>
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="20"
      width="20"
      viewBox="0 0 18 18"
      className="absolute top-3 right-3 cursor-pointer"
      onClick={onClick}
    >
      <title>eye closed</title>
      <g fill="#171A1FFF" className="nc-icon-wrapper">
        <path
          d="M1.859,7.27c1.815,1.851,4.344,3,7.141,3s5.326-1.148,7.141-3"
          fill="none"
          stroke="#171A1FFF"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <line
          x1="4.021"
          y1="8.942"
          x2="2.75"
          y2="11.019"
          fill="none"
          stroke="#171A1FFF"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <line
          x1="7.3"
          y1="10.126"
          x2="6.823"
          y2="12.5"
          fill="none"
          stroke="#171A1FFF"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <line
          x1="13.979"
          y1="8.942"
          x2="15.25"
          y2="11.019"
          fill="none"
          stroke="#171A1FFF"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <line
          x1="10.7"
          y1="10.126"
          x2="11.177"
          y2="12.5"
          fill="none"
          stroke="#171A1FFF"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </g>
    </svg>
  );
}

export default EyeIcon;
