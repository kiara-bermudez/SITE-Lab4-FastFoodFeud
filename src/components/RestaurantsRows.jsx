import * as React from "react"
import Chip from "./Chip/Chip"

export function RestaurantsRows({ closeRestaurantClick, currentRestaurant, setCurrentRestaurant, restaurants, setSelectedMenuItem}) {
    return (
        <div className="RestaurantsRow">
        <h2 className="title">Restaurants</h2>
        <div className="restaurants options">
          {restaurants.map((restaurant) => (
            <Chip 
              key={restaurant} 
              label={restaurant}
              isActive={restaurant===currentRestaurant}
              onClick={() => {
                setSelectedMenuItem(null);
                if (closeRestaurantClick) {
                  closeRestaurantClick=false; 
                } else {
                  setCurrentRestaurant(restaurant);
                }

                console.log("onclick restaurant");
              }}
              
              closeClick={() => {
                setCurrentRestaurant(null);
                closeRestaurantClick=true;
                console.log("closeclick restaurant");
              }}
              >
            </Chip>
          ))}
          
        </div>
      </div>
    )
  }
  
  export default RestaurantsRows