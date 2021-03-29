import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { CheckableSettings } from '@progress/kendo-angular-treeview';
import { LookupRootServiceParameters, TreeLookupItem, } from '../../model/lookup-tree.model';
import { TgkTreeViewService } from '../../service/tgk-lookup-tree.services';

@Component({
  selector: 'app-lookup-tree',
  templateUrl: './lookup-tree.component.html',
  styleUrls: ['./lookup-tree.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LookupTreeComponent implements OnInit {


  @Input()
  public enableCheck;

  @Input()
  public checkChildren;

  @Input()
  public checkParents;
  
  @Input()
  public checkOnClick;
  
  @Input()
  public checkMode: any;
  
  @Input()
  public data: TreeLookupItem[];

  @Input()
  public checkedKeys: any[];

  @Output() checkedSelectionChanged: EventEmitter<any[]> = new EventEmitter<any[]>();

  @Input()
  rootServiceParam: LookupRootServiceParameters;

  @Input()
  public treeService: TgkTreeViewService;

  public get checkableSettings(): CheckableSettings {
    return {
      checkChildren: this.checkChildren,
      checkParents: this.checkParents,
      enabled: this.enableCheck,
      mode: this.checkMode,
      checkOnClick: this.checkOnClick
    };
  }

  public hasChildren = (dataItem: any): boolean => !!dataItem.items;

  public expanded = true;

  constructor() { 
  }

  ngOnInit(): void {

  }

  // listener lanciato alla selezione di un nuovo elemento dell'albero
  onSelectItem(event:any){
    this.checkedSelectionChanged.emit(this.checkedKeys)
  }


}
