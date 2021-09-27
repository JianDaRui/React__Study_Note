// 将组件与redux链接在一起

import React, { PureComponent } from "react"
import store from ' ../store'
export default function connect(mapStateToProps, mapDispatchToProps) {
  return function enhanceHOC(wrappedComponent) {
    return class extends PureComponent {
      constructor(props) {
        super(props)
        this.state = {
          storeState: mapStateToProps(store.getState())
        }
      }
      componentDidMount() {
        this.unSunscribe = store.subscribe(() => {
          this.setState({
            storeState: mapStateToProps(store.getState())
          })
        })
      }
      componentWillUnmount() {
        this.unSunscribe()
      }
      render()  {
        return <wrappedComponent 
        {...this.props} 
        {...mapStateToProps(store.getState())}
        {...mapDispatchToProps(store.dispatch)}></wrappedComponent>
      }
    }
  }
}
