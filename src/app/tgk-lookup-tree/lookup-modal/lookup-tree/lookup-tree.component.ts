import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { CheckableSettings, TreeItemLookup } from '@progress/kendo-angular-treeview';
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
  public leafOnlySelection: boolean;

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

  public hasChildren = (dataItem: any): boolean => !!dataItem.children;

  public expanded = true;

  constructor() { 
  }

  ngOnInit(): void {

  }

  // listener lanciato alla selezione di un nuovo elemento dell'albero
  // onSelectItem(event: any){
  //   console.log("Chiavi aggiornate:", this.checkedKeys)
  //   // this.checkedSelectionChanged.emit(this.checkedKeys)
  // }

  nodeExpandListener(value:any){
    console.log("espansione del nodo :", value);
    // this.treeService.getChildren()
  }


  // checkedChange(e){
  //   console.log("Evento", e);
  //   console.log("checkedKeys", this.checkedKeys);
  //   if (e.item.dataItem.type !== 'LEAF') {
  //     console.log("Nell'if", e.item.dataItem.type);
    
  //   }
  // }

  public isItemChecked = (value: any, index: string) => {
    return this.checkedKeys.indexOf(value.code) > -1 ? 'checked' : 'none';
}

  public handleChecking(itemLookup: TreeItemLookup): void {
    console.log("checkedKeys", this.checkedKeys)
    console.log("ItemLookup selezioanto",itemLookup);
    console.log("Tipo nodo", itemLookup.item.dataItem.type, "Valore", itemLookup.item.dataItem.desc);
    this.checkElaboration(itemLookup);  
  }
  

      

  private checkElaboration(itemLookup: TreeItemLookup) {
    const isItemChecked = this.checkedKeys.indexOf(itemLookup.item.dataItem.code) === -1;
    if (isItemChecked) {
      const onlyLeafSingleSelection = itemLookup.item.dataItem.type === 'LEAF' && this.leafOnlySelection === true && this.checkMode === 'single';
      if (onlyLeafSingleSelection) {
        this.checkedKeys.splice(0);
        this.checkedKeys.push(itemLookup.item.dataItem.code);
      }
      this.checkedSelectionChanged.emit(this.checkedKeys);
    } else {
      this.checkedKeys.splice(this.checkedKeys.indexOf(itemLookup.item.dataItem.code), 1);
    }
  }


}
