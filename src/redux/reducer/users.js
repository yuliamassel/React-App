const initialState = {
  data: [],
  loading: false,
  error: false,
};

const UserLogin = (state = initialState, action = {}) => {
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

const RegisterUser = (state = initialState, action = {}) => {
  switch (action.type) {
    case "REGISTER_USER_REQUEST":
      return { ...state, loading: true };
    case "REGISTER_USER_SUCCES":
      return { ...state, loading: false, data: action.payload };
    case "REGISTER_USER_FAIL":
      return { ...state, loading: false, data: [], error: false };
    default:
      return initialState;
  }
};

const GetUser = (state = initialState, action = {}) => {
    switch (action.type) {
      case "GET_USER_REQUEST":
        return { ...state, loading: true };
      case "GET_USER_SUCCES":
        return { ...state, loading: false, data: action.payload };
      case "GET_USER_ERROR":
        return { ...state, loading: false, data: [], error: false };
      default:
        return initialState;
    }
  };

  const UpdateUser = (state = initialState, action = {}) => {
    switch (action.type) {
      case "UPDATE_USER_REQUEST":
        return { ...state, loading: true };
      case "UPDATE_USER_SUCCES":
        return { ...state, loading: false, data: action.payload };
      case "UPDATE_USER_ERROR":
        return { ...state, loading: false, data: [], error: false };
      default:
        return initialState;
    }
  };

export { UserLogin, RegisterUser, GetUser, UpdateUser };
