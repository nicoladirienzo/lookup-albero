import { TreeModel } from "./tgk-lookup-tree/model/lookup-tree.model";


/**
 * Mock data that contains only root nodes.
 */
export const treeRootData: TreeModel[] = [
    {
      text: "Furniture",
      id: "1",
      hasChildren: true
    },
    {
        text: "Decor",
        id: "5",
        hasChildren: true
    },
    {
        text: "Vehicles",
        id: "9",
        hasChildren: true
    }

]

/**
 * Mock data that contains the complete tree structure.
 */
export const treeData: TreeModel[] = [
    {
      text: "Furniture",
      id: "1",
      hasChildren: true,
      children: [
        {
          text: "Tables & Chairs",
          hasChildren: false,
          id: "2"
        },
        {
          text: "Sofas",
          hasChildren: false,
          id: "3"
        },
        {
          text: "Occasional Furniture",
          hasChildren: false,
          id: "4"
        }
      ]
    },
    {
      text: "Decor",
      id: "5",
      hasChildren: true,

      children: [
        {
          text: "Bed Linen",
          hasChildren: false,
          id: "6"
        },
        {
          text: "Curtains & Blinds",
          hasChildren: false,
          id: "7"
        },
        {
          text: "Carpets",
          hasChildren: false,
          id: "8"
        }
      ]
    },

    {
      text: "Vehicles",
      id: "9",
      hasChildren: true,
      children: [
        {
          text: "Car",
          id: "10",
          hasChildren: true,
          children: [
            {
              text: "Ferrari",
              hasChildren: false,

              id: "12"
            },
            {
              text: "Alfa Romeo",
              hasChildren: false,
              id: "13"
            },
            {
              text: "Volvo",
              hasChildren: false,
              id: "14"
            },
            {
              text: "Dacia",
              hasChildren: false,
              id: "15"
            },
          ]
        },
        {
          text: "Van",
          hasChildren: false,
          id: "16"
        },
        {
          text: "Truck",
          id: "11",
          hasChildren: true,

          children: [
            {
              text: "Scania",
              hasChildren: false,
              id: "17"
            },
          ]
        }
      ]
    }
  ];
