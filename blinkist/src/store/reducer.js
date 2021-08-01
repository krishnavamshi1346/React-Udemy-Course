import { ADD_BOOK,MOVE_BOOK } from "./types";


const initalState = {
  finished: [
    
  ],
  reading: [{
    id:0,
    img_src: "https://images.blinkist.com/images/books/60ae77136cee0700084a2c50/1_1/470.jpg",
    book_name: "Leveraged Learning",
    author: "Danny Iny",
    time_left: "15",
    
   
  },
  {
    id:1,
    img_src: "https://images.blinkist.com/images/books/609155fc6cee070007ccb3ad/1_1/470.jpg",
    book_name: " Hyper-Learning ",
    author: "Edward D. Hess",
    time_left: "13",
    
  },
  {
    id:2,
    img_src: "https://images.blinkist.com/images/books/604b27c76cee0700071ddba5/1_1/470.jpg",
    book_name: "Beginners",
    author: " Tom Vanderbilt",
    time_left: "13",
    
    
  },],
  currentView: null,
  lastId:2,
};

const booksReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      state.lastId++;
      return { ...state, reading: [...state.reading, {...action.book,id:state.lastId}] };
    case MOVE_BOOK:
      const temp = state.reading.filter(book => book.id!==action.book.id);
      return {...state,finished:[...state.finished,action.book],reading:[...temp]}
      //if(action.book.status==='reading'){
      // action.book.status='finishedreading'
      // }else{
      //   action.book.status='reading'
      // }
      // //if(action.book.status==='reading'){
      // const temp = state.reading.filter(book => book.status!=='finishedreading');
      // const temp1 = state.finished.filter(book => book.status!=='finishedreading');

      // return {...state,finished:[...state.finished,action.book],reading:[...temp,temp1]}
      // //}
    
    default:
      return state;
  }
};

export default booksReducer;
