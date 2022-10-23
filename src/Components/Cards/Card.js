import React, { useState } from "react";
import "../../pages/Dashboard/Dashboard";

function Dashboard() {
  const [cards] = useState([
    {
      title: "Pending Orders",
      num: 505,
    },
    {
      title: "Active Orders",
      num: 505,
    },
    {
      title: "Delivered Orders",
      num: 505,
    },
    {
      title: "Customer Cancelled Orders",
      num: 505,
    },
    {
      title: "Restaurants",
      num: 505,
    },
    {
      title: "Categories",
      num: 505,
    },
    {
      title: "Food Items",
      num: 505,
    },
    {
      title: "Promotions",
      num: 505,
    },
  ]);
  return (
    <>
      <section>
        <div className="Container">
          <div className="cards">
            {cards.map((card, i) => (
              <div key={i} className="card">
                <h6> 
                    {card.title}
                </h6>
                <div>{card.num}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export default Dashboard;
