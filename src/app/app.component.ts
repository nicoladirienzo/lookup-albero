import { Component, VERSION } from "@angular/core";
import { treeData } from "./mock.data";
import { MockTreeLookupService } from "./mock.service";
import { checkType, TreeModel } from "./tgk-lookup-tree/model/lookup-tree.model";




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


  public checkMode: checkType = "multiple";

  public treeData = treeData;

  constructor(
    public mockTreeLookupService: MockTreeLookupService 
  ){

  }
  
}
