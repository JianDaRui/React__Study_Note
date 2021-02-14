//引入Count的UI组件
import CountUI from '../../components/Count'
//引入action
import {
	createIncrementAction,
	createDecrementAction,
	createIncrementAsyncAction
} from '../../redux/count_action'

//引入connect用于连接UI组件与redux
import {connect} from 'react-redux'

/* 
	1.mapStateToProps函数返回的是一个对象；
	2.返回的对象中的key就作为传递给UI组件props的key,value就作为传递给UI组件props的value
	3.mapStateToProps用于传递状态
*/
const mapStateToProps = (state) => ({count:state})

/* 
	1.mapDispatchToProps函数返回的是一个对象；
	2.返回的对象中的key就作为传递给UI组件props的key,value就作为传递给UI组件props的value
	3.mapDispatchToProps用于传递操作状态的方法
*/
const mapDispatchToProps = (dispatch) => ({
	jia:number => dispatch(createIncrementAction(number)),
	jian:number => dispatch(createDecrementAction(number)),
	jiaAsync:(number,time) => dispatch(createIncrementAsyncAction(number,time)),
})

//使用connect()()创建并暴露一个Count的容器组件
// export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
// 简写形式
// react-redux已经在API层面做了优化
// 传的虽是action 但是react-redux 会做 dispatch
export default connect(state => ({count: state}), {
	jia: createIncrementAction,
	jian: createDecrementAction,
	jiaAsync:createIncrementAsyncAction,
})(CountUI)
