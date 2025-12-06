"use client";

import React, { useState, useMemo } from "react";
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  InputAdornment,
  IconButton,
  Stack,
  Chip,
  Divider,
  Paper,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Link from "next/link";

const PRIMARY = "#1F6A36";
const BG = "#F3FFF8";

const FAKE_FAQS = [
  {
    q: "What is the Zocveda Ayurvedic PCD Franchise program?",
    a: "Zocveda offers a premium Ayurvedic PCD Franchise model that enables partners to distribute high-quality classical and proprietary Ayurvedic formulations with exclusive territory rights.",
    tag: "Franchise",
  },
  {
    q: "How can I apply for the Zocveda PCD Franchise?",
    a: "You can fill out the franchise inquiry form on our website or contact our business development team directly. Once submitted, our team will reach out within 24–48 hours.",
    tag: "Franchise",
  },
  {
    q: "What documents are required to start a Zocveda PCD Franchise?",
    a: "Basic documents include a drug license, GST registration, and address proof of business premises.",
    tag: "Requirements",
  },
  {
    q: "Do you provide monopoly rights for each territory?",
    a: "Yes. Zocveda wellness provides exclusive monopoly rights to franchise partners based on location availability.",
    tag: "Franchise",
  },
  {
    q: "What are the minimum order requirements?",
    a: "We maintain a low MOQ to help new distributors start easily while ensuring continuous product availability.",
    tag: "Orders",
  },
  {
    q: "What product categories does Zocveda offer?",
    a: "We offer 100+ Ayurvedic products including syrups, tablets, capsules, oils, powders, personal care, classical medicines, and wellness formulations.",
    tag: "Products",
  },
  {
    q: "Do you provide marketing support to franchise partners?",
    a: "Yes. We offer MR bags, visual aids, product brochures, promotional materials, and digital support where applicable.",
    tag: "Support",
  },
  {
    q: "Are Zocveda products GMP certified?",
    a: "Yes. All products are manufactured under GMP-certified facilities with strict quality standards.",
    tag: "Quality",
  },
  {
    q: "What makes Zocveda different from other Ayurvedic PCD companies?",
    a: "We offer premium formulations, strong brand backing, transparent business practices, monopoly rights, and consistent product availability.",
    tag: "Company",
  },
  {
    q: "How fast is order dispatch?",
    a: "Orders are usually dispatched within 24–48 hours from our warehouse.",
    tag: "Shipping",
  },
  {
    q: "Do you provide samples of products?",
    a: "Yes. Samples can be requested during onboarding or while placing your first few orders.",
    tag: "Products",
  },
  {
    q: "How can I track my order?",
    a: "Tracking details are sent through WhatsApp/SMS/Email once your order is shipped.",
    tag: "Shipping",
  },
  {
    q: "Do you offer third-party or contract manufacturing?",
    a: "Yes. Zoic Pharmaceuticals provides private-label and contract manufacturing services across multiple therapeutic segments.",
    tag: "Manufacturing",
  },
  {
    q: "What are the payment terms?",
    a: "We accept bank transfer, UPI, and online payment methods. Standard B2B advance payment terms apply.",
    tag: "Payments",
  },
  {
    q: "Is there a renewal fee or hidden charges for maintaining franchise rights?",
    a: "No hidden charges. Once you join, you maintain rights by fulfilling basic purchase consistency.",
    tag: "Franchise",
  },
  {
    q: "Can I expand my franchise territory later?",
    a: "Yes. If a territory is available, existing partners get priority for expansion.",
    tag: "Franchise",
  },
  {
    q: "Do you help with product training?",
    a: "Yes. Our team provides detailed product knowledge sessions, composition explanations, and marketing guidance.",
    tag: "Support",
  },
  {
    q: "Are Ayurvedic products safe for long-term use?",
    a: "Zocveda formulations are based on classical Ayurvedic texts and manufactured with high-purity herbal extracts for safe usage under guidance.",
    tag: "Products",
  },
  {
    q: "What is the shelf life of your products?",
    a: "Most products have a shelf life of 24–36 months depending on category.",
    tag: "Quality",
  },
  {
    q: "How do I get support after becoming a franchise partner?",
    a: "Each franchise partner is assigned a dedicated business executive for order support, marketing help, and product queries.",
    tag: "Support",
  },
];

