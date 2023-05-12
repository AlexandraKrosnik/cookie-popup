import styled from 'styled-components';
import { Drawer, Form } from 'antd';

export const DrawerStyled = styled(Drawer)`
  .ant-drawer-body {
    padding-top: 0;
  }
  .ant-drawer-header {
    padding-top: 8px;
    padding-bottom: 8px;
  }
  .ant-drawer-title {
    text-align: center;
    font-size: 20px;
  }
`;

export const CookiesText = styled.div`
  width: 500px;
  font-family: Sora, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  word-break: normal;
  font-weight: 500;
  margin: 0 auto;

  & p {
    text-align: center;
  }
  & p span {
    color: #1677ff;
  }
`;

export const FormStyled = styled(Form)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 15px;

  .ant-form-item {
    flex-direction: row-reverse;
    margin-bottom: 15px;
    & label::after {
      content: none;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
  .ant-form-item-label {
    margin-right: 20px;
    font-size: 16px;
  }
`;

export const BodyFormStyled = styled.div``;

export const FooterFormStyled = styled.div`
  & > .ant-btn-default {
    margin-right: 10px;
  }
`;
