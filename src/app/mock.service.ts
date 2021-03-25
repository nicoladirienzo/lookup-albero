import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { treeData, treeRootData } from "./mock.data";
import { TreeModel } from "./tgk-lookup-tree/model/lookup-tree.model";
import { TgkTreeViewService } from "./tgk-lookup-tree/service/tgk-lookup-tree.services";


/**
 * Mocked service that returns an example list o data compatible
 * with the tgk-lookup-tree component.
 */

@Injectable()
export class MockTreeLookupService implements TgkTreeViewService {

  constructor() { }

  public getChildren1(): Observable<TreeModel[]> {
    throw new Error("Method not implemented.");
  }


    public getRoots(...params: any[]): Observable<TreeModel[]> {
        return of(treeRootData)
    }

    
    public getChildren(parentNode: any, ...params: any[]): Observable<TreeModel[]> {
        return of(treeData)
    }

  }