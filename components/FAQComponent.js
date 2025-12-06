import React from "react";
import { Box, Typography, Paper, Stack, Divider } from "@mui/material";

export default function FAQComponent({ faqs = [] }) {
    return (
        <Box sx={{ my: 4 }}>
            {/* Section Title */}
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 800, color: "#1F6A36" }}>
                Frequently Asked Questions
            </Typography>

            {/* FAQ List Container */}
            <Paper
                elevation={0}
                sx={{ border: "1px solid rgba(0,0,0,0.08)", borderRadius: 2, p: 2 }}
            >
                <Stack spacing={1}>
                    {faqs.map((item, idx) => (
                        <Box
                            key={idx}
                            sx={{
                                p: 2,
                                borderRadius: 1,
                                bgcolor: idx % 2 === 0 ? "transparent" : "rgba(0,0,0,0.03)",
                            }}
                        >
                            <Typography sx={{ fontWeight: 700, fontSize: 15 }}>
                                {item.q}
                            </Typography>

                            <Typography sx={{ mt: 0.5, color: "#444", fontSize: 14 }}>
                                {item.a}
                            </Typography>

                            {idx !== faqs.length - 1 && <Divider sx={{ mt: 1.5 }} />}
                        </Box>
                    ))}
                </Stack>
            </Paper>
        </Box>
    );
}
