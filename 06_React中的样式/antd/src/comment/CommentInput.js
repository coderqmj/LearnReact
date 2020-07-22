import React, { PureComponent } from 'react'
import moment from 'moment'

import { Input, Button } from "antd";

export default class CommentInput extends PureComponent {

  constructor(props) {
    super(props) 
    this.state = {
      content: ""
    }
  }
  render() {
    return (
      <div>
        <Input.TextArea rows={4}
                        value={this.state.content}
                        onChange={e=>this.handleChange(e)}/>
        <Button type={"primary"} onClick={e=>this.addComment()}>添加评论</Button>
      </div>
    )
  }

  handleChange(event) {
    this.setState({
      content: event.target.value
    })
  }
  addComment() {
    const commentInfo = {
      id: moment().valueOf(),
      avatar: "https://zuogerenba.github.io/avatar.png",
      nickName: 'qmj',
      datetime: moment(),
      content: this.state.content
    }
    this.props.submitComment(commentInfo)
    this.setState({
      content: ""
    })
  }

}
