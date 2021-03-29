

export type checkType = 'single' | 'multiple'

export type TreeNodeType = '_ROOT_' | 'NODE' | 'LEAF'


/**
 * 
 * Represent the model of the nodes of the tree; The field are used by the component
 * <kendo-treeview>.
 * 
 * @field code - identify, with the hierarchical code, uniquely a node.                    
 * 
 * @field desc - contain the description of the node. Generally is the value shown on video. 
 *  
 * @field type - is the type of the node that can be root, node or leaf.
 * 
 * @field hierarchicalCode - identify, with the code, uniquely a node.
 * 
 * @field children - contains the list of the children of the node. Each of them is TreeModel; 
 * leaf nodes don't have a children, so this list is empty.
 * 
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

/**
 * Rapresent the parameters to passed to the related service for fetch the nodes of the tree.
 * 
 *  @field dbId - indetify uniquely the database where the service will be called.
 * 
 *  @field parameter - can contains any kind of stuff that represent the parameters of the related service.
 *  
 */
export interface LookupRootServiceParameters {
    dbId: string;
    parameter: any;
}