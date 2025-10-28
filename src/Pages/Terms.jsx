import React from "react";

function Terms() {
  return (
    <div className="p-3 bg-black text-white min-h-screen">
      <h1 className="text-2xl font-semibold">
        Terms and Conditions for Rental Service
      </h1>
      <h1 className="text-lg ">Last Updates:[14 Oct 2025]</h1>
      <div>
        <h1 className="text-xl font-semibold mb-1">Welcome to Ghar Bhada!</h1>
        <p>
          These Terms and Conditions explain how you can use our website and
          services. By using this site, you agree to follow the terms below.
          Please read them carefully before listing or renting any property.
        </p>
      </div>
      <div>
        <ol type="1" className="list-decimal list-inside space-y-2 mt-3">
          <li>
            <strong> About Ghar Bhada</strong>
            <p>
              GharBhada is an online platform that connects property owners who
              want to rent out rooms, houses, or apartments with people looking
              for a place to stay. We help users find and share property
              information easily — but we are not directly involved in any
              rental agreement or transaction between owners and renters.
            </p>
          </li>
          <li>
            <strong> Who Can Use GharBhada</strong>
            <ul className="list-disc list-inside space-y-1">
              <li>
                You must be <strong> 18 years or older </strong> to create an
                account or list a property.
              </li>
              <li>
                You must provide <strong>true and complete information</strong>{" "}
                while registering.
              </li>
              <li>
                You are responsible for keeping your account safe and private.
              </li>
            </ul>
          </li>
          <li>
            <strong> Listing Properties</strong>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Owners must post accurate details about their property
                (location, price, facilities, etc.).
              </li>
              <li>Fake, duplicate, or misleading listings are not allowed.</li>
              <li>
                The owner must have the right or permission to rent out the
                property.
              </li>
              <li>
                GharBhada may edit, hide, or remove any listing that breaks
                these rules.
              </li>
            </ul>
          </li>
          <li>
            <strong>Renting and Communication</strong>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Renters should contact the property owner directly to discuss
                rent, visit the property, or confirm details.
              </li>
              <li>
                GharBhada does not handle any money or contracts between users.
              </li>
              <li>
                Always meet in safe public places and verify information before
                making any decisions or payments.
              </li>
            </ul>
          </li>
          <li>
            <strong>What You Shouldn’t Do</strong>
            <ul>Please do not:</ul>
            <ul className="list-disc list-inside space-y-1">
              <li>Post illegal or fake information.</li>
              <li>Upload inappropriate or offensive photos.</li>
              <li>Try to hack or misuse the website.</li>
              <li>Use GharBhada for activities against Nepali law.</li>
            </ul>
          </li>
          <li>
            <strong>Our Role and Responsibility</strong>
            <ul className="list-disc list-inside space-y-1">
              <li>GharBhada only provides a listing and connection service.</li>
              <li>
                We are not responsible for property conditions, payments, or any
                disputes between owners and renters.
              </li>
              <li>
                Users should use their own judgment when contacting others
                through the website.
              </li>
            </ul>
          </li>
          <li>
            <strong>Your Privacy</strong>
            <p>
              We care about your privacy. Please read our Privacy Policy to
              understand how we collect, use, and protect your information.
            </p>
          </li>
          <li>
            <strong>Ending Your Use of GharBhada</strong>
            <p>
              You can stop using GharBhada at any time by deleting your account.
              We may also suspend or delete your account if you break these
              terms.
            </p>
          </li>
          <li>
            <strong>Changes to These Terms</strong>
            <p>
              We may update these terms from time to time. We will notify you of
              any significant changes by posting a notice on our site or sending
              an email. Please review the terms regularly to stay informed.
            </p>
          </li>
          <li>
            <strong>Contact Us</strong>
            <p>
              If you have any questions or concerns about these terms, please
              contact us at:{" "}
              <a href="mailto:support@gharbhada.com">support@gharbhada.com</a>
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Terms;
