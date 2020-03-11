import { Alert } from 'antd';
import React, { useState } from 'react';
import { Dispatch, AnyAction } from 'redux';
import { connect } from 'dva';
import { StateType } from '@/models/login';
import { LoginParamsType } from '@/services/login';
import { ConnectState } from '@/models/connect';
import LoginFrom from './components/Login';

import styles from './style.less';

const { UserName, Password, Submit } = LoginFrom;
interface LoginProps {
  dispatch: Dispatch<AnyAction>;
  userLogin: StateType;
  submitting?: boolean;
}

const LoginMessage: React.FC<{
  content: string;
}> = ({ content }) => (
  <Alert
    style={{
      marginBottom: 24,
    }}
    message={content}
    type="error"
    showIcon
  />
);

const Login: React.FC<LoginProps> = props => {
  const { userLogin = {}, submitting } = props;
  const { status, type: loginType } = userLogin;
  const [type, setType] = useState<string>('account');

  const handleSubmit = (values: LoginParamsType) => {
    const { dispatch } = props;
    dispatch({
      type: 'login/login',
      payload: { ...values, type },
    });
  };
  return (
    <div className={styles.main}>
      <LoginFrom activeKey={type} onTabChange={setType} onSubmit={handleSubmit}>
          <div>
          {status === 'error' && loginType === 'account' && !submitting && (
              <LoginMessage content="账户或密码错误" />
          )}
          </div>
          <UserName
            name="userName"
            placeholder="Input username or email"
            autoComplete="off"
            rules={[
              {
                required: true,
                message: 'Please input username',
              },
            ]}
          />
          <Password
            name="password"
            placeholder="Input password"
            autoComplete="off"
            rules={[
              {
                required: true,
                message: 'Please input password',
              },
            ]}
          />
        <Submit loading={submitting}>Login</Submit>
      </LoginFrom>
    </div>
  );
};

export default connect(({ login, loading }: ConnectState) => ({
  userLogin: login,
  submitting: loading.effects['login/login'],
}))(Login);
