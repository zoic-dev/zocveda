// app/privacy-policy/page.js

import {
    Container,
    Typography,
    Box,
    Divider,
    List,
    ListItem,
    ListItemText,
} from "@mui/material";

/* =========================
   SEO – Next.js App Router
========================= */
export const metadata = {
    title: "Privacy Policy | Zocveda – Zoic Pharmaceuticals Pvt. Ltd.",
    description:
        "Learn how Zocveda, a brand of Zoic Pharmaceuticals Pvt. Ltd., collects, uses, and protects personal information for Ayurvedic and herbal PCD pharma franchise enquiries.",
    robots: "index, follow",
    alternates: {
        canonical: "https://www.zocveda.com/privacy-policy",
    },
};

export default function PrivacyPolicyPage() {
    return (
        <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
            {/* Page Header */}
            <Typography variant="h3" component="h1" gutterBottom fontWeight={700}>
                Privacy Policy
            </Typography>

            <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                Zocveda – A division of Zoic Pharmaceuticals Pvt. Ltd.
            </Typography>

            <Divider sx={{ mb: 4 }} />

            {/* Introduction */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="body1" paragraph>
                    This Privacy Policy describes how <strong>Zocveda</strong>, a brand
                    owned and operated by <strong>Zoic Pharmaceuticals Pvt. Ltd.</strong>,
                    collects, uses, protects, and discloses information obtained from users
                    of the website <strong>www.zocveda.com</strong> (“Website”).
                </Typography>

                <Typography variant="body1" paragraph>
                    By accessing or using this Website, you agree to the terms of this
                    Privacy Policy. If you do not agree, please refrain from using the
                    Website.
                </Typography>

                <Typography variant="body1">
                    This policy is published in compliance with the Information Technology
                    Act, 2000 and applicable rules thereunder, including the Information
                    Technology (Reasonable Security Practices and Procedures and Sensitive
                    Personal Data or Information) Rules, 2011.
                </Typography>
            </Box>

            {/* Information We Collect */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Information We Collect
                </Typography>

                <List
                    sx={{
                        listStyleType: "disc",
                        pl: 4,
                        "& .MuiListItem-root": {
                            display: "list-item",
                            paddingLeft: 0,
                        },
                    }}
                >
                    <ListItem>
                        <ListItemText primary="Name" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Email address" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Phone number" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="City, state, and country" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Information submitted through enquiry or contact forms" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Any other details voluntarily shared for franchise or business enquiries" />
                    </ListItem>
                </List>

                <Typography variant="body1">
                    We do not collect payment information or sensitive financial data
                    through this Website.
                </Typography>
            </Box>

            {/* Use of Information */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Use of Information
                </Typography>

                <List
                    sx={{
                        listStyleType: "disc",
                        pl: 4,
                        "& .MuiListItem-root": {
                            display: "list-item",
                            paddingLeft: 0,
                        },
                    }}
                >
                    <ListItem>
                        <ListItemText primary="Responding to franchise and business enquiries" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Providing information related to Ayurvedic and herbal PCD pharma franchise opportunities" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Business communication and follow-ups" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Improving our Website and services" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Sending relevant promotional or informational communication (opt-out available)" />
                    </ListItem>
                </List>

                <Typography variant="body1">
                    We do not sell, rent, or trade your personal information to third
                    parties.
                </Typography>
            </Box>

            {/* Cookies */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Cookies and Tracking Technologies
                </Typography>

                <Typography variant="body1" paragraph>
                    Our Website may use cookies to improve user experience, analyse
                    traffic, and understand visitor behaviour. Cookies do not collect
                    personally identifiable information.
                </Typography>

                <Typography variant="body1">
                    You may disable cookies through your browser settings; however, some
                    features of the Website may not function properly.
                </Typography>
            </Box>

            {/* Data Security */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Data Security
                </Typography>

                <Typography variant="body1" paragraph>
                    We implement reasonable administrative, technical, and physical
                    safeguards to protect your personal information from unauthorised
                    access, misuse, or disclosure.
                </Typography>

                <Typography variant="body1">
                    However, no method of transmission over the Internet is completely
                    secure, and we cannot guarantee absolute security.
                </Typography>
            </Box>

            {/* Third Party */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Third-Party Services
                </Typography>

                <Typography variant="body1">
                    Our Website may contain links to third-party websites. We are not
                    responsible for the privacy practices or content of such websites.
                </Typography>
            </Box>

            {/* Children */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Children’s Privacy
                </Typography>

                <Typography variant="body1">
                    This Website is intended for business and professional use only. We do
                    not knowingly collect personal information from individuals under 18
                    years of age.
                </Typography>
            </Box>

            {/* Disclosure */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Disclosure of Information
                </Typography>

                <Typography variant="body1">
                    We may disclose personal information when required by law or to protect
                    our legal rights.
                </Typography>
            </Box>

            {/* Updates */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Changes to This Privacy Policy
                </Typography>

                <Typography variant="body1">
                    We reserve the right to modify this Privacy Policy at any time. Changes
                    will be effective immediately upon posting on this page.
                </Typography>
            </Box>

            {/* Contact */}
            <Box>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Contact Information
                </Typography>

                <Typography variant="body1">
                    <strong>Zocveda</strong>
                    <br />
                    A division of Zoic Pharmaceuticals Pvt. Ltd.
                    <br />
                    Website: https://www.zocveda.com
                    <br />
                    Email: info@zocveda.com
                    <br />
                    Phone: +91-98156-20908
                </Typography>
            </Box>
        </Container>
    );
}
