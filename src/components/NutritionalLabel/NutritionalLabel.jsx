import * as React from "react"
import { nutritionFacts } from "../../constants"
import "./NutritionalLabel.css"

export function NutritionalLabel(props) {
  
  return (
    <div className="nutritional-label">
      <h3 className="title">Nutrition Facts</h3>

      <h4 className="item-name">{props.item.item_name}</h4>

      <ul className="fact-list">
        { nutritionFacts.map((fact) => {
          let attributeName = fact.attribute;
          if (fact.attribute == "fiber") {
            attributeName = "dietary_fiber";
          }
          return (
          <NutritionalLabelFact
            key={fact.id}
            label={fact.label}
            attribute={attributeName}
            item={props.item}
          >
          </NutritionalLabelFact>)
        })
        }
        </ul>
    </div>
  )
}

export function NutritionalLabelFact(props) {
  return (
    <li className="nutrition-fact">
      <span className="fact-label">{props.label}</span>{" "}
      <span className="fact-value">{props.item[props.attribute]}</span>
    </li>
  )
}

export default NutritionalLabel
