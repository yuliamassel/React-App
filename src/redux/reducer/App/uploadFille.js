const initialState = {
    data: [],
    loading: false,
    error: false,
  };
  
  const ChangePhoto = (state = initialState, action = {}) => {
    switch (action.type) {
      case "USER_LOGIN_REQUEST":
        return { ...state, loading: true };
      case "USER_LOGIN_SUCCES":
        return { ...state, loading: false, data: action.payload };
      case "USER_LOGIN_FAIL":
        return { ...state, loading: false, data: [], error: false };
      default:
        return initialState;
    }
  };

  export default ChangePhoto