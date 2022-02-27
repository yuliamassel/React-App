// const initialState = {
//     data: [],
//     loading: false,
//     error: false,
//   };
  
//   const UserTransfer = (state = initialState, action = {}) => {
//     switch (action.type) {
//       case "TRANSACTION_REQUEST":
//         return { ...state, loading: true };
//       case "TRANSACTION_SUCCES":
//         return { ...state, loading: false, data: action.payload };
//       case "TRANSACTION_ERROR":
//         return { ...state, loading: false, data: [], error: false };
//       default:
//         return initialState;
//     }
//   };

//   export default UserTransfer