import { ProxyState } from "../AppState.js";
import { List } from "../Models/List.js";



class ListsService{
  createList(listItemData) {
    ProxyState.lists = [...ProxyState.lists, new List(listItemData)]
    console.log('yo this onnnnn',ProxyState.lists)
  }

  deleteList() {
    ProxyState.lists = ProxyState.lists.filter(l => l.id !== listItemId)
  }
}

export const listsService = new ListsService