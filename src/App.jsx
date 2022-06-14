import * as React from "react"
// IMPORT ANY NEEDED COMPONENTS HERE
import Header from "./components/Header/Header"
import { createDataSet } from "./data/dataset"
import "./App.css"
import Instructions from "./components/Instructions/Instructions"
import CategoriesColumn from "./components/CategoriesColumn"
import RestaurantsRows from "./components/RestaurantsRows"
import MenuDisplay from "./components/MenuDisplay"
import DataSource from "./components/DataSource"

// don't move this!
export const appInfo = {
  title: `Fast Food Feud 🍔!`,
  tagline: `Folks' Favorite Friendly Fuel Finder For Food Facts`,
  description: `Finding healthy food is hard. Sometimes we just settle for what's available. That doesn't mean we shouldn't know what's going into our bodies! Fast Food Feud is here to arm the public with all the nutritional facts needed to make informed decisions about fast food consumption.`,
  dataSource: `All data pulled from the MenuStat.org interactive online database.`,
  instructions: {
    start: `Start by clicking on a food category on the left and a fast food joint from the list above. Afterwards, you'll be able to choose from a list of menu items and see their nutritional content.`,
    onlyCategory: `Now select a fast food restaurant from the list above!`,
    onlyRestaurant: `Now select a category from the list on the left!`,
    noSelectedItem: `Almost there! Choose a menu item and you'll have the fast food facts right at your fingertips!`,
    allSelected: `Great choice! Amazing what a little knowledge can do!`,
  },
}
// or this!
const { data, categories, restaurants } = createDataSet()

export function App() {
  const [currentCategory, setCurrentCategory] = React.useState(null);
  const [currentRestaurant, setCurrentRestaurant] = React.useState(null);
  let currentMenuItems = data.filter((item) => {return item.food_category === currentCategory && item.restaurant === currentRestaurant});
  const [selectedMenuItem, setSelectedMenuItem] = React.useState(null);
  let closeCategoryClick = false;
  let closeRestaurantClick = false;
  let closeMenuItemClick = false;

  let setInstruction = () => {
    let instruction = "";
    console.log("cat",currentCategory);
    console.log("rest",currentRestaurant);
    console.log("item",currentMenuItems);
    if (currentCategory && !currentRestaurant) {
      instruction = appInfo.instructions.onlyCategory;
    } else if (currentRestaurant && !currentCategory) {
      instruction = appInfo.instructions.onlyRestaurant;
    } else if (currentCategory && currentRestaurant && !selectedMenuItem) {
      instruction = appInfo.instructions.noSelectedItem;
    } else if (currentCategory && currentRestaurant && selectedMenuItem) {
      instruction = appInfo.instructions.allSelected;
    } else {
      instruction = appInfo.instructions.start;
    }

    return instruction;
  }

  return (
    <main className="App">
      {/* CATEGORIES COLUMN */}
      <CategoriesColumn closeCategoryClick={closeCategoryClick} currentCategory={currentCategory} setCurrentCategory={setCurrentCategory} categories={categories} setSelectedMenuItem={setSelectedMenuItem}/>

      {/* MAIN COLUMN */}
      <div className="container">
        {/* HEADER GOES HERE */}
        <Header title={appInfo.title} tagline={appInfo.tagline} description={appInfo.description}/>

        {/* RESTAURANTS ROW */}
        <RestaurantsRows closeRestaurantClick={closeRestaurantClick} currentRestaurant={currentRestaurant} setCurrentRestaurant={setCurrentRestaurant} restaurants={restaurants} setSelectedMenuItem={setSelectedMenuItem}/>

        {/* INSTRUCTIONS GO HERE */}
        <Instructions instructions={setInstruction()}/>

        {/* MENU DISPLAY */}
        <MenuDisplay closeMenuItemClick={closeMenuItemClick} currentMenuItems={currentMenuItems} selectedMenuItem={selectedMenuItem} setSelectedMenuItem={setSelectedMenuItem} />

        <DataSource appInfo={appInfo}/>
      </div>
    </main>
  )
}

export default App
