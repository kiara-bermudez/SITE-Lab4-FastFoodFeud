import * as React from "react"
import Chip from "./Chip/Chip"
import NutritionalLabel from "./NutritionalLabel/NutritionalLabel"

export function MenuDisplay({ closeMenuItemClick, currentMenuItems, selectedMenuItem, setSelectedMenuItem}) {
    return (
      <div className="MenuDisplay display">
          <div className="MenuItemButtons menu-items">
            <h2 className="title">Menu Items</h2>
            {currentMenuItems.map((item) => (
              <Chip
              key={item.item_name}
              label={item.item_name}
              isActive={item===selectedMenuItem}
              onClick={() => {
                if (closeMenuItemClick) {
                  closeMenuItemClick=false;
                } else {
                  setSelectedMenuItem(item);
                }
                
              }}
              closeClick={() => {
                setSelectedMenuItem(null);
                closeMenuItemClick=true;
                console.log("closeclick item");
              }}
              >
              </Chip>
            ))}
          </div>

          {/* NUTRITION FACTS */}
          <div className="NutritionFacts nutrition-facts">
            {selectedMenuItem != null ? 
              <NutritionalLabel 
                item={selectedMenuItem}
                >

              </NutritionalLabel>
              : <span></span>
            }
              
          </div>
        </div>
    )
  }
  
  export default MenuDisplay

