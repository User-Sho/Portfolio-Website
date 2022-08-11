import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["home", "work", "certificates", "about", "contact"].map(
        (item, index) => (
          <a
            href={`#${item}`}
            key={item + index}
            className="app__navigation-dot"
            style={
              active === item ? { backgroundColor: "rgb(107, 95, 95)" } : {}
            }
          />
        )
      )}
    </div>
  );
};

export default NavigationDots;