export default function FaqPage() {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState("All");
  const [expanded, setExpanded] = useState(false);

  const tags = useMemo(() => {
    const s = new Set(FAKE_FAQS.map((f) => f.tag));
    return ["All", ...Array.from(s)];
  }, []);

  const filtered = useMemo(() => {
    return FAKE_FAQS.filter((f) => {
      const matchesTag = activeTag === "All" ? true : f.tag === activeTag;
      const matchesQuery = `${f.q} ${f.a}`.toLowerCase().includes(query.toLowerCase());
      return matchesTag && matchesQuery;
    });
  }, [query, activeTag]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ background: BG, minHeight: "100%", py: 8 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography variant="h3" sx={{ color: PRIMARY, fontWeight: 900, mb: 1 }}>
            Frequently Asked Questions
          </Typography>
          <Typography sx={{ fontSize: 18, color: "#4A4A4A", maxWidth: 900, mx: "auto" }}>
            Find quick answers to common questions about orders, shipping, payments, and more. Use the
            search or filter chips to narrow results.
          </Typography>
        </Box>

        <Paper elevation={3} sx={{ p: { xs: 2, md: 3 }, borderRadius: 3 }}>
          <Stack direction={{ xs: "column", md: "row" }} spacing={2} alignItems="center" sx={{ mb: 2 }}>
            <TextField
              fullWidth
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search FAQs — try: 'shipping', 'refund', 'invoice'"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />

            <IconButton
              onClick={() => {
                setQuery("");
                setActiveTag("All");
                setExpanded(false);
              }}
              sx={{ bgcolor: "white", borderRadius: 2 }}
              aria-label="reset"
            >
              <InfoOutlinedIcon sx={{ color: PRIMARY }} />
            </IconButton>
          </Stack>

          <Box sx={{ mb: 2 }}>
            <Stack direction="row" spacing={1} flexWrap="wrap">
              {tags.map((t) => (
                <Chip
                  key={t}
                  label={t}
                  clickable
                  onClick={() => setActiveTag(t)}
                  variant={activeTag === t ? "filled" : "outlined"}
                  sx={{
                    borderColor: PRIMARY,
                    color: activeTag === t ? "white" : PRIMARY,
                    bgcolor: activeTag === t ? PRIMARY : "transparent",
                    fontWeight: 600,
                  }}
                />
              ))}
            </Stack>
          </Box>

          <Divider sx={{ mb: 2 }} />

          <Box>
            {filtered.length === 0 ? (
              <Box sx={{ py: 6, textAlign: "center" }}>
                <Typography sx={{ color: "#666" }}>No results match your search.</Typography>
              </Box>
            ) : (
              filtered.map((item, index) => {
                const id = `panel-${index}`;
                return (
                  <Accordion
                    key={id}
                    expanded={expanded === id}
                    onChange={handleChange(id)}
                    sx={{
                      mb: 1,
                      borderRadius: 2,
                      boxShadow: "none",
                      border: "1px solid rgba(0,0,0,0.06)",
                      '& .MuiAccordionSummary-root': { minHeight: 64 },
                    }}
                  >
                    <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: PRIMARY }} />}>
                      <Stack direction="row" alignItems="center" spacing={2} sx={{ width: "100%" }}>
                        <Box
                          sx={{
                            width: 10,
                            height: 10,
                            borderRadius: "50%",
                            bgcolor: PRIMARY,
                            boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
                          }}
                        />
                        <Typography sx={{ fontWeight: 700 }}>{item.q}</Typography>
                        <Box sx={{ flex: 1 }} />
                        <Chip
                          label={item.tag}
                          size="small"
                          sx={{ borderColor: PRIMARY, color: PRIMARY, fontWeight: 600 }}
                        />
                      </Stack>
                    </AccordionSummary>

                    <AccordionDetails sx={{ background: "rgba(31,106,54,0.03)", borderRadius: 0, pt: 2 }}>
                      <Typography sx={{ color: "#333" }}>{item.a}</Typography>
                    </AccordionDetails>
                  </Accordion>
                );
              })
            )}
          </Box>

          <Box sx={{ mt: 3, textAlign: "center" }}>
            <Link href={"/contact"}>
            <Typography sx={{ color: "#666" }}>
              Didn’t find what you were looking for? Contact our support and we’ll help you out.
            </Typography>
            </Link>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
