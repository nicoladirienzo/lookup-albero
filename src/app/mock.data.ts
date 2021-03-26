import { TreeLookupItem } from "./tgk-lookup-tree/model/lookup-tree.model";


/**
 * Mock data that contains only root nodes.
 */
export const treeRootData: TreeLookupItem[] = [
  {
    code:'R1',
    desc:'Vehicles',
    hierarchicalCode:'R',
    type:"_ROOT_"
  },
  {
    code:'R2',
    desc:'Weapons',
    hierarchicalCode:'R',
    type:"_ROOT_"
  },
  {
    code:'R3',
    desc:'Clothes',
    hierarchicalCode:'R',
    type:"_ROOT_"
  }

]

/**
 * Mock data that contains a single root node.
 */
 export const singleTreeRootData: TreeLookupItem[] = [
  {
    code:'R4',
    desc:'Foods',
    hierarchicalCode:'R',
    type:"_ROOT_"
  }

]



export const weaponsChilderenData: TreeLookupItem[] = [

  {
    code:'C1',
    desc:'Assault Rifle',
    hierarchicalCode:'C',
    type:"NODE"
  },
  {
    code:'C2',
    desc:'Shotgun',
    hierarchicalCode:'C',
    type:"NODE"
  },
  {
    code:'C3',
    desc:'Axe',
    hierarchicalCode:'C',
    type:"NODE"
  },

]


export const vehiclesChilderenData: TreeLookupItem[] = [

  {
    code:'C4',
    desc:'Car',
    hierarchicalCode:'C',
    type:"NODE"
  },
  {
    code:'C5',
    desc:'Boat',
    hierarchicalCode:'C',
    type:"NODE"
  },
  {
    code:'C7',
    desc:'Plane',
    hierarchicalCode:'C',
    type:"NODE"
  },
  {
    code:'C6',
    desc:'Scania',
    hierarchicalCode:'C',
    type:"LEAF"
  },

]
