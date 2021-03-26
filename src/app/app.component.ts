import { Component, VERSION } from "@angular/core";
import { MockTreeLookupService } from "./mock.service";
import { checkType, LookupRootServiceParameters} from "./tgk-lookup-tree/model/lookup-tree.model";




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

  public mockTreeLookupServiceParams: LookupRootServiceParameters = {
    dbId: "TCPM_DEMO_DEV",
    parameter: {
      "processCode": "BDG3",

      "scenarioType": "CONSOLIDATION",

      "userLimitation": "IS_VISIBLE",

      "mustBeActiveScenarios": true,

      "mustReadBlockedScenarioPeriods": true
    }
  }

  constructor(
    public mockTreeLookupService: MockTreeLookupService
  ) {

  }

}
