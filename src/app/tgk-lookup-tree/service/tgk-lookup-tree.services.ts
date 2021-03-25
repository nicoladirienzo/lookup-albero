import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TreeModel } from "../model/lookup-tree.model";




/**
 * Abstract service which exposed functions that must be implemented 
 * from the concrete services of the specific tree-lookup.
 * 
 */
@Injectable()
export abstract class TgkTreeViewService {

    constructor() { }

    /**
     * @returns - A list of the root nodes of the lookup.
     * 
     * @param params - Receives a variable list of parameters that changing based on its 
     * specific implementation.
     */
    public abstract getRoots(...params): Observable<TreeModel[]>;


    /**
     * @returns - A list of the children nodes of the lookup related to a passed 
     * root node.
     * 
     * @param parentNodeCode - Receives a parent node from which it extracts a list of related children,
     * invoking hierarchical service.
     * 
     * @param params - Receives a variable list of parameters that changing based on its 
     * specific implementation.
     */
    public abstract getChildren(level:string ,hierarchicalCode:string, parentNodeCode:string, ...params): Observable<TreeModel[]>;
}