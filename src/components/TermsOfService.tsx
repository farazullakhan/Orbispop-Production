import React from 'react';
import { ArrowLeft, FileText, Users, Shield, AlertTriangle, Gavel, Globe, Mail, MapPin, Phone } from 'lucide-react';

interface TermsOfServiceProps {
  onBack: () => void;
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({ onBack }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const tableOfContents = [
    { id: 'agreement', title: 'AGREEMENT TO OUR LEGAL TERMS' },
    { id: 'our-services', title: '1. OUR SERVICES' },
    { id: 'intellectual-property', title: '2. INTELLECTUAL PROPERTY RIGHTS' },
    { id: 'user-representations', title: '3. USER REPRESENTATIONS' },
    { id: 'user-registration', title: '4. USER REGISTRATION' },
    { id: 'purchases-payment', title: '5. PURCHASES AND PAYMENT' },
    { id: 'prohibited-activities', title: '6. PROHIBITED ACTIVITIES' },
    { id: 'user-contributions', title: '7. USER GENERATED CONTRIBUTIONS' },
    { id: 'contribution-licence', title: '8. CONTRIBUTION LICENCE' },
    { id: 'promotional-use', title: '8A. USE OF USER CONTENT FOR PROMOTIONAL PURPOSES' },
    { id: 'review-guidelines', title: '9. GUIDELINES FOR REVIEWS' },
    { id: 'mobile-licence', title: '10. MOBILE APPLICATION LICENCE' },
    { id: 'social-media', title: '11. SOCIAL MEDIA' },
    { id: 'third-party', title: '12. THIRD-PARTY WEBSITES AND CONTENT' },
    { id: 'advertisers', title: '13. ADVERTISERS' },
    { id: 'services-management', title: '14. SERVICES MANAGEMENT' },
    { id: 'privacy-policy', title: '15. PRIVACY POLICY' },
    { id: 'copyright', title: '16. COPYRIGHT INFRINGEMENTS' },
    { id: 'termination', title: '17. TERM AND TERMINATION' },
    { id: 'modifications', title: '18. MODIFICATIONS AND INTERRUPTIONS' },
    { id: 'governing-law', title: '19. GOVERNING LAW' },
    { id: 'dispute-resolution', title: '20. DISPUTE RESOLUTION' },
    { id: 'corrections', title: '21. CORRECTIONS' },
    { id: 'disclaimer', title: '22. DISCLAIMER' },
    { id: 'limitations', title: '23. LIMITATIONS OF LIABILITY' },
    { id: 'indemnification', title: '24. INDEMNIFICATION' },
    { id: 'user-data', title: '25. USER DATA' },
    { id: 'electronic-communications', title: '26. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES' },
    { id: 'sms-messaging', title: '27. SMS TEXT MESSAGING' },
    { id: 'miscellaneous', title: '28. MISCELLANEOUS' },
    { id: 'location-access', title: '29. LOCATION ACCESS' },
    { id: 'storage-access', title: '30. STORAGE ACCESS' },
    { id: 'google-compliance', title: '31. COMPLIANCE WITH GOOGLE TERMS OF SERVICE' },
    { id: 'contact-us', title: '32. CONTACT US' }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="mb-12">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-red-500 hover:text-red-400 transition-colors mb-6"
          >
            <ArrowLeft size={20} />
            Back to Home
          </button>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-red-600/20 rounded-full">
              <FileText size={32} className="text-red-500" />
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold">TERMS AND CONDITIONS</h1>
              <p className="text-gray-400 text-xl mt-2">Last updated April 05, 2025</p>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="bg-black/50 backdrop-blur-lg p-8 rounded-2xl border border-red-500/20 mb-8">
          <h2 className="text-3xl font-bold text-red-500 mb-6 flex items-center gap-3">
            <FileText size={28} />
            TABLE OF CONTENTS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {tableOfContents.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-gray-300 hover:text-red-400 transition-colors py-1 px-2 rounded hover:bg-red-500/10"
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none space-y-8">
          {/* Agreement Section */}
          <div id="agreement" className="bg-black/50 backdrop-blur-lg p-8 rounded-2xl border border-red-500/20">
            <h2 className="text-3xl font-bold text-red-500 mb-6 flex items-center gap-3">
              <Gavel size={28} />
              AGREEMENT TO OUR LEGAL TERMS
            </h2>
            <div className="text-gray-300 space-y-4">
              <p>
                We are <strong>ORBIS POP PRIVATE LIMITED</strong> ('Company', 'we', 'us', or 'our'), a company registered in India at P K Chandra No.256 Mekeri, village Kaggodlu post, Kodagu, Madkeri, Karnataka 571201. We operate the mobile application OrbisPop (the 'App'), as well as any other related products and services that refer or link to these legal terms (the 'Legal Terms') (collectively, the 'Services').
              </p>
              <p>
                You can contact us by email at <a href="mailto:Orbispop@gmail.com" className="text-red-400 hover:text-red-300">Orbispop@gmail.com</a> or by mail to P K Chandra No.256 Mekeri, village Kaggodlu post, Kodagu, Madkeri, Karnataka 571201, India.
              </p>
              <p>
                These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity ('you'), and ORBIS POP PRIVATE LIMITED, concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms.
              </p>
              <div className="bg-red-600/20 p-4 rounded-lg border border-red-500/30">
                <p className="font-semibold text-red-300">
                  IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
                </p>
              </div>
              <p>
                All users who are minors in the jurisdiction in which they reside (generally under the age of 18) must have the permission of, and be directly supervised by, their parent or guardian to use the Services. If you are a minor, you must have your parent or guardian read and agree to these Legal Terms prior to you using the Services.
              </p>
            </div>
          </div>

          {/* Section 1 */}
          <div id="our-services" className="bg-black/50 backdrop-blur-lg p-8 rounded-2xl border border-red-500/20">
            <h2 className="text-3xl font-bold text-red-500 mb-6">1. OUR SERVICES</h2>
            <p className="text-gray-300">
              The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.
            </p>
          </div>

          {/* Section 2 */}
          <div id="intellectual-property" className="bg-black/50 backdrop-blur-lg p-8 rounded-2xl border border-red-500/20">
            <h2 className="text-3xl font-bold text-red-500 mb-6">2. INTELLECTUAL PROPERTY RIGHTS</h2>
            
            <h3 className="text-2xl font-bold text-white mb-4">Our intellectual property</h3>
            <p className="text-gray-300 mb-6">
              We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the 'Content'), as well as the trademarks, service marks, and logos contained therein (the 'Marks').
            </p>

            <h3 className="text-2xl font-bold text-white mb-4">Your use of our Services</h3>
            <p className="text-gray-300 mb-4">
              Subject to your compliance with these Legal Terms, including the 'PROHIBITED ACTIVITIES' section below, we grant you a non-exclusive, non-transferable, revocable license to:
            </p>
            <ul className="text-gray-300 space-y-2 mb-6">
              <li>• Access the Services</li>
              <li>• Download or print a copy of any portion of the Content to which you have properly gained access, solely for your personal, non-commercial use or internal business purpose</li>
            </ul>

            <h3 className="text-2xl font-bold text-white mb-4">Your submissions and contributions</h3>
            <div className="text-gray-300 space-y-4">
              <p>
                <strong>Submissions:</strong> By directly sending us any question, comment, suggestion, idea, feedback, or other information about the Services ('Submissions'), you agree to assign to us all intellectual property rights in such Submission.
              </p>
              <p>
                <strong>Contributions:</strong> The Services may invite you to chat, contribute to, or participate in blogs, message boards, online forums, and other functionality during which you may create, submit, post, display, transmit, publish, distribute, or broadcast content and materials to us or through the Services.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div id="user-representations" className="bg-black/50 backdrop-blur-lg p-8 rounded-2xl border border-red-500/20">
            <h2 className="text-3xl font-bold text-red-500 mb-6 flex items-center gap-3">
              <Users size={28} />
              3. USER REPRESENTATIONS
            </h2>
            <p className="text-gray-300 mb-4">By using the Services, you represent and warrant that:</p>
            <ul className="text-gray-300 space-y-2">
              <li>(1) All registration information you submit will be true, accurate, current, and complete</li>
              <li>(2) You will maintain the accuracy of such information and promptly update such registration information as necessary</li>
              <li>(3) You have the legal capacity and you agree to comply with these Legal Terms</li>
              <li>(4) You are not a minor in the jurisdiction in which you reside, or if a minor, you have received parental permission to use the Services</li>
              <li>(5) You will not access the Services through automated or non-human means, whether through a bot, script or otherwise</li>
              <li>(6) You will not use the Services for any illegal or unauthorized purpose</li>
              <li>(7) Your use of the Services will not violate any applicable law or regulation</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div id="user-registration" className="bg-black/50 backdrop-blur-lg p-8 rounded-2xl border border-red-500/20">
            <h2 className="text-3xl font-bold text-red-500 mb-6">4. USER REGISTRATION</h2>
            <p className="text-gray-300">
              You may be required to register to use the Services. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.
            </p>
          </div>

          {/* Section 5 */}
          <div id="purchases-payment" className="bg-black/50 backdrop-blur-lg p-8 rounded-2xl border border-red-500/20">
            <h2 className="text-3xl font-bold text-red-500 mb-6">5. PURCHASES AND PAYMENT</h2>
            <div className="text-gray-300 space-y-4">
              <p>
                You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Services. You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed.
              </p>
              <p>
                We reserve the right to refuse any order placed through the Services. We may, in our sole discretion, limit or cancel quantities purchased per person, per household, or per order.
              </p>
            </div>
          </div>

          {/* Section 6 */}
          <div id="prohibited-activities" className="bg-black/50 backdrop-blur-lg p-8 rounded-2xl border border-red-500/20">
            <h2 className="text-3xl font-bold text-red-500 mb-6 flex items-center gap-3">
              <AlertTriangle size={28} />
              6. PROHIBITED ACTIVITIES
            </h2>
            <p className="text-gray-300 mb-4">
              You may not access or use the Services for any purpose other than that for which we make the Services available. As a user of the Services, you agree not to:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="text-gray-300 space-y-2">
                <li>• Systematically retrieve data or other content from the Services</li>
                <li>• Trick, defraud, or mislead us and other users</li>
                <li>• Circumvent, disable, or otherwise interfere with security-related features</li>
                <li>• Disparage, tarnish, or otherwise harm us and/or the Services</li>
                <li>• Use any information obtained from the Services to harass, abuse, or harm another person</li>
                <li>• Make improper use of our support services</li>
                <li>• Use the Services in a manner inconsistent with any applicable laws</li>
                <li>• Engage in unauthorized framing of or linking to the Services</li>
              </ul>
              <ul className="text-gray-300 space-y-2">
                <li>• Upload or transmit viruses, Trojan horses, or other material</li>
                <li>• Engage in any automated use of the system</li>
                <li>• Delete the copyright or other proprietary rights notice from any Content</li>
                <li>• Attempt to impersonate another user or person</li>
                <li>• Interfere with, disrupt, or create an undue burden on the Services</li>
                <li>• Harass, annoy, intimidate, or threaten any of our employees</li>
                <li>• Copy or adapt the Services' software</li>
                <li>• Use the Services for any revenue-generating endeavor</li>
              </ul>
            </div>
          </div>

          {/* Section 7 */}
          <div id="user-contributions" className="bg-black/50 backdrop-blur-lg p-8 rounded-2xl border border-red-500/20">
            <h2 className="text-3xl font-bold text-red-500 mb-6">7. USER GENERATED CONTRIBUTIONS</h2>
            <p className="text-gray-300 mb-4">
              The Services may invite you to chat, contribute to, or participate in blogs, message boards, online forums, and other functionality, and may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Services.
            </p>
            <p className="text-gray-300">
              When you create or make available any Contributions, you thereby represent and warrant that your Contributions comply with our standards and will not infringe any third-party rights.
            </p>
          </div>

          {/* Section 8 */}
          <div id="contribution-licence" className="bg-black/50 backdrop-blur-lg p-8 rounded-2xl border border-red-500/20">
            <h2 className="text-3xl font-bold text-red-500 mb-6">8. CONTRIBUTION LICENCE</h2>
            <p className="text-gray-300">
              By posting your Contributions to any part of the Services, you automatically grant us an unrestricted, unlimited, irrevocable, perpetual, non-exclusive, transferable, royalty-free, fully-paid, worldwide right and license to host, use, copy, reproduce, disclose, sell, resell, publish, broadcast, retitle, archive, store, cache, publicly perform, publicly display, reformat, translate, transmit, excerpt, and distribute such Contributions for any purpose, commercial, advertising, or otherwise.
            </p>
          </div>

          {/* Section 8A */}
          <div id="promotional-use" className="bg-black/50 backdrop-blur-lg p-8 rounded-2xl border border-red-500/20">
            <h2 className="text-3xl font-bold text-red-500 mb-6">8A. USE OF USER CONTENT FOR PROMOTIONAL PURPOSES</h2>
            <p className="text-gray-300">
              By using the Services and submitting content (including but not limited to posts, images, videos, comments, reviews, or other materials), you grant us the right to use, reproduce, modify, publish, display, and distribute such content, in whole or in part, for marketing, advertising, and promotional purposes related to the App or Company, in any media format and through any media channels, now known or developed in the future.
            </p>
          </div>

          {/* Section 29 */}
          <div id="location-access" className="bg-black/50 backdrop-blur-lg p-8 rounded-2xl border border-red-500/20">
            <h2 className="text-3xl font-bold text-red-500 mb-6 flex items-center gap-3">
              <MapPin size={28} />
              29. LOCATION ACCESS
            </h2>
            <p className="text-gray-300">
              This application requires access to your device's location services. By using this application, you expressly consent to the collection, storage, and use of your location data. This data will be used to provide and enhance the application's features, including but not limited to: location-based content delivery, user discovery, personalized recommendations, advertising, analytics, and service improvements.
            </p>
          </div>

          {/* Section 30 */}
          <div id="storage-access" className="bg-black/50 backdrop-blur-lg p-8 rounded-2xl border border-red-500/20">
            <h2 className="text-3xl font-bold text-red-500 mb-6">30. STORAGE ACCESS</h2>
            <p className="text-gray-300">
              This application requires access to your device's storage access. By using this application you expressly consent to the storage of your devices.
            </p>
          </div>

          {/* Section 31 */}
          <div id="google-compliance" className="bg-black/50 backdrop-blur-lg p-8 rounded-2xl border border-red-500/20">
            <h2 className="text-3xl font-bold text-red-500 mb-6">31. COMPLIANCE WITH GOOGLE TERMS OF SERVICE</h2>
            <p className="text-gray-300">
              Google Maps Platform API Terms of Service requires websites and applications using any Google Maps Platform APIs to have a Terms of Use. By using our application, users are bound by Google's Terms of Service.
            </p>
          </div>

          {/* Contact Section */}
          <div id="contact-us" className="bg-red-600/20 backdrop-blur-lg p-8 rounded-2xl border border-red-500/40">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Mail size={28} />
              32. CONTACT US
            </h2>
            <p className="text-gray-300 mb-6">
              In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at:
            </p>
            
            <div className="bg-black/50 p-6 rounded-lg space-y-4">
              <div className="text-gray-300">
                <p className="font-semibold text-white text-lg mb-2">ORBIS POP PRIVATE LIMITED</p>
                <div className="flex items-start gap-3 mb-3">
                  <MapPin size={20} className="text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <p>P K Chandra No.256 Mekeri, village Kaggodlu post, Kodagu</p>
                    <p>Madkeri, Karnataka 571201</p>
                    <p>India</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-red-500" />
                  <a 
                    href="mailto:contact@orbispop.com" 
                    className="text-red-400 hover:text-red-300 transition-colors"
                  >
                    contact@orbispop.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;