

export type checkType = 'single' | 'multiple'

export type TreeNodeType = '_ROOT_' | 'NODE' | 'LEAF'


/**
 * Tipo che rappresenta il modello dell'albero. In particolare un nodo dell'albero.
 * I field relativi a questo modello sono 'letti' dal componente <kendo-treeview>; 
 * 
 * @field desc - rappresenta la descrizione visibile a video dell'elemento. 
 * È anche il valore che verrà selezionato ed inserito nella lista degli elementi
 * selezionati.
 * 
 * @field code - rappresenta l'id del nodo è univoco per definizione; 
 * non viene visualizzato a video. 
 * 
 * @field children - rappresenta la lista dei figli del nodo
 * ognuno dei quali è  a sua volta un TreeModel.
 * Per le foglie questo campo sarà nullo.
 * 
 * @field type - is the type of the node that can be root, node or leaf.
 * 
 * 
 */
export interface TreeLookupItem {
    code: string;
    desc: string;
    type: TreeNodeType;
    hierarchicalCode: string;
    children?: TreeLookupItem[];

}


export interface LookupRootServiceParameters {
    dbId: string;
    parameter: any;
}