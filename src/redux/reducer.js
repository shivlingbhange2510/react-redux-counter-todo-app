import {
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
  CHANGE_STATUS,
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  RESET_COUNTER,
} from "./action";
const initialVal = {
  counter: 0,
  todo: [{ title: "first", id:101, status:true }],
};
const reducer = (state = initialVal, action) => {
  const { type, payload } = action;
  console.log('pppayload ', payload)
  switch (type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter + payload,
      };
    case DECREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter - payload,
      };

    case RESET_COUNTER:
      return {
        ...state,
        counter: 0,
      };

      case ADD_TODO:
          return{
              ...state, todo:[payload, ...state.todo ]
          }
        case DELETE_TODO:
            return{
                ...state, todo:payload
            }
        case CHANGE_STATUS :
            return{
                ...state , todo:payload
            }
        case EDIT_TODO:
            return{
                ...state, todo:payload
            }
    default:
      return state;
  }
};

export { reducer };
