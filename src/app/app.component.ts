import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {



  public enableCheck = true;

  public checkChildren = false;

  public checkParents = false;
  
  public checkOnClick = false;
  
  public checkMode: any = "multiple";
  
  public selectionMode: any = "single";

  public treeData: any[] = [
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
        { text: "Car",
          items:[
            { text : "Ferrari"},
            { text : "Alfa Romeo"},
            { text : "Volvo"},
            { text : "Dacia"},
          ]
       },
        { text: "Van" },
        { text: "Truck" ,
        items:[
          { text : "Scania"},
        ]
      }
      ]
    }
  ];

}
