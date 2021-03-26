import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, pipe, Subscription } from 'rxjs';
import { LookupRootServiceParameters, TreeLookupItem} from '../model/lookup-tree.model';
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
  public treeService: TgkTreeViewService;

  /**
   * Params needed by the service that fetched the nodes of the tree.
   */
  @Input()
  public rootServiceParam: LookupRootServiceParameters;

  

  // valori attualmente selezionati. Sono passati sia alla lookupTree che all'area di selezione
  @Input()
  public checkedValues: any[];

  public allowCustom = true;

  public rootNodesSubscription: Subscription;

  /**
   * Root node currently selected
   */
  public selectedRoot: TreeLookupItem

  /**
   * List of roots node fetched from the related service
   */
  public listRoots: Array<TreeLookupItem> = [];

  /**
   * List of children node fetched from the related service based on 
   * the current selectedRoot
   */
  public listChildren: Array<TreeLookupItem> = [];


  constructor() { }

  ngOnInit(): void {
    if (!this.treeService) return;
    this.rootNodesSubscription = this.treeService.getRoots(this.rootServiceParam).
      subscribe(rootNodesResult => {
        this.listRoots = rootNodesResult;
        // In the case there is only one root node, it will be automatically selected
        if (this.listRoots.length === 1) {
          this.selectedRoot = this.listRoots[0]
          this.valueChange(this.selectedRoot);
        }
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

  public close() {
    this.isDialogOpenEventChange.emit(false);
    this.opened = false;
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

  //Cattura la selezione di un nuovo elemento della combobox, ad esempio se mi muovo con le frecce della tastiera 
  //tra gli elementi della combobox senza premere invio.
  public selectionChange(value: TreeLookupItem): void {
    console.log('Hai selezionato:', value);
  }

  //Cattura il cambio del valore nella combobox, quando clicco o premo invio 
  //tra gli elementi della combobox.
  public valueChange(value: TreeLookupItem): void {
    console.log('Hai cambiato:', value);
    this.listChildren = []
    
    if (value) {
      this.listChildren.push(value);
      // console.log('servizio figli:', this.treeService.getChildren);


      // this.treeService.getChildren("level-1", "herarchical_code", value.code).subscribe(
      //   (childrenRes) => {
      //     childrenRes.forEach(
      //       (elem)=>{
      //         if(value.code === elem.code)
      //           this.listChildren.push(elem);
      //       }  
      //     );
      //   });
    }
  }

  public onTreeValueChange(changedValues: any[]) {
    console.log("cambio selezione lookup, componente padre", changedValues);
    this.checkedValues = changedValues;
  }

}

