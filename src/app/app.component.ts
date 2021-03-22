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
      id:"1",
      items: [
        { text: "Tables & Chairs",
        id:"2"
      },
        { text: "Sofas" ,
        id:"3"
      },
        { text: "Occasional Furniture",
        id:"4"
      }
      ]
    },
    {
      text: "Decor",
      id:"5",

      items: [
        { text: "Bed Linen" ,
        id:"6"
      },
        { text: "Curtains & Blinds",
        id:"7"
      },
        { text: "Carpets",
        id:"8"

      }
      ]
    },

    {
      text: "Vehicles",
      id:"9",
      items: [
        {
          text: "Car",
          id:"10",
          items: [
            { text: "Ferrari" ,
            id:"12"},
            { text: "Alfa Romeo",
            id:"13" },
            { text: "Volvo" ,
            id:"14"},
            { text: "Dacia",
            id:"15" },
          ]
        },
        { text: "Van",
        id:"16" },
        {
          text: "Truck",
          id:"11",

          items: [
            { text: "Scania",
            id:"17" },
          ]
        }
      ]
    }
  ];

}
