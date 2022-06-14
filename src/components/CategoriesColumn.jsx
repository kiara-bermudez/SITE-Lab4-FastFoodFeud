import * as React from "react"
import Chip from "./Chip/Chip"

export function CategoriesColumn({ closeCategoryClick, currentCategory, setCurrentCategory, categories, setSelectedMenuItem}) {

    return (
        <div className="CategoriesColumn col">
        <div className="categories options">
            <h2 className="title">Categories</h2>
            {categories.map((category) => (
            <Chip
                key={category} 
                label={category} 
                isActive={category===currentCategory}
                onClick={() => {
                setSelectedMenuItem(null);
                
                if (closeCategoryClick) {
                    closeCategoryClick=false;
                } else {
                    setCurrentCategory(category);
                    console.log("here2");
                }
                console.log("here",category);
                console.log("onclick");
                }}

                closeClick={() => {
                setCurrentCategory(null);
                closeCategoryClick=true;
                console.log("closeclick");
                
                }}
                
                >
            </Chip>
            ))}
        </div>
        </div>
    
    )
  }
  
  export default CategoriesColumn