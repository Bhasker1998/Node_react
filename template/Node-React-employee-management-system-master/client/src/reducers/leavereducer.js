const initialState = {
	data:[] ,
}
const leavereducer = (currentState = initialState, action) => {
	console.log("actionactionaction",action)
    switch (action.type) {
    	case 'LOGIN_USER_INFO':
	  	return {
	  		...currentState, userInfo:action.payload
	  	};
        default:
            return currentState
    }
}
export default leavereducer;