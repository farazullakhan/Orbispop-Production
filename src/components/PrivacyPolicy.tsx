import React from 'react';
import { ArrowLeft, Shield, Eye, Database, Users, Lock, Globe, FileText, MapPin, AlertTriangle, Mail } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
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
    { id: 'summary', title: 'SUMMARY OF KEY POINTS' },
    { id: 'what-info', title: '1. WHAT INFORMATION DO WE COLLECT?' },
    { id: 'how-process', title: '2. HOW DO WE PROCESS YOUR INFORMATION?' },
    { id: 'when-share', title: '3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?' },
    { id: 'third-party-stance', title: '4. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?' },
    { id: 'cookies-tracking', title: '5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?' },
    { id: 'how-long-keep', title: '6. HOW LONG DO WE KEEP YOUR INFORMATION?' },
    { id: 'how-keep-safe', title: '7. HOW DO WE KEEP YOUR INFORMATION SAFE?' },
    { id: 'privacy-rights', title: '8. WHAT ARE YOUR PRIVACY RIGHTS?' },
    { id: 'do-not-track', title: '9. CONTROLS FOR DO-NOT-TRACK FEATURES' },
    { id: 'updates', title: '10. DO WE MAKE UPDATES TO THIS NOTICE?' },
    { id: 'contact-notice', title: '11. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?' },
    { id: 'review-update-delete', title: '12. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?' },
    { id: 'dpdp-compliance', title: '13. COMPLIANCE WITH THE DIGITAL PERSONAL DATA PROTECTION ACT, 2023 (INDIA)' }
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
              <Shield size={32} className="text-red-500" />
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold">PRIVACY POLICY</h1>
              <p className="text-gray-400 text-xl mt-2">Last updated April 05, 2025</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none space-y-8">
          {/* Introduction */}
          <div className="bg-black/50 backdrop-blur-lg p-8 rounded-2xl border border-red-500/20">
            <p className="text-gray-300 text-lg leading-relaxed">
              This Privacy Notice for <strong>ORBIS POP PRIVATE LIMITED</strong> ('we', 'us', or 'our'), describes how and why we might access, collect, store, use, and/or share ('process') your personal information when you use our services ('Services'), including when you: Download and use our mobile application (OrbisPop), or any other application of ours that links to this Privacy Notice Engage with us in other related ways, including any sales, marketing, or events Questions or concerns? Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <a href="mailto:orbispop@gmail.com" className="text-red-400 hover:text-red-300">orbispop@gmail.com</a>.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="bg-black/50 backdrop-blur-lg p-8 rounded-2xl border border-red-500/20">
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

          {/* Summary of Key Points */}
          <div id="summary" className="bg-black/50 backdrop-blur-lg p-8 rounded-2xl border border-red-500/20">
            <h2 className="text-3xl font-bold text-red-500 mb-6 flex items-center gap-3">
              <Eye size={28} />
              SUMMARY OF KEY POINTS
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              This summary provides key points from our Privacy Notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for.
            </p>
            
            <div className="space-y-4 text-gray-300">
              <p><strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use. Learn more about personal information you disclose to us.</p>
              
              <p><strong>Do we process any sensitive personal information?</strong> Some of the information may be considered 'special' or 'sensitive' in certain jurisdictions, for example your racial or ethnic origins, sexual orientation, and religious beliefs. We may process sensitive personal information when necessary with your consent or as otherwise permitted by applicable law. Learn more about sensitive information we process.</p>
              
              <p><strong>Do we collect any information from third parties?</strong> We may collect information from public databases, marketing partners, social media platforms, and other outside sources. Learn more about information collected from other sources.</p>
              
              <p><strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Learn more about how we process your information.</p>
              
              <p><strong>In what situations and with which types of parties do we share personal information?</strong> We may share information in specific situations and with specific categories of third parties. Learn more about when and with whom we share your personal information.</p>
              
              <p><strong>How do we keep your information safe?</strong> We have adequate organisational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorised third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Learn more about how we keep your information safe.</p>
              
              <p><strong>What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Learn more about your privacy rights.</p>
              
              <p><strong>How do you exercise your rights?</strong> The easiest way to exercise your rights is by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.</p>
              
              <p><strong>Want to learn more about what we do with any information we collect?</strong> Review the Privacy Notice in full.</p>
            </div>
          </div>

          {/* Section 1 */}
          <div id="what-info" className="bg-black/50 backdrop-blur-lg p-8 rounded-2xl border border-red-500/20">
            <h2 className="text-3xl font-bold text-red-500 mb-6 flex items-center gap-3">
              <Database size={28} />
              1. WHAT INFORMATION DO WE COLLECT?
            </h2>
            
            <h3 className="text-2xl font-bold text-white mb-4">Personal information you disclose to us</h3>
            <p className="text-gray-300 mb-4"><strong>In Short:</strong> We collect personal information that you provide to us.</p>
            <p className="text-gray-300 mb-6">
              We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
            </p>
            
            <p className="text-gray-300 mb-4"><strong>Personal Information Provided by You.</strong> The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <ul className="text-gray-300 space-y-1">
                <li>• names</li>
                <li>• phone numbers</li>
                <li>• email addresses</li>
                <li>• mailing addresses</li>
                <li>• job titles</li>
                <li>• usernames</li>
              </ul>
              <ul className="text-gray-300 space-y-1">
                <li>• passwords</li>
                <li>• contact preferences</li>
                <li>• contact or authentication data</li>
                <li>• billing addresses</li>
                <li>• debit/credit card numbers</li>
              </ul>
            </div>

            <h4 className="text-xl font-semibold text-white mb-3">Sensitive Information</h4>
            <p className="text-gray-300 mb-4">
              When necessary, with your consent or as otherwise permitted by applicable law, we process the following categories of sensitive information:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <ul className="text-gray-300 space-y-1">
                <li>• financial data</li>
                <li>• health data</li>
                <li>• genetic data</li>
                <li>• biometric data</li>
                <li>• data about a person's sex life or sexual orientation</li>
                <li>• information revealing race or ethnic origin</li>
              </ul>
              <ul className="text-gray-300 space-y-1">
                <li>• information revealing political opinions</li>
                <li>• information revealing religious or philosophical beliefs</li>
                <li>• information revealing trade union membership</li>
                <li>• credit worthiness data</li>
                <li>• student data</li>
                <li>• social security numbers or other government identifiers</li>
              </ul>
            </div>

            <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
              <MapPin size={20} />
              Application Data
            </h4>
            <p className="text-gray-300 mb-4">
              If you use our application(s), we also may collect the following information if you choose to provide us with access or permission:
            </p>
            
            <div className="space-y-4 text-gray-300">
              <div>
                <p><strong>Geolocation Information.</strong> We may request access or permission to track location-based information from your mobile device, either continuously or while you are using our mobile application(s), to provide certain location-based services. If you wish to change our access or permissions, you may do so in your device's settings.</p>
              </div>
              
              <div>
                <p><strong>Mobile Device Access.</strong> We may request access or permission to certain features from your mobile device, including your mobile device's calendar, bluetooth, camera, microphone, contacts, reminders, sensors, sms messages, social media accounts, storage, and other features. If you wish to change our access or permissions, you may do so in your device's settings.</p>
              </div>
              
              <div>
                <p><strong>Mobile Device Data.</strong> We automatically collect device information (such as your mobile device ID, model, and manufacturer), operating system, version information and system configuration information, device and application identification numbers, browser type and version, hardware model Internet service provider and/or mobile carrier, and Internet Protocol (IP) address (or proxy server). If you are using our application(s), we may also collect information about the phone network associated with your mobile device, your mobile device's operating system or platform, the type of mobile device you use, your mobile device\'s unique device ID, and information about the features of our application(s) you accessed.</p>
              </div>
              
              <div>
                <p><strong>Push Notifications.</strong> We may request to send you push notifications regarding your account or certain features of the application(s). If you wish to opt out from receiving these types of communications, you may turn them off in your device's settings.</p>
              </div>
            </div>
            
            <p className="text-gray-300 mt-6">
              This information is primarily needed to maintain the security and operation of our application(s), for troubleshooting, and for our internal analytics and reporting purposes. All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.
            </p>
          </div>

          {/* Section 2 */}
          <div id="how-process" className="bg-black/50 backdrop-blur-lg p-8 rounded-2xl border border-red-500/20">
            <h2 className="text-3xl font-bold text-red-500 mb-6 flex items-center gap-3">
              <Users size={28} />
              2. HOW DO WE PROCESS YOUR INFORMATION?
            </h2>
            <p className="text-gray-300 mb-6">
              <strong>In Short:</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.
            </p>
            <p className="text-gray-300 mb-6">
              We process your personal information for a variety of reasons, depending on how you interact with our Services, including:
            </p>
            
            <div className="space-y-3 text-gray-300">
              <p>• <strong>To facilitate account creation and authentication and otherwise manage user accounts.</strong> We may process your information so you can create and log in to your account, as well as keep your account in working order.</p>
              <p>• <strong>To deliver and facilitate delivery of services to the user.</strong> We may process your information to provide you with the requested service.</p>
              <p>• <strong>To respond to user inquiries/offer support to users.</strong> We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service.</p>
              <p>• <strong>To send administrative information to you.</strong> We may process your information to send you details about our products and services, changes to our terms and policies, and other similar information.</p>
              <p>• <strong>To enable user-to-user communications.</strong> We may process your information if you choose to use any of our offerings that allow for communication with another user.</p>
              <p>• <strong>To send you marketing and promotional communications.</strong> We may process the personal information you send to us for our marketing purposes, if this is in accordance with your marketing preferences.</p>
              <p>• <strong>To protect our Services.</strong> We may process your information as part of our efforts to keep our Services safe and secure, including fraud monitoring and prevention.</p>
              <p>• <strong>To comply with our legal obligations.</strong> We may process your information to comply with our legal obligations, respond to legal requests, and exercise, establish, or defend our legal rights.</p>
            </div>
          </div>

          {/* Section 8 */}
          <div id="privacy-rights" className="bg-black/50 backdrop-blur-lg p-8 rounded-2xl border border-red-500/20">
            <h2 className="text-3xl font-bold text-red-500 mb-6">8. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
            <p className="text-gray-300 mb-4">
              <strong>In Short:</strong> You may review, change, or terminate your account at any time, depending on your country, province, or state of residence.
            </p>
            
            <div className="space-y-4 text-gray-300">
              <div>
                <p><strong>Withdrawing your consent:</strong> If we are relying on your consent to process your personal information, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us using the contact details provided below.</p>
              </div>
              
              <div>
                <p><strong>Opting out of marketing and promotional communications:</strong> You can unsubscribe from our marketing and promotional communications at any time by replying 'STOP' or 'UNSUBSCRIBE' to the SMS messages that we send, or by contacting us using the details provided below.</p>
              </div>
            </div>
            
            <p className="text-gray-300 mt-6">
              If you have questions or comments about your privacy rights, you may email us at <a href="mailto:orbispop@gmail.com" className="text-red-400 hover:text-red-300">orbispop@gmail.com</a>.
            </p>
          </div>

          {/* Section 11 */}
          <div id="contact-notice" className="bg-black/50 backdrop-blur-lg p-8 rounded-2xl border border-red-500/20">
            <h2 className="text-3xl font-bold text-red-500 mb-6 flex items-center gap-3">
              <Mail size={28} />
              11. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
            </h2>
            <p className="text-gray-300 mb-4">
              If you have questions or comments about this notice, you may contact us by post at:
            </p>
            <div className="bg-black/50 p-4 rounded-lg">
              <p className="text-gray-300 font-semibold">ORBIS POP PRIVATE LIMITED</p>
              <div className="flex items-start gap-3 mt-2">
                <MapPin size={20} className="text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">P K Chandra No.256 Mekeri, village Kaggodlu post, Kodagu</p>
                  <p className="text-gray-300">Madkeri, Karnataka 571201</p>
                  <p className="text-gray-300">India</p>
                </div>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <Mail size={20} className="text-red-500" />
                <a 
                  href="mailto:orbispop@gmail.com" 
                  className="text-red-400 hover:text-red-300 transition-colors"
                >
                  orbispop@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Section 13 - DPDP Compliance */}
          <div id="dpdp-compliance" className="bg-red-600/20 backdrop-blur-lg p-8 rounded-2xl border border-red-500/40">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <AlertTriangle size={28} />
              13. COMPLIANCE WITH THE DIGITAL PERSONAL DATA PROTECTION ACT, 2023 (INDIA)
            </h2>
            <p className="text-gray-300 mb-6">
              We comply with the provisions of the Digital Personal Data Protection Act, 2023 (DPDP Act) of India in how we collect, store, and use your personal data.
            </p>
            
            <p className="text-gray-300 mb-4">
              If you are located in India, you have the following rights under the DPDP Act:
            </p>
            
            <ul className="text-gray-300 space-y-2 mb-6">
              <li>• <strong>Right to Access:</strong> You may request access to your personal data processed by us.</li>
              <li>• <strong>Right to Correction:</strong> You may request correction of inaccurate or misleading data.</li>
              <li>• <strong>Right to Erasure:</strong> You may request deletion of personal data that is no longer necessary.</li>
              <li>• <strong>Right to Grievance Redressal:</strong> You may file a complaint with us about the improper processing of your personal data, and we are required to respond within prescribed time limits.</li>
            </ul>
            
            <p className="text-gray-300 mb-6">
              We ensure that your data is processed lawfully and only for the purposes for which it was collected. We retain data no longer than necessary and have appropriate safeguards in place to protect it from misuse.
            </p>
            
            <p className="text-gray-300 mb-4">
              If you wish to exercise any of these rights, you can contact us at:
            </p>
            
            <div className="bg-black/50 p-4 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <Mail size={20} className="text-red-500" />
                <p className="text-gray-300">Email: <a href="mailto:contact@orbispop.com" className="text-red-400 hover:text-red-300">contact@orbispop.com</a></p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-red-500 mt-1 flex-shrink-0" />
                <p className="text-gray-300">Mail: P K Chandra No.256 Mekeri, village Kaggodlu post, Kodagu, Madkeri, Karnataka 571201</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;