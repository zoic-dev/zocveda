// app/warranty-and-services/page.js

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
    title: "Warranty & Services | Zocveda – Zoic Pharmaceuticals",
    description:
        "Understand Zocveda’s Warranty & Services policy covering product quality standards, manufacturing compliance, logistics, and franchise partner support.",
    robots: "index, follow",
    alternates: {
        canonical: "https://www.zocveda.com/warranty-and-services",
    },
};

export default function WarrantyAndServicesPage() {
    return (
        <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
            {/* Page Header */}
            <Typography variant="h3" component="h1" gutterBottom fontWeight={700}>
                Warranty & Services
            </Typography>

            <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                Zocveda – A brand operated by Zoic Pharmaceuticals
            </Typography>

            <Divider sx={{ mb: 4 }} />

            {/* Product Quality & Manufacturing Standards */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Product Quality & Manufacturing Standards
                </Typography>

                <Typography variant="body1" paragraph>
                    Zocveda is a brand operating under Zoic Pharmaceuticals All
                    Ayurvedic and herbal products marketed under the Zocveda name are
                    sourced from manufacturing facilities that comply with applicable
                    regulatory requirements and prevailing industry norms at the time of
                    production.
                </Typography>

                <Typography variant="body1">
                    Product manufacturing, testing, and documentation are carried out in
                    accordance with applicable laws, guidelines, and internal quality
                    procedures. The information provided herein is for general reference
                    and does not constitute a statutory warranty or assurance beyond what
                    is expressly agreed in writing.
                </Typography>
            </Box>

            {/* Product Quality Assurance Disclaimer */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Product Quality Assurance Disclaimer
                </Typography>

                <Typography variant="body1" paragraph>
                    Zocveda endeavors to ensure that products supplied to its franchise
                    partners conform to internally approved specifications at the time of
                    dispatch.
                </Typography>

                <Typography variant="body1" paragraph>
                    However:
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
                        <ListItemText primary="No unconditional warranty or guarantee is provided beyond manufacturing compliance at dispatch." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Any quality-related assurance is limited strictly to manufacturing-related aspects identifiable at the time of internal review." />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="This policy does not constitute a promise of performance, efficacy, marketability, or fitness for any specific purpose." />
                    </ListItem>
                </List>
            </Box>

            {/* Shelf Life & Storage */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Shelf Life, Batch Details & Storage Responsibility
                </Typography>

                <Typography variant="body1" paragraph>
                    All products are supplied with relevant batch details and expiry
                    information as mandated by applicable regulations.
                </Typography>

                <Typography variant="body1" paragraph>
                    Franchise partners are solely responsible for:
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
                        <ListItemText primary="Storage, handling, and distribution in accordance with recommended conditions" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Compliance with local storage, sales, and regulatory requirements" />
                    </ListItem>
                </List>

                <Typography variant="body1">
                    Any deterioration, damage, or loss arising after dispatch due to
                    storage conditions, environmental factors, or handling practices shall
                    not be attributable to Zocveda.
                </Typography>
            </Box>

            {/* Quality Concern Process */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Quality Concern & Review Process
                </Typography>

                <Typography variant="body1" paragraph>
                    In the unlikely event of a suspected manufacturing-related concern,
                    franchise partners may submit a written request for internal review.
                </Typography>

                <Typography variant="body1" paragraph>
                    Requests must include:
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
                        <ListItemText primary="Batch number and corresponding invoice reference" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Supporting photographs or documentation (where applicable)" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="A brief written explanation of the concern" />
                    </ListItem>
                </List>

                <Typography variant="body1">
                    All submissions are subject to internal assessment by the quality or
                    technical team. Submission of a request does not imply acceptance of
                    liability or approval of replacement. Decisions taken by Zocveda after
                    internal review shall be final and binding.
                </Typography>
            </Box>

            {/* Services */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Services Provided to Franchise Partners
                </Typography>

                <Typography variant="body1" paragraph>
                    Subject to the terms of the executed franchise agreement, Zocveda may
                    provide support services which can include:
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
                        <ListItemText primary="Area-based franchise opportunities (where contractually agreed)" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Promotional and marketing assistance (non-binding)" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Product-related orientation or informational support" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Ongoing communication for business coordination" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Access to applicable quality or compliance documentation" />
                    </ListItem>
                </List>

                <Typography variant="body1">
                    The scope, nature, and availability of services may vary and shall
                    always remain subject to written agreement and operational feasibility.
                </Typography>
            </Box>

            {/* Dispatch */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Dispatch & Logistics Disclaimer
                </Typography>

                <Typography variant="body1" paragraph>
                    Dispatch timelines are indicative and communicated at the time of order
                    confirmation.
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
                        <ListItemText primary="Delays caused by third-party logistics providers" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Transit-related damages after delivery acceptance" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Delays due to force majeure events or circumstances beyond reasonable control" />
                    </ListItem>
                </List>

                <Typography variant="body1">
                    Risk and responsibility transfer to the franchise partner upon delivery
                    acceptance unless otherwise agreed in writing.
                </Typography>
            </Box>

            {/* Limitation of Liability */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Limitation of Liability
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
                        <ListItemText primary="Products sold beyond expiry" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Improper storage, handling, or misuse" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Damage occurring after delivery acceptance" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Unauthorized modification, repackaging, or relabeling" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Indirect, incidental, or consequential losses" />
                    </ListItem>
                </List>

                <Typography variant="body1">
                    All matters relating to warranty, service, or liability shall be
                    governed exclusively by the terms of the applicable franchise
                    agreement.
                </Typography>
            </Box>

            {/* Amendments */}
            <Box sx={{ mb: 5 }}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Policy Amendments
                </Typography>

                <Typography variant="body1">
                    Zocveda reserves the right to revise or update this Warranty & Services
                    policy at its sole discretion. Changes shall be effective upon
                    publication on this website and shall not create retrospective
                    obligations.
                </Typography>
            </Box>

            {/* Contact */}
            <Box>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                    Contact for Support
                </Typography>

                <Typography variant="body1">
                    <strong>Zocveda</strong>
                    <br />
                    A brand operated by Zoic Pharmaceuticals
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
