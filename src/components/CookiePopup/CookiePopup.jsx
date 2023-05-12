import { Form, Switch, Button } from 'antd';

import {
  DrawerStyled,
  CookiesText,
  FormStyled,
  FooterFormStyled,
  BodyFormStyled,
} from './CookiePopup.styled';
import ModalPrivacyPolicy from 'components/ModalPrivacyPolicy/ModalPrivacyPolicy';
import useCookiePopup from './useCookiePopup';
export const CookiePopup = () => {
  const {
    onClose,
    onFinish,
    open,
    showModal,
    isModalOpen,
    handleOk,
    handleCancel,
  } = useCookiePopup();
  return (
    <>
      <DrawerStyled
        title="About cookies on this site"
        placement="bottom"
        height={250}
        onClose={onClose}
        open={open}
        closable={false}
      >
        <CookiesText>
          <p>
            Cookies help us deliver the best experience on our website. By using
            our website, you agree to the use of cookies.
            <span onClick={showModal}> Privacy Policy</span>
          </p>
          <FormStyled name="cookies" onFinish={onFinish}>
            <BodyFormStyled>
              <Form.Item
                name="switchEssential"
                label="Essential cookies"
                valuePropName="checked"
              >
                <Switch />
              </Form.Item>
              <Form.Item
                name="switchAnalytics"
                label="Analytics cookies"
                valuePropName="checked"
              >
                <Switch />
              </Form.Item>
            </BodyFormStyled>

            <FooterFormStyled>
              <Button onClick={onClose}>Decline</Button>
              <Button type="primary" htmlType="submit">
                Allow cookies
              </Button>
            </FooterFormStyled>
          </FormStyled>
        </CookiesText>
      </DrawerStyled>
      <ModalPrivacyPolicy
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </>
  );
};
