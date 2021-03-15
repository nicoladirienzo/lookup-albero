

export type checkType = 'single' | 'multiple'

/**
 * Tipo che rappresenta il modello dell'albero. In particolare un nodo dell'albero.
 * I field relativi a questo modello sono 'letti' dal componente <kendo-treeview>; 
 * 
 * @field text - rappresenta la descrizione visibile a video dell'elemento. 
 * È anche il valore che verrà selezionato ed inserito nella lista degli elementi
 * selezionati.
 * 
 * @field items - rappresenta la lista dei figli del nodo
 * ognuno dei quali è  a sua volta un TreeModel.
 * Per le foglie questo campo sarà nullo.
 * 
 */
export interface TreeModel {
    text: string;
    items?: TreeModel[];
}