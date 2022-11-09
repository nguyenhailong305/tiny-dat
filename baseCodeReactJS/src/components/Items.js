import React, { Component } from 'react';
import Tiny from '../components/Tiny'
class Items extends Component {
    state = {
        id:"",
        content :"",
        title :""
    }

    
    render() {
        let listData = []
        if(this.props.items) {
            listData = this.props.items.map((item , key) => {
                return (
                    <tr key={key}>
                        <th>{item._id}</th>
                        <th>{item.title}</th>
                        <th dangerouslySetInnerHTML={{__html: item.content}}></th>
                        <th>
                            <button onClick={() => this.setState({id : item._id , title : item.title , content : item.content})}>EDIT</button>
                            <button onClick={() => this.props.deleteItems({id : item._id})}>DELETE</button>
                        </th>
                    </tr>
                )
            })
        }
        return (
            <div>
                <table className="table table-striped table-inverse table-responsive">
                    <thead className="thead-inverse">
                        <tr>
                            <th>STT</th>
                            <th>Ten bai viet</th>
                            <th>Noi dung bai viet</th>
                        </tr>
                        </thead>
                        <tbody>
                            {listData}
                        </tbody>
                </table>
                <Tiny 
                id = {this.state.id}
                title= {this.state.title}
                content = {this.state.content}
                addItem = {this.props.addItems}
                updateItem = {this.props.updateItems}
                />     
            </div>
        );
    }
}

export default Items;