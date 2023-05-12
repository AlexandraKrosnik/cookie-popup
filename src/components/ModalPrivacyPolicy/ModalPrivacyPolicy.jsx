import { Modal } from 'antd';
const ModalPrivacyPolicy = ({ isModalOpen, handleOk, handleCancel }) => {
  return (
    <Modal
      title="Basic Modal"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      bodyStyle={{ height: '500px', overflowY: 'auto' }}
    >
      <h2>PRIVACY NOTICE</h2> <b>Last updated May 10, 2023</b>
      <p>
        This privacy notice for Koalastothemax ("Company," "we," "us," or
        "our"), describes how and why we might collect, store, use, and/or share
        ("process") your information when you use our services ("Services"),
        such as when you: Questions or concerns? Reading this privacy notice
        will help you understand your privacy rights and choices. If you do not
        agree with our policies and practices, please do not use our Services.
        If you still have any questions or concerns, please contact us at
        zipzk211_kod@student.ztu.edu.ua.
      </p>
      <h2>SUMMARY OF KEY POINTS</h2>
      <p>
        <i>
          This summary provides key points from our privacy notice, but you can
          find out more details about any of these topics by clicking the link
          following each key point or by using our table of contents below to
          find the section you are looking for.
        </i>
        <br></br>
        <b>What personal information do we process?</b> When you visit, use, or
        navigate our Services, we may process personal information depending on
        how you interact with Koalastothemax and the Services, the choices you
        make, and the products and features you use. Learn more about personal
        information you disclose to us.<br></br>
        <b> Do we process any sensitive personal information?</b> We do not
        process sensitive personal information.<br></br>
        <b>Do we receive any information from third parties?</b> We may receive
        information from public databases, marketing partners, social media
        platforms, and other outside sources. Learn more about information
        collected from other sources.<br></br>
        <b>How do we process your information?</b> We process your information
        to provide, improve, and administer our Services, communicate with you,
        for security and fraud prevention, and to comply with law. We may also
        process your information for other purposes with your consent. We
        process your information only when we have a valid legal reason to do
        so. Learn more about how we process your information.<br></br>{' '}
        <b>
          In what situations and with which parties do we share personal
          information?
        </b>
        We may share information in specific situations and with specific third
        parties. Learn more about when and with whom we share your personal
        information. <br></br>
        <b>What are your rights?</b> Depending on where you are located
        geographically, the applicable privacy law may mean you have certain
        rights regarding your personal information. Learn more about your
        privacy rights.<br></br>
        <b> How do you exercise your rights? </b>The easiest way to exercise
        your rights is by submitting a data subject access request, or by
        contacting us. We will consider and act upon any request in accordance
        with applicable data protection laws. Want to learn more about what
        Koalastothemax does with any information we collect? Review the privacy
        notice in full.
      </p>
      <h3>1. WHAT INFORMATION DO WE COLLECT? </h3>
      <h4>Personal information you disclose to us </h4>
      <p>
        We collect personal information that you voluntarily provide to us when
        you register on the Services, express an interest in obtaining
        information about us or our products and Services, when you participate
        in activities on the Services, or otherwise when you contact us.
      </p>
      Sensitive Information. We do not process sensitive information.
      <p>
        All personal information that you provide to us must be true, complete,
        and accurate, and you must notify us of any changes to such personal
        information.
      </p>
      <h4>Information automatically collected</h4>
      <p>
        We automatically collect certain information when you visit, use, or
        navigate the Services. This information does not reveal your specific
        identity (like your name or contact information) but may include device
        and usage information, such as your IP address, browser and device
        characteristics, operating system, language preferences, referring URLs,
        device name, country, location, information about how and when you use
        our Services, and other technical information. This information is
        primarily needed to maintain the security and operation of our Services,
        and for our internal analytics and reporting purposes. Like many
        businesses, we also collect information through cookies and similar
        technologies.
      </p>
      <h4>2. HOW DO WE PROCESS YOUR INFORMATION? </h4>
      <p>
        <i>
          We process your information to provide, improve, and administer our
          Services, communicate with you, for security and fraud prevention, and
          to comply with law. We may also process your information for other
          purposes with your consent.
        </i>
        <br></br>
        We process your personal information for a variety of reasons, depending
        on how you interact with our Services, including:
      </p>
      <h4>3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h4>
      <p>
        We may need to share your personal information in the following
        situations:
      </p>
      <ul>
        <li>
          <b>Business Transfers. </b>We may share or transfer your information
          in connection with, or during negotiations of, any merger, sale of
          company assets, financing, or acquisition of all or a portion of our
          business to another company.
        </li>
        <li>
          <b>Affiliates.</b> We may share your information with our affiliates,
          in which case we will require those affiliates to honor this privacy
          notice. Affiliates include our parent company and any subsidiaries,
          joint venture partners, or other companies that we control or that are
          under common control with us.
        </li>
        <li>
          <b>Business Partners.</b> We may share your information with our
          business partners to offer you certain products, services, or
          promotions.
        </li>
      </ul>
      <h4>4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h4>{' '}
      <p>
        We may use cookies and similar tracking technologies (like web beacons
        and pixels) to access or store information. Specific information about
        how we use such technologies and how you can refuse certain cookies is
        set out in our Cookie Notice.{' '}
      </p>
    </Modal>
  );
};

export default ModalPrivacyPolicy;
