/**
 * @file com/features-section/index.jsx
 * Presents the Features section.
 */

// Imports
import React, { useEffect, useRef } from 'react';
import ComputerImage from '../../img/image-computer.png';
import DevicesImage from '../../img/image-devices.png';
import BlacklistIcon from '../../img/icon-blacklist.svg';
import TextIcon from '../../img/icon-text.svg';
import PreviewIcon from '../../img/icon-preview.svg';
import GoogleLogo from '../../img/logo-google.png';
import IBMLogo from '../../img/logo-ibm.png';
import MicrosoftLogo from '../../img/logo-microsoft.png';
import HPELogo from '../../img/logo-hp.png';
import VectorLogo from '../../img/logo-vector-graphics.png';
import isInViewport from '../../lib/is-in-viewport';
import './index.scss';

// Component
const FeaturesSection = () => {
  const snippets = useRef(null);
  const access = useRef(null);
  const workflow = useRef(null);
  const customers = useRef(null);
  const cta = useRef(null);

  useEffect(() => {
    const onWindowScroll = () => {
      if (isInViewport(snippets.current)) {
        snippets.current.classList.add('shown');
      }
      
      if (isInViewport(access.current)) {
        access.current.classList.add('shown');
      } 
      
      if (isInViewport(workflow.current)) {
        workflow.current.classList.add('shown');
      } 
      
      if (isInViewport(customers.current)) {
        customers.current.classList.add('shown');
      } 
      
      if (isInViewport(cta.current)) {
        cta.current.classList.add('shown');
      }
    };

    window.addEventListener('scroll', onWindowScroll);

    return () => window.removeEventListener('scroll', onWindowScroll);
  })

  return (
    <section className="fm-features-section">
      <div ref={snippets} className="fm-subsection fm-snippets-subsection">
        <div className="container">
          <div className="fm-subsection-header">
            <h2>Keep track  of your snippets</h2>
            <p>
              Clipboard instantly stores any item you copy in the cloud,
              meaning you can access your snippets immediately on all your
              devices. Our Mac and iOS apps will help you organize everything.
            </p>
          </div>
          <div className="fm-feature-cards">
            <img src={ComputerImage} alt="Keep Track Of Your Snippets" />
            <div className="fm-feature-card one">
              <h3>Quick Search</h3>
              <p>
                Easily search your snippets by content, category, web address,
                application, and more.
              </p>
            </div>
            <div className="fm-feature-card two">
              <h3>iCloud Sync</h3>
              <p>
                Instantly saves and syncs snippets across all your devices.
              </p>
            </div>
            <div className="fm-feature-card three">
              <h3>Complete History</h3>
              <p>
                Retrieve any snippets from the first moment you started using
                the app.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div ref={access} className="fm-subsection fm-access-subsection">
        <div className="container">
          <div className="fm-subsection-header">
            <h2>Access Clipboard Anywhere</h2>
            <p>
              Whether you're on the go, or at your computer, you can access all
              your Clipboard snippets in a few simple clicks.
            </p>
          </div>
          <img src={DevicesImage} alt="Access Clipboard Anywhere" />
        </div>
      </div>
      <div ref={workflow} className="fm-subsection fm-workflow-subsection">
        <div className="container">
          <div className="fm-subsection-header">
            <h2>Supercharge your workflow</h2>
            <p>
              We've got the tools to boost your productivity.
            </p>
          </div>
          <div className="fm-feature-cards">
            <div className="fm-feature-card one">
              <BlacklistIcon />
              <h3>Create blacklists</h3>
              <p>
                Ensure sensitive information never makes its way to your
                clipboard by excluding certain sources.
              </p>
            </div>
            <div className="fm-feature-card two">
              <TextIcon />
              <h3>Plain text snippets</h3>
              <p>
                Remove unwanted formatting from copied text for a consistent
                look.
              </p>
            </div>
            <div className="fm-feature-card three">
              <PreviewIcon />
              <h3>Sneak preview</h3>
              <p>
                Quick preview of all snippets on your Clipboard for easy access.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div ref={customers} className="fm-subsection fm-customers-subsection">
        <div className="container">
          <img src={GoogleLogo} alt="Google"/>
          <img src={IBMLogo} alt="IBM"/>
          <img src={MicrosoftLogo} alt="Microsoft"/>
          <img src={HPELogo} alt="Hewlett Packard Enterprise"/>
          <img src={VectorLogo} alt="Vector Graphics"/>
        </div>
      </div>
      <div ref={cta} className="fm-subsection fm-cta-subsection">
        <div className="container">
          <div className="fm-subsection-header">
            <h2>Clipboard for iOS and Mac OS</h2>
            <p>
              Available for free on the App Store.
              Download for Mac or iOS, sync with iCloud and you're
              ready to start adding to your clipboard.
            </p>
          </div>
          <div className="fm-call-to-action">
            <button className="fm-download-ios">Download for iOS</button>
            <button className="fm-download-mac">Download for Mac</button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Export
export default FeaturesSection;
