import React from "react";

const HamburgerMenu = ({ checked, onChange, strokeColor = "#6FE6B8", size = "2.2em" }) => {
  return (
    <>
      <style>{`
        .ui-hamburger {
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          user-select: none;
          margin: 0;
          padding: 0;
        }

        .ui-hamburger input {
          display: none;
        }

        .ui-hamburger svg {
          height: ${size};
          width: ${size};
          transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
        }

        .ui-hamburger .line {
          fill: none;
          stroke: ${strokeColor};
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-width: 3;
          transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
                      stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
        }

        .ui-hamburger .line-top-bottom {
          stroke-dasharray: 12 63;
        }

        .ui-hamburger input:checked + svg {
          transform: rotate(-45deg);
        }

        .ui-hamburger input:checked + svg .line-top-bottom {
          stroke-dasharray: 20 300;
          stroke-dashoffset: -32.42;
        }
      `}</style>

      <label className="ui-hamburger">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />
        <svg viewBox="0 0 32 32">
          <path
            className="line line-top-bottom"
            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
          />
          <path className="line" d="M7 16 27 16" />
        </svg>
      </label>
    </>
  );
};

export default HamburgerMenu;
