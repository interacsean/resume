import PhoneOutlined from "@ant-design/icons/PhoneOutlined";
import MailOutlined from "@ant-design/icons/MailOutlined";
import GithubOutlined from "@ant-design/icons/GithubOutlined";
import { A } from "components/Text";
import { ContactWrap, Icon, ContactDetail } from "./Contact.styles";

interface Props {
  contactDetails: {
    phone: string;
    email: string;
    github: string;
  };
}

export default function Contact({ contactDetails }: Props) {
  return (
    <>
      <ContactWrap>
        <Icon>
          <PhoneOutlined />
        </Icon>
        <ContactDetail as="tel">{contactDetails.phone}</ContactDetail>
      </ContactWrap>
      <ContactWrap>
        <Icon>
          <MailOutlined />
        </Icon>
        <ContactDetail as="email">{contactDetails.email}</ContactDetail>
      </ContactWrap>
      <ContactWrap>
        <Icon>
          <GithubOutlined />
        </Icon>
        <ContactDetail>
          <A href={`https://${contactDetails.github}`} target="_blank">
            {contactDetails.github}
          </A>
        </ContactDetail>
      </ContactWrap>
    </>
  );
}
