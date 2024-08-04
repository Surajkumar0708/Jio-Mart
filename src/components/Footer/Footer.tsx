import { Flex, Layout, Typography } from 'antd';
import { appLinks, contactInfo, footerContent, footerSections } from '../../common/footer';
import styles from './Footer.module.scss';
import { Link as RouterLink } from 'react-router-dom';

const { Footer: AntFooter } = Layout;
const { Link, Text } = Typography;

const Footer = () => {
  return (
    <AntFooter className={styles.footer}>
      <Flex>
        {footerSections.map((sectionList) => (
          <div className={styles.section}>
            <h3 className={styles.heading}>{sectionList.title}</h3>
            {sectionList.links.map((link) => (
              // {Currently we are redirecting to the category page for all the links, later on this will be changed. Bhau and Abhishek is working on this page}
              <RouterLink className={styles.link} to={`/groceries`}>
                {link}
              </RouterLink>
            ))}
          </div>
        ))}

        <div className={styles.contact}>
          <h1 className={styles.headings}>{contactInfo.title}</h1>
          {contactInfo.details.map((contactList) => (
            <Text >
              {contactList.type}: {contactList.value ? (
                <Link className={styles.contactLink}>{contactList.value}</Link>
              ) : (
                <span>{contactList.value}</span>
              )}
              <br />
            </Text>
          ))}
          <h1 className={styles.headings}>Download the app</h1>
          <Flex>
            <Link>
              <img className={styles.appIcon} src={appLinks?.googlePlay} alt="Google Play" />
            </Link>
            <Link>
              <img className={styles.appIcon} src={appLinks?.appStore} alt="App Store" />
            </Link>
          </Flex>
        </div>
      </Flex>
      <div>
        <div className={styles.footerBottom}>
          <div className={styles.footerText}>
            <img className={styles.footerlogo} src={footerContent.logoSrc} alt="Logo" />
            {footerContent.footerText}
          </div>
          <div className={styles.footerBrowsers}>
            {footerContent.footerBrowsers}
          </div>
        </div>
      </div>
    </AntFooter>

  );
};

export default Footer;
