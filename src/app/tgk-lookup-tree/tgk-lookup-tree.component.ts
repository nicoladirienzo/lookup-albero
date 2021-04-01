import { Component, Input, OnInit } from '@angular/core';
import { LookupRootServiceParameters} from './model/lookup-tree.model';
import { TgkTreeViewService } from './service/tgk-lookup-tree.services';



@Component({
  selector: 'tgk-lookup-tree',
  templateUrl: './tgk-lookup-tree.component.html',
  styleUrls: ['./tgk-lookup-tree.component.css']

})
export class TgkLookupTreeComponent implements OnInit {


  /**
 * Determines if the checkbox feature is initially enabled. 
 */
  @Input()
  public enableCheck;

  /**
 * Determines if the children checkboxes will get 
 * selected when the user selects the parent checkbox. 
 */
  @Input()
  public checkChildren

  /**
 * Determines if the parent checkbox will get 
 * selected when the user selects all its children checkboxes.
 */
  @Input()
  public checkParents;

  /**
 * Specifies if clicking the node will
 *  check or uncheck the item. 
 */
  @Input()
  public checkOnClick;

  /**
 * Sets the Check Mode of the checkbox feature.
 * (single or multiple)
 */
  @Input()
  public checkMode: any;

  /**
   * 
   */
  @Input()
  public leafOnlySelection;

  /**
   * Contains the parameters needed for the calling of the service for fetch 
   * the root nodes of the tree.
   */
  @Input()
  rootServiceParam: LookupRootServiceParameters;

  /**
   * Generic Tree Lookup service. A concrete service must be
   * implemented on the component that include this TgkLookupComponent and 
   * passed as input parameter.
   */
  @Input()
  public treeService: TgkTreeViewService;

  // Valori attualmente selezionati. Vengono passati alla modale e sono restituiti da quest'ultima alla sua chiusura su 'Ok'
  public checkedValues: any[] = [];

  public opened = false;

  constructor() { }

  ngOnInit(): void {
  }

  onDialogOpenOrClose(eventValue: boolean): void {
    this.opened = eventValue;
  }

  onCheckedSelectionChange(newSelectionChange: any[]): void {
    this.checkedValues = newSelectionChange;
  }



}
