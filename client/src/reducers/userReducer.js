const initialState = {
	userInfo:{} ,
	userList :[] 
}
const userReducer = (currentState = initialState, action) => {
	console.log("actionactionaction",action)
    switch (action.type) {
    	case 'LOGIN_USER_INFO':
	  	return {
	  		...currentState, userInfo:action.payload
		  };
		  case 'DATA':
	  	return {
	  		...currentState, userList:action.payload
	  	};
        default:
            return currentState
    }
}
export default userReducer;