function AnnoReducer(state=[] , action){
    switch(action.type){
      case "LOED_ANNO":
        return (state = action.annos)
      case "ADD_ANNO":
        return state.concat(action.newanno)
     default:  return state
    }
  } 
      
  export default  AnnoReducer