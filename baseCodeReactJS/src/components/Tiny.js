import React, { Component } from 'react';
import {Editor} from '@tinymce/tinymce-react'
class Tiny extends Component {
    state = {
        id : "",
        title : "",
        content :"",
        titleTiny :""
    }
    componentDidUpdate() {
        if(this.props.id !== this.state.id) {
            this.setState({
                id : this.props.id,
                titleTiny : this.props.title,
                content : this.props.content
            })
        }
    }

    isChange = (e,id) => {
        let copyState = {...this.state}
        copyState[id] = e.target.value
        this.setState({
            ...copyState
        })
    }
    render() {
        return (
            <div>
                 <input onChange={(e) => this.isChange(e , 'title')} />
                 <button onClick={() => this.props.addItem({title : this.state.title , content : this.state.content})}>ADD</button>     
                 <input onChange={(e) => this.isChange(e , 'titleTiny')}  value={this.state.titleTiny}/>
                 <button onClick={() => this.props.updateItem({id : this.state.id , title : this.state.title , content : this.state.content})}>UPDATE</button>     
                 <Editor
            onEditorChange={(value) => this.setState({content : value})}
            value = {this.state.content}
            apiKey='hol4jp4apv6zee3fsm0k0bj2r6b2q1u4xykila3v9pmzx91b'
         init={{
           height: 500,
           menubar: false,
           plugins: [
             'advlist autolink lists link image charmap print preview anchor',
             'searchreplace visualblocks code fullscreen',
             'insertdatetime media table paste code help wordcount image'
           ],
           toolbar: 'undo redo | formatselect | ' +
           'bold italic backcolor | alignleft aligncenter ' +
           'alignright alignjustify | bullist numlist outdent indent | ' +
           'removeformat | help image',
           content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
           images_upload_handler : async function (BlobInfo , success , failure) {
                return new Promise(function (resolve, reject) {
                    let formData = new FormData();
                    formData.append('img' , BlobInfo.blob())
                    const url = `http://localhost:3001/item` ;
                    fetch(url , {
                        method : 'POST',
                        body : formData
                    })
                    .then((response) => response.json())
                    .then((res) => {
                        resolve(res)
                        success(res.arrPicture[0])
                    })
                    .catch((err) => {
                        reject(err)
                        failure('loi anh')
                    })
                })
           }
         }}
       />
            </div>
        );
    }
}

export default Tiny;