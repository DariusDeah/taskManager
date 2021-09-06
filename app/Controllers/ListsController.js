import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js";



// Private


  
  function _drawList() {
    let listsTemplate = ''
    console.log('works in the controller')
    ProxyState.lists.forEach(l => listsTemplate += l.ListTemplate)
    document.getElementById('app').innerHTML = listsTemplate
}
// Public 
export class ListsController{
  constructor() {
    ProxyState.on('lists', _drawList)
    _drawList()
  }
  // data isnt brign transfered to the list from one of my functions 
  createList(event) {
    event.preventDefault();
    let form = event.target
    console.log('sisisis')

    let listItemData = {
      title: form.listName.value,
      color: form.listColor.value
    }
    listsService.createList(listItemData)
    form.reset()
  }
}
