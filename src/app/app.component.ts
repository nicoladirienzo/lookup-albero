import { Component, VERSION } from "@angular/core";
import { checkType, TreeModel } from "./tgk-lookup-tree/model/lookup-tree.model";




@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {



  /**
   * Determines if the checkbox feature is initially enabled. 
   */
  public enableCheck = true;

  /**
   * Determines if the children checkboxes will get 
   * selected when the user selects the parent checkbox. 
   */
  public checkChildren = false;

  /**
   * Determines if the parent checkbox will get 
   * selected when the user selects all its children checkboxes.
   */
  public checkParents = false;

  /**
   * Specifies if clicking the node will
   *  check or uncheck the item. 
   */
  public checkOnClick = false;

  /**
   * Sets the Check Mode of the checkbox feature.
   * (single or multiple)
   */
  public checkMode: checkType = "multiple";

  public treeData: TreeModel[] = [
    {
      text: "Furniture",
      items: [
        { text: "Tables & Chairs" },
        { text: "Sofas" },
        { text: "Occasional Furniture" }
      ]
    },
    {
      text: "Decor",
      items: [
        { text: "Bed Linen" },
        { text: "Curtains & Blinds" },
        { text: "Carpets" }
      ]
    },

    {
      text: "Vehicles",
      items: [
        {
          text: "Car",
          items: [
            { text: "Ferrari" },
            { text: "Alfa Romeo" },
            { text: "Volvo" },
            { text: "Dacia" },
          ]
        },
        { text: "Van" },
        {
          text: "Truck",
          items: [
            { text: "Scania" },
          ]
        }
      ]
    }
  ];

}
