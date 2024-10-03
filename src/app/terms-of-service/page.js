import React from "react"

export default function TermsOfService(){



    return(
        <div className="md:w-2/4 mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
        <p className="mb-4">Effective Date: July 19, 2024</p>
        
        <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
            <p className="mb-2">{`Welcome to GrowTech Lab, a brand of Learning Setu Private Limited ("we", "our", "us"). By accessing or using our services, you agree to be bound by these Terms of Service ("Terms").`}</p>
        </section>
        
        <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">2. Services Provided</h2>
            <p className="mb-2">GrowTech Lab provides IT services including but not limited to web development, mobile app development, and IT consulting.</p>
        </section>
        
        <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">3. User Responsibilities</h2>
            <p className="mb-2">You agree to use our services in compliance with all applicable laws and regulations. You must not misuse our services or help anyone else do so.</p>
        </section>
        
        <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">4. Payment Terms</h2>
            <p className="mb-2">All payments for services are due in advance unless otherwise specified. We accept various forms of payment, including UPI and bank transfers.</p>
        </section>
        
        <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">5. Termination</h2>
            <p className="mb-2">We may terminate or suspend access to our services immediately, without prior notice or liability, for any reason whatsoever, including if you breach these Terms.</p>
        </section>
        
        <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">6. Limitation of Liability</h2>
            <p className="mb-2">In no event shall GrowTech Lab or Learning Setu Private Limited be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our services.</p>
        </section>
        
        <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">7. Changes to Terms</h2>
            <p className="mb-2">We reserve the right to modify these Terms at any time. Your continued use of our services after any such changes constitutes your acceptance of the new Terms.</p>
        </section>
        
        <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">8. Contact Us</h2>
            <p className="mb-2">If you have any questions about these Terms, please contact us at <a href="mailto:growtechlab7@gmail.com" className="text-blue-600">growtechlab7@gmail.com</a>.</p>
        </section>
    </div>
    )
}