import { Footer } from 'flowbite-react';
import React from 'react';
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import '/src/pages/footer.css';

export default function TrivolioFooter() {
  return (
    <footer>
    <Footer className="footer-root">
      <div className="footer-container">
        <div className="footer-brand">
          <Footer.Brand
            href="https://flowbite.com"
            src="https://flowbite.com/docs/images/logo.svg"
            alt="Flowbite Logo"
            name="Flowbite"
          />
        </div>
        <div className="footer-grid grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
          <div>
            <Footer.Title className="footer-title" title="About" />
            <Footer.LinkGroup className="footer-link-group col">
              <Footer.Link href="#">Flowbite</Footer.Link>
              <Footer.Link href="#">Tailwind CSS</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title className="footer-title" title="Follow us" />
            <Footer.LinkGroup className="footer-link-group col">
              <Footer.Link href="#">Github</Footer.Link>
              <Footer.Link href="#">Discord</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title className="footer-title" title="Legal" />
            <Footer.LinkGroup className="footer-link-group col">
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Terms & Conditions</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
      </div>
      <Footer.Divider className="footer-divider" />
      <div className="footer-bottom w-full flex flex-wrap items-center justify-between">
        <Footer.Copyright
          className="footer-copyright"
          href="#"
          by="Flowbite™"
          year={2022}
        />
        <div className="footer-icons flex space-x-4 mt-4 sm:mt-0">
          <Footer.Icon href="#" icon={BsFacebook} />
          <Footer.Icon href="#" icon={BsInstagram} />
          <Footer.Icon href="#" icon={BsTwitter} />
          <Footer.Icon href="#" icon={BsGithub} />
        </div>
      </div>
    </Footer>
    </footer>
  );
}

