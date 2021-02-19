import styles from "./aboutme.module.scss";

import {
  ReduxIco,
  ReactIco,
  SassIco,
  WebpackIco,
  JavascriptIco,
  BootstrapIco,
  HtmlIco,
  CssIco,
  ExpressIco,
  GulpIco,
  IllustratorIco,
  JqueryIco,
  MongoIco,
  PhotoshopIco,
  NodeIco,
  NpmIco,
} from "./../icons";

import Section from "./../section";

const AboutMe = () => {
  return (
    <Section id="aboutme">
      <div className={styles.aboutme}>
        <div className={styles.text}>
          <h5>Kilka słów o mnie:</h5>
          <p>
            Excepteur sunt non aliquip duis labore ex non aute velit velit. Amet
            tempor dolor ex sint deserunt elit ipsum cupidatat et dolore eu
            aliqua velit. Occaecat cupidatat qui et deserunt duis. Ad commodo
            anim ullamco aute eu cillum. Cillum nisi nulla aute cupidatat.
            Reprehenderit in est officia ex ea enim culpa nulla Lorem officia
            sunt.
          </p>
          <p>
            Mollit non minim irure commodo voluptate aliquip esse in. Incididunt
            nostrud culpa laborum id. Proident veniam non ullamco non sit qui
            officia Lorem nulla quis ullamco. Adipisicing et nostrud elit sit
            enim id elit sit. Est do laborum sint irure aute ullamco. Anim minim
            cupidatat eu ea pariatur aliqua excepteur cupidatat pariatur sunt
            ex.
          </p>
        </div>
        <div className="technologies">
          <h5>Jakich technologii używam?</h5>
          <p>
            <ReduxIco /> <ReactIco /> <SassIco /> <JavascriptIco />
            <BootstrapIco /> <HtmlIco /> <CssIco /> <ExpressIco /> <NodeIco />
            <MongoIco /> <JqueryIco />
          </p>
        </div>
        <div className="additional">
          <h5>Moje projekty wykorzystują:</h5>
          <p>
            <WebpackIco /> <GulpIco />
            <NpmIco />
          </p>
        </div>
        <div className="applications">
          <h5>Dodatkowo grafikę przygotowuję korzystając z:</h5>

          <p>
            <IllustratorIco /> <PhotoshopIco />
          </p>
        </div>
      </div>
    </Section>
  );
};

export default AboutMe;
