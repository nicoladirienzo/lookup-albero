

export type checkType = 'single' | 'multiple'

/**
 * Tipo che rappresenta il modello dell'albero. In particolare un nodo dell'albero.
 * I field relativi a questo modello sono 'letti' dal componente <kendo-treeview>; 
 * 
 * @field text - rappresenta la descrizione visibile a video dell'elemento. 
 * È anche il valore che verrà selezionato ed inserito nella lista degli elementi
 * selezionati.
 * 
 * @field id - rappresenta l'id del nodo è univoco per definizione; 
 * non viene visualizzato a video. 
 * 
 * @field children - rappresenta la lista dei figli del nodo
 * ognuno dei quali è  a sua volta un TreeModel.
 * Per le foglie questo campo sarà nullo.
 * 
 * @field hasChildren - indica se il nodo in questione ha figli o meno.
 * A livello generale non è sufficente verificare la lunghezza della lista 
 * children per ottenere questa informazione; infatti nei casi di caricamento
 * lazy dei nodi ci potrebbe essere un nodo con i figli non ancora caricati, ma che
 * effettivamente ne ha.
 * 
 */
export interface TreeModel {
    text: string;
    id: string;
    children?: TreeModel[];
    hasChildren: boolean;
}