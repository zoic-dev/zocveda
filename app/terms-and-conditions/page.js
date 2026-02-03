// app/terms-and-conditions/page.js

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
    title: "Terms & Conditions | Zocveda – Zoic Pharmaceuticals",
    description:
        "Read the Terms and Conditions governing the use of Zocveda’s website for Ayurvedic and Herbal PCD Pharma Franchise information.",
    robots: "index, follow",
    alternates: {
        canonical: "https://www.zocveda.com/terms-and-conditions",
    },
};

export default function TermsAndConditionsPage() {
    return (
        <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
            {/* Page Header */}
            <Typography variant="h3" component="h1" gutterBottom fontWeight={700}>
                Terms & Conditions
            </Typography>

            <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                Zocveda – A unit of Zoic Pharmaceuticals
            </Typography>

            <Divider sx={{ mb: 4 }} />

            {/* Acceptance of Terms */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Acceptance of Terms
                </Typography>

                <Typography variant="body1">
                    By accessing <strong>www.zocveda.com</strong>, you agree to comply with
                    and be legally bound by these Terms and Conditions. If you do not agree,
                    you must discontinue use of the Website.
                </Typography>
            </Box>

            {/* Purpose of Website */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Purpose of Website
                </Typography>

                <Typography variant="body1" paragraph>
                    This Website is intended solely to provide general information about
                    Ayurvedic and Herbal PCD Pharma Franchise services offered by Zocveda.
                </Typography>

                <Typography variant="body1">
                    No online sales, payments, or franchise agreements are executed through
                    this Website.
                </Typography>
            </Box>

            {/* Permitted Use */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Permitted Use
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
                        <ListItemText primary="Use the Website only for lawful and legitimate business enquiries" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Do not misuse content for commercial resale, copying, or redistribution" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Do not attempt unauthorised access, scraping, or data extraction" />
                    </ListItem>
                </List>
            </Box>

            {/* Intellectual Property */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Intellectual Property
                </Typography>

                <Typography variant="body1">
                    All Website content, including text, graphics, logos, product names,
                    layouts, and designs are owned by <strong>Zoic Pharmaceuticals</strong>.
                    Unauthorised use, reproduction, or modification is strictly prohibited.
                </Typography>
            </Box>

            {/* Disclaimer */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Disclaimer of Business Commitment
                </Typography>

                <Typography variant="body1" paragraph>
                    Submission of an enquiry does not constitute:
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
                        <ListItemText primary="A franchise offer" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="A legal agreement" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="A business guarantee" />
                    </ListItem>
                </List>

                <Typography variant="body1">
                    All franchise terms are finalised only through written agreements
                    executed offline.
                </Typography>
            </Box>

            {/* Limitation of Liability */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Limitation of Liability
                </Typography>

                <Typography variant="body1" paragraph>
                    Zocveda shall not be responsible for:
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
                        <ListItemText primary="Any indirect or consequential loss" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Business loss arising from reliance on Website content" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Temporary unavailability of the Website" />
                    </ListItem>
                </List>

                <Typography variant="body1">
                    Use of this Website is entirely at your own risk.
                </Typography>
            </Box>

            {/* External Links */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    External Links
                </Typography>

                <Typography variant="body1">
                    The Website may include third-party links for reference. Zocveda has no
                    control over their content and assumes no responsibility for it.
                </Typography>
            </Box>

            {/* Termination */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Termination of Access
                </Typography>

                <Typography variant="body1">
                    We reserve the right to restrict or terminate access to the Website
                    without notice if these Terms are violated.
                </Typography>
            </Box>

            {/* Governing Law */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Governing Law
                </Typography>

                <Typography variant="body1">
                    These Terms shall be governed by the laws of India, and courts of
                    competent jurisdiction in India shall have exclusive authority.
                </Typography>
            </Box>

            {/* Changes */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Changes to Terms
                </Typography>

                <Typography variant="body1">
                    Zocveda may revise these Terms at any time. Continued use of the Website
                    implies acceptance of the updated Terms.
                </Typography>
            </Box>

            {/* Contact */}
            <Box>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Contact Details
                </Typography>

                <Typography variant="body1">
                    <strong>Zocveda</strong>
                    <br />
                    A unit of Zoic Pharmaceuticals
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
