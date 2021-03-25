import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, pipe, Subscription } from 'rxjs';
import { TreeModel } from '../model/lookup-tree.model';
import { TgkTreeViewService } from '../service/tgk-lookup-tree.services';
import { LookupTreeComponent } from './lookup-tree/lookup-tree.component';

@Component({
  selector: 'app-lookup-modal',
  templateUrl: './lookup-modal.component.html',
  styleUrls: ['./lookup-modal.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LookupModalComponent implements OnInit, OnDestroy {

  @Output() isDialogOpenEventChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output() checkedValueChange: EventEmitter<any[]> = new EventEmitter<any[]>();

  @Input()
  public enableCheck;

  @Input()
  public checkChildren

  @Input()
  public checkParents;

  @Input()
  public checkOnClick;

  @Input()
  public checkMode: any;

  @Input()
  public treeData: TreeModel[];

  @Input()
  public treeService: TgkTreeViewService;

  // valori attualmente selezionati. Sono passati sia alla lookupTree che all'area di selezione
  @Input()
  public checkedValues: any[];

  public allowCustom = true;

  public rootNodesSubscription: Subscription;

  /**
   * Root node currently selected
   */
  public selectedRoot: TreeModel

  /**
   * List of roots node fetched from the related service
   */
  public listRoots: Array<TreeModel> = [];


  constructor() { }

  ngOnInit(): void {
    if (!this.treeService) return;
    this.rootNodesSubscription = this.treeService.getRoots().
      subscribe(rootNodesResult => {
        this.listRoots = rootNodesResult;
      })
  }

  ngOnDestroy(): void {
    this.rootNodesSubscription.unsubscribe()
  }

  public opened = true;

  public open() {
    this.isDialogOpenEventChange.emit(true);
    this.opened = true;
  }

  public closeOnCancel(status) {
    console.log(`Dialog result: ${status}`);
    this.isDialogOpenEventChange.emit(false);
    this.opened = false;

  }

  public closeOnConfirm(status) {
    console.log(`Dialog result: ${status}`);
    this.isDialogOpenEventChange.emit(false);
    this.checkedValueChange.emit(this.checkedValues);
    this.opened = false;

  }

  public onTreeValueChange(changedValues: any[]) {
    console.log("cambio selezione lookup, componente padre", changedValues);
    this.checkedValues = changedValues;
  }

}
function tap(): import("rxjs").OperatorFunction<TreeModel[], unknown> {
  throw new Error('Function not implemented.');
}

