import { useTranslation } from "../src/context/TranslationContext";

export default function PrivacyPolicy() {
  const {
    Welcome,
    PersonalInformation,
    PersonalText,
    PersonalSecond,
    LoginInfo,
    DeviceInfo,
    TransactionInfo,
    UsageData,
    Online,
    contact_us,
    privacy_policy_changes,
    personalHeadText,
    quickLinks,
    contacttitle,
    privacytitle,
    childrens_privacytitle,
    childrens_privacycontent,
    information_security_title,
    information_security_content,
    how_long_we_store_title,
    how_long_we_store_content,
    how_we_use,
    how_we_share,
    LastUpdate,
  } = useTranslation();
  return (
    <div className="container">
      <h1 className="p-3"> {quickLinks?.links[5].text}</h1>
      <div className="glassfilter mx-auto p-3 mb-5">
        <center>
          <sub>{LastUpdate}</sub>
        </center>
        <br />
        <br />
        <p>{Welcome}</p>
        <br />
        <h4>1. {PersonalInformation}</h4>
        <hr />
        <p>{PersonalText}</p>
        <br />
        <p>{PersonalSecond}</p>
        <br />
        <ul>
          <li>{LoginInfo}</li>
          <li>{DeviceInfo}</li>
          <li>{TransactionInfo}</li>
          <li>{UsageData}</li>
          <li>{Online}</li>
          <li>{DeviceInfo}</li>
        </ul>
        <br />
        <h4>2.{how_we_use?.header}</h4>
        <hr />
        <p>{personalHeadText}</p>
        <br />
        <ul>
          <li>{how_we_use?.points[0]}</li>
          <li>{how_we_use?.points[1]}</li>
          <li>{how_we_use?.points[2]}</li>
          <li>{how_we_use?.points[3]}</li>
          <li>{how_we_use?.points[4]}</li>
          <li>{how_we_use?.points[5]}</li>
          <li>{how_we_use?.points[6]}</li>
          <li>{how_we_use?.points[7]}</li> <li>{how_we_use?.points[8]}</li>
        </ul>
        <br />
        <h4>3. {how_we_share?.header}</h4>
        <hr />
        <p>{how_we_share?.intro}</p>
        <br />
        <ul>
          <li>{how_we_share?.points[0]}</li>
          <li>{how_we_share?.points[1]}</li>
          <li>{how_we_share?.points[2]}</li>
          <li>{how_we_share?.points[3]}</li>
          <li>{how_we_share?.points[4]}</li>
          <li>{how_we_share?.points[5]}</li>
        </ul>
        <p>
          <i>{how_we_share?.note}</i>
        </p>
        <br />
        <h4>4. {information_security_title}</h4>
        <hr />
        <p>{information_security_content}</p>
        <br />
        <h4>5. {how_long_we_store_title}</h4>
        <hr />
        <p>{how_long_we_store_content}</p>
        <br />
        <h4>6. {childrens_privacytitle}</h4>
        <hr />
        <p>{childrens_privacycontent}</p>
        <br />
        <h4>7. {privacytitle}</h4>
        <p>{privacy_policy_changes}</p>
        <br />
        <h4>8.{contacttitle}</h4>
        <hr />
        <p>{contact_us}</p>
      </div>
    </div>
  );
}
