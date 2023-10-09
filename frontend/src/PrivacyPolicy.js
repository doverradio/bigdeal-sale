import React from 'react';
import NavbarMain from "./NavbarMain";
import Footer from './Footer';

const PrivacyPolicy = () =>
{
    return(
        <>
            <NavbarMain />
            <div style={{ maxWidth: "800px", margin: "40px auto", padding: "20px" }}>
                <h1 className='m-1 p-1'>Privacy Policy</h1>
                <p>Last updated: 10/09/2023</p>
                
                <h2>Introduction</h2>
                <p>
                    Thank you for choosing to use our services at <strong>bigdeal.sale</strong>. While we provide our services independently and 
                    are not affiliated with, endorsed by, or in any manner associated with <strong>TikTok</strong>, we value your privacy and are dedicated to 
                    safeguarding your personal data. This policy outlines how we handle your data when you interact with our website or services, 
                    emphasizing your rights and the protections granted to you by the law.
                </p>
                
                <h2>Personal Data We Collect</h2>
                <ul>
                    <li><strong>Contact Data.</strong> Includes email address, telephone number, and physical address.</li>
                    <li><strong>Technical Data.</strong> Includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system, and platform, and other technology on the devices you use to access this website.</li>
                    <li>... (add other data types as required)</li>
                </ul>
                
                <h2>How We Use Your Personal Data</h2>
                <p>We use your data to provide and improve our services. By using our services, you agree to the collection and use of information as described in this policy.</p>

                <h2>Third-Party Services</h2>
                <p>
                    At times, we might collaborate with third-party entities and individuals to bolster our services, to deliver services on our behalf, 
                    or to help us better understand how users interact with our services. These third parties get access to your data strictly to undertake 
                    tasks for us and are bound by agreements that prevent them from disclosing your data or using it for unrelated purposes. Importantly, 
                    no data sharing occurs with <strong>TikTok</strong> unless it's integral to our app's functionality and has been authorized by <strong>TikTok</strong>.
                </p>
                
                <h2>Changes to This Privacy Policy</h2>
                <p>
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page 
                    and updating the "Last updated" date at the top of this page. You are advised to review this Privacy Policy periodically for any changes.
                </p>
                
                <h2>Contact Us</h2>
                <p>If you have any questions about this Privacy Policy or our relationship with <strong>TikTok</strong>, please <a href="/contact">contact us</a>.</p>
            </div>
            <Footer />
        </>
    )
}

export default PrivacyPolicy