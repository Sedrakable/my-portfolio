import React from "react";

export const Sun = React.forwardRef((_) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 12C5 11.7348 4.89464 11.4804 4.70711 11.2929C4.51957 11.1054 4.26522 11 4 11H3C2.73478 11 2.48043 11.1054 2.29289 11.2929C2.10536 11.4804 2 11.7348 2 12C2 12.2652 2.10536 12.5196 2.29289 12.7071C2.48043 12.8946 2.73478 13 3 13H4C4.26522 13 4.51957 12.8946 4.70711 12.7071C4.89464 12.5196 5 12.2652 5 12ZM5.64 17L4.93 17.71C4.74375 17.8974 4.63921 18.1508 4.63921 18.415C4.63921 18.6792 4.74375 18.9326 4.93 19.12C5.11736 19.3063 5.37081 19.4108 5.635 19.4108C5.89919 19.4108 6.15264 19.3063 6.34 19.12L7.05 18.41C7.21383 18.2187 7.29943 17.9726 7.28971 17.7209C7.27999 17.4693 7.17566 17.2305 6.99756 17.0524C6.81947 16.8743 6.58073 16.77 6.32905 16.7603C6.07738 16.7506 5.8313 16.8362 5.64 17ZM12 5C12.2652 5 12.5196 4.89464 12.7071 4.70711C12.8946 4.51957 13 4.26522 13 4V3C13 2.73478 12.8946 2.48043 12.7071 2.29289C12.5196 2.10536 12.2652 2 12 2C11.7348 2 11.4804 2.10536 11.2929 2.29289C11.1054 2.48043 11 2.73478 11 3V4C11 4.26522 11.1054 4.51957 11.2929 4.70711C11.4804 4.89464 11.7348 5 12 5ZM17.66 7.34C17.9223 7.3389 18.1737 7.23474 18.36 7.05L19.07 6.34C19.1747 6.25035 19.2597 6.14004 19.3197 6.01597C19.3797 5.89191 19.4135 5.75677 19.4188 5.61905C19.4241 5.48133 19.4009 5.344 19.3506 5.21568C19.3004 5.08735 19.2241 4.9708 19.1266 4.87335C19.0292 4.77589 18.9126 4.69964 18.7843 4.64936C18.656 4.59909 18.5187 4.57588 18.3809 4.5812C18.2432 4.58652 18.1081 4.62025 17.984 4.68027C17.86 4.7403 17.7496 4.82532 17.66 4.93L17 5.64C16.8137 5.82736 16.7092 6.08081 16.7092 6.345C16.7092 6.60919 16.8137 6.86264 17 7.05C17.1763 7.22536 17.4116 7.32875 17.66 7.34ZM5.66 7.05C5.84626 7.23474 6.09766 7.3389 6.36 7.34C6.49161 7.34076 6.62207 7.31554 6.74391 7.26577C6.86574 7.21601 6.97656 7.14268 7.07 7.05C7.25625 6.86264 7.36079 6.60919 7.36079 6.345C7.36079 6.08081 7.25625 5.82736 7.07 5.64L6.36 4.93C6.26742 4.8361 6.15725 4.76136 6.03578 4.71005C5.91432 4.65873 5.78393 4.63184 5.65207 4.63091C5.52021 4.62998 5.38946 4.65503 5.26728 4.70463C5.14511 4.75424 5.0339 4.82742 4.94 4.92C4.8461 5.01258 4.77136 5.12275 4.72005 5.24422C4.66873 5.36568 4.64184 5.49607 4.64091 5.62793C4.63903 5.89423 4.74302 6.15037 4.93 6.34L5.66 7.05ZM21 11H20C19.7348 11 19.4804 11.1054 19.2929 11.2929C19.1054 11.4804 19 11.7348 19 12C19 12.2652 19.1054 12.5196 19.2929 12.7071C19.4804 12.8946 19.7348 13 20 13H21C21.2652 13 21.5196 12.8946 21.7071 12.7071C21.8946 12.5196 22 12.2652 22 12C22 11.7348 21.8946 11.4804 21.7071 11.2929C21.5196 11.1054 21.2652 11 21 11ZM18.36 17C18.17 16.8943 17.9508 16.8534 17.7355 16.8835C17.5202 16.9136 17.3205 17.0131 17.1668 17.1668C17.0131 17.3205 16.9136 17.5202 16.8835 17.7355C16.8534 17.9508 16.8943 18.17 17 18.36L17.71 19.07C17.8974 19.2563 18.1508 19.3608 18.415 19.3608C18.6792 19.3608 18.9326 19.2563 19.12 19.07C19.3063 18.8826 19.4108 18.6292 19.4108 18.365C19.4108 18.1008 19.3063 17.8474 19.12 17.66L18.36 17ZM12 6.5C10.9122 6.5 9.84883 6.82257 8.94436 7.42692C8.03989 8.03126 7.33494 8.89025 6.91866 9.89524C6.50238 10.9002 6.39346 12.0061 6.60568 13.073C6.8179 14.1399 7.34172 15.1199 8.11091 15.8891C8.8801 16.6583 9.86011 17.1821 10.927 17.3943C11.9939 17.6065 13.0998 17.4976 14.1048 17.0813C15.1098 16.6651 15.9687 15.9601 16.5731 15.0556C17.1774 14.1512 17.5 13.0878 17.5 12C17.4974 10.5421 16.917 9.14471 15.8862 8.11383C14.8553 7.08295 13.4579 6.50264 12 6.5ZM12 15.5C11.3078 15.5 10.6311 15.2947 10.0555 14.9101C9.47993 14.5256 9.03133 13.9789 8.76642 13.3394C8.50151 12.6999 8.4322 11.9961 8.56725 11.3172C8.7023 10.6383 9.03564 10.0146 9.52513 9.52513C10.0146 9.03564 10.6383 8.7023 11.3172 8.56725C11.9961 8.4322 12.6999 8.50151 13.3394 8.76642C13.9789 9.03133 14.5256 9.47993 14.9101 10.0555C15.2947 10.6311 15.5 11.3078 15.5 12C15.5 12.9283 15.1313 13.8185 14.4749 14.4749C13.8185 15.1313 12.9283 15.5 12 15.5ZM12 19C11.7348 19 11.4804 19.1054 11.2929 19.2929C11.1054 19.4804 11 19.7348 11 20V21C11 21.2652 11.1054 21.5196 11.2929 21.7071C11.4804 21.8946 11.7348 22 12 22C12.2652 22 12.5196 21.8946 12.7071 21.7071C12.8946 21.5196 13 21.2652 13 21V20C13 19.7348 12.8946 19.4804 12.7071 19.2929C12.5196 19.1054 12.2652 19 12 19Z"
      fill="black"
    />
  </svg>
));

export const Moon = React.forwardRef((_) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.64 12.9997C21.4957 12.8803 21.3207 12.804 21.1351 12.7792C20.9494 12.7545 20.7606 12.7823 20.59 12.8597C19.5326 13.3435 18.3829 13.5926 17.22 13.5897C15.0689 13.5871 13.006 12.7341 11.4812 11.2168C9.95632 9.69943 9.09321 7.64077 9.08001 5.48966C9.08457 4.8155 9.16848 4.14421 9.33001 3.48966C9.36429 3.3152 9.35143 3.13476 9.29277 2.96692C9.2341 2.79908 9.13175 2.64991 8.99626 2.53479C8.86076 2.41967 8.69702 2.34276 8.52191 2.31198C8.3468 2.28119 8.16665 2.29765 8.00001 2.35966C6.43234 3.06457 5.06958 4.15642 4.03977 5.53265C3.00996 6.90887 2.34689 8.52429 2.11286 10.2271C1.87883 11.93 2.08152 13.6644 2.70188 15.2674C3.32225 16.8704 4.33993 18.2894 5.65931 19.3911C6.9787 20.4928 8.55649 21.241 10.2445 21.5655C11.9324 21.8899 13.6752 21.7799 15.309 21.2459C16.9428 20.7118 18.414 19.7712 19.5844 18.5124C20.7548 17.2536 21.5861 15.7179 22 14.0497C22.0504 13.8587 22.0431 13.657 21.9791 13.4701C21.915 13.2833 21.797 13.1196 21.64 12.9997V12.9997ZM12.14 19.6897C10.4618 19.6778 8.82821 19.1475 7.46301 18.1714C6.0978 17.1953 5.06768 15.821 4.5137 14.2368C3.95971 12.6526 3.90895 10.9358 4.36835 9.32167C4.82776 7.70749 5.77487 6.27476 7.08001 5.21966V5.48966C7.08266 8.17815 8.15183 10.7558 10.0529 12.6568C11.9539 14.5578 14.5315 15.627 17.22 15.6297C17.9259 15.6323 18.63 15.5585 19.32 15.4097C18.6299 16.7152 17.5965 17.8075 16.3312 18.5688C15.0659 19.3301 13.6167 19.7315 12.14 19.7297V19.6897Z"
      fill="black"
    />
  </svg>
));
