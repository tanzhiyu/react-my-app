import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';

function hasErrors (fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class HorizontalLoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  componentDidMount() {
    this.props.form.validateFields();
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received value of form', values);
      }
    })
  }
  render() { 
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
    const usernameError = isFieldTouched('username') && getFieldError('username');
    const passwordError = isFieldTouched('password') && getFieldError('password');
    return ( 
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <Form.Item label="username" validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '用户名不能为空'}],
          })(
            <Input
              prefix={<Icon type="user" style={{color: 'rgba(0, 0, 0, .25)'}} /> }
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item label="password" validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
          {getFieldDecorator('password', {
            rules: [{required:true, message: '密码不能为空'}]
          })(
            <Input 
              prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}} />}
              type="password"
              placeholder="password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>Login</Button>
        </Form.Item>
      </Form>
      
     );
  }
}
 
export default Form.create({name: 'login_form'})(HorizontalLoginForm);