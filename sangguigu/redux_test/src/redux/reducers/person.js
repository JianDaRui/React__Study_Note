
import { ADD_PERSON } from '../contant/constant'

const initState = [{id: '01', name: 'top', age: 19}] //初始化状态
export default function personReducer(preState=initState,action){
	
	const {type,data} = action
	switch (type) {
		case ADD_PERSON: 
			return [data, ...preState]
		default:
			return preState
	}
}