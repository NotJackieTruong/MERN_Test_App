import React, { Component } from 'react'

class Items extends Component {

    render() {
        const { items } = this.props
        const itemList = items.map(item => {
            return (
                <div className="item">
                    <div>Name: {item.name}</div>
                    <div>Price: {item.price}</div>
                    <div>Amount: {item.amount}</div>
                </div>
            )
        })
        return (
            <div className="item_list">
                {itemList}
            </div>
        )


    }
}
                
export default Items