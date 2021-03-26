import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { singleTreeRootData, treeData, treeRootData } from "./mock.data";
import { TreeModel } from "./tgk-lookup-tree/model/lookup-tree.model";
import { TgkTreeViewService } from "./tgk-lookup-tree/service/tgk-lookup-tree.services";


/**
 * Mocked service that returns an example list o data compatible
 * with the tgk-lookup-tree component.
 */

@Injectable()
export class MockTreeLookupService implements TgkTreeViewService {

  constructor() { }


  public getChildren(level: string, hierarchicalCode: string, parentNodeCode: string, ...args: any[]): Observable<TreeModel[]> {
    return of(treeData)
  }

  public getRoots(...params: any[]): Observable<TreeModel[]> {
    return of(treeRootData)
  }

}