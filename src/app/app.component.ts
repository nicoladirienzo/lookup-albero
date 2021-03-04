import { Component, VERSION } from "@angular/core";
import { CheckableSettings } from "@progress/kendo-angular-treeview";
import { of, Observable } from "rxjs";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {



  public enableCheck = false;

  public checkChildren = true;

  public checkParents = true;
  
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
    }
  ];

}
