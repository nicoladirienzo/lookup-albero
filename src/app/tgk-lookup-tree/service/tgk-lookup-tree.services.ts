import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TreeModel } from "../model/lookup-tree.model";




/**
 * Abstract service which exposed functions that must be implemented 
 * from the concrete services of the specific tree-lookup.
 * 
 */
export interface TgkTreeViewService {


    /**
     * @returns - A list of the root nodes of the lookup.
     * 
     * @param params - Receives a variable list of parameters that changing based on its 
     * specific implementation.
     */
     getRoots(...params): Observable<TreeModel[]>;


    /**
     * @returns - A list of the children nodes of the lookup related to a passed 
     * root node.
     * 
     * @param level - Level Of the hierarchy from which will be fetched the related childern. (ROOT - CHILDERN)
     * 
     * @param hierarchicalCode - Code of the hierarchy from which will be fetched the children. 
     * 
     * @param parentNodeCode - Receives a parent node from which it extracts a list of related children,
     * invoking hierarchical service.
     * 
     * @param params - Receives a variable list of parameters that changing based on its 
     * specific implementation.
     */
     getChildren(level:string , hierarchicalCode:string, parentNodeCode:string, ...args): Observable<TreeModel[]>;

}