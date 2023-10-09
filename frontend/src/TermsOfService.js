import React from "react";
import NavbarMain from "./NavbarMain";

const TermsOfService = () =>
{
    return (
        <>
            <NavbarMain />
            <div style={{ maxWidth: "800px", margin: "40px auto", lineHeight: "1.6" }}>
                <h1>Terms of Service</h1>

                <h2 className="m-1 p-1">1. Acceptance of Terms</h2>
                <p className="m-1 p-1">
                    By accessing and using <strong>bigdeal.sale</strong>'s services, you accept and agree to be bound by the terms and provisions of this agreement.
                    t is vital to understand that <strong>bigdeal.sale</strong> is not affiliated with, endorsed by, or in any manner associated with <strong>TikTok</strong>.
                </p>

                <h2 className="m-1 p-1">2. Changes to Terms</h2>
                <p className="m-1 p-1">
                    <strong>bigdeal.sale</strong> may revise these terms at any time without notice. By using this service, you are agreeing to be bound by the current version of these Terms of Service.
                </p>

                <h2 className="m-1 p-1">3. Usage of TikTok's Name and Brand (if applicable)</h2>
                <p className="m-1 p-1">
                Any reference to <strong>TikTok</strong> on our platform strictly adheres to <strong>TikTok</strong>'s Brand and Use Guidelines. The <strong>TikTok</strong> name, when used, is only to identify or refer to the 
                <strong>TikTok</strong> platform or its services and is not used for promotional or misleading purposes.
                </p>

                <h2 className="m-1 p-1">4. Use License</h2>
                <p className="m-1 p-1">
                    Permission is granted to temporarily download one copy of the materials on <strong>bigdeal.sale</strong>'s website for personal, non-commercial transitory viewing only.  
                    This license does not include any use of <strong>TikTok</strong>'s trademarks, logos, or other proprietary content unless explicitly mentioned.
                </p>

                <h2 className="m-1 p-1">5. Account Security</h2>
                <p className="m-1 p-1">
                    You are responsible for safeguarding the password that you use to access the service and for any activities or actions under your password.
                </p>

                <h2 className="m-1 p-1">6. Termination</h2>
                <p className="m-1 p-1">
                    <strong>bigdeal.sale</strong> may terminate your access to the services, without cause or notice, which may result in the forfeiture and destruction of all information associated with your account.
                </p>

                <h2 className="m-1 p-1">7. Governing Law</h2>
                <p className="m-1 p-1">
                    These terms and conditions are governed by and construed in accordance with the laws of California, USA, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                </p>

                <h2 className="m-1 p-1">8. Limitations</h2>
                <p className="m-1 p-1">
                    In no event shall <strong>bigdeal.sale</strong> be liable for any damages arising out of the use or inability to use the materials on <strong>bigdeal.sale</strong>'s website.
                </p>

                <h2 className="m-1 p-1">9. Revisions</h2>
                <p className="m-1 p-1">
                    The materials appearing on <strong>bigdeal.sale</strong>'s website may include technical, typographical, or photographic errors.
                </p>

                <p className="m-1 p-1">
                If you have queries regarding these Terms of Service or need further clarification about our association (or lack thereof) with TikTok, please <a href="/contact">contact us</a>.
                </p>
            </div>
        </>
    );
}

export default TermsOfService