import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { treeRootData, vehiclesChilderenData, weaponsChilderenData } from "./mock.data";
import { TreeLookupItem } from "./tgk-lookup-tree/model/lookup-tree.model";
import { TgkTreeViewService } from "./tgk-lookup-tree/service/tgk-lookup-tree.services";


/**
 * Mocked service that returns an example list o data compatible
 * with the tgk-lookup-tree component.
 */

 const BASE_ANGULAR_URL = '/tagetikcpm/api/angular/v1';

@Injectable()
export class MockTreeLookupService implements TgkTreeViewService {

  constructor(private http: HttpClient) { }

  public getChildren(level: string, hierarchicalCode: string, parentNodeCode: string, ...args: any[]): Observable<TreeLookupItem[]> {
    if(parentNodeCode === "R1"){

      return of(vehiclesChilderenData);
    }else if (parentNodeCode === "R2"){
      return of(weaponsChilderenData)
    }else if (parentNodeCode === "R3"){
      return of()
    }
  }

  public getRoots(dbId:string, body:{}): Observable<any> {

    // TODO RIPARTIRE DA CHIAMATA SERVIZIO VERA.... BUTTARE SU TAGETIK
    // const headerDict = {
    //   'Content-Type': 'application/json',
    //   'Accept': 'application/json',
    //   'Access-Control-Allow-Headers': 'Content-Type',
    //   'DB_ID': dbId
    // }

    // const header = new HttpHeaders(headerDict);

    // const requestOptions = {                                                                                                                                                                                 
    //   headers: new HttpHeaders(headerDict)
    
    // };

    // return this.http
    //     .post<TreeLookupItem[]>(BASE_ANGULAR_URL+'/scenarioperiodo/treelookup/roots', body, requestOptions)
 
    return of(treeRootData)
  }


}
