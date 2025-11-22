"use client";

import AyurvedicCounters from "@/components/AyurvedicCounters";
import SimpleSlider from "@/components/SimpleSlider";
import TestimonialSlider from "@/components/TestimonialSlider";
import { Button, Container, Grid, Stack, Typography, Card } from "@mui/material";
import Link from "next/link";

export const productCategories = [
  {
    label: "Digestive Care",
    img: "/categories/digestive-care.png",
    link: "/products/category/digestive-care",
  },
  {
    label: "Pain & Bone Care",
    img: "/categories/pain-and-bone-care.png",
    link: "/products/category/pain-and-bone-care",
  },
  {
    label: "Mental & Sleep Care",
    img: "/categories/mental-and-sleep-care.png",
    link: "/products/category/mental-and-sleep-care",
  },
  {
    label: "Men's Health",
    img: "/categories/mens-health.png",
    link: "/products/category/mens-health",
  },
  {
    label: "Women's Health",
    img: "/categories/womens-health.png",
    link: "/products/category/womens-health",
  },
  {
    label: "Hair & Skin Care",
    img: "/categories/hair-and-skin-care.png",
    link: "/products/category/hair-and-skin-care",
  },
  {
    label: "Kids Health",
    img: "/categories/kids-health.png",
    link: "/products/category/kids-health",
  },
  {
    label: "Detox & Cleaning Wellness",
    img: "/categories/detox-and-cleaning-wellness.png",
    link: "/products/category/detox-and-cleaning-wellness",
  },
];


const whyChoose = [
  { img: "/choose/experience.png", label: "Since 1990" },
  { img: "/choose/organic.png", label: "100% Ayurvedic" },
  { img: "/choose/paraben.png", label: "Paraben Free" },
  { img: "/choose/alcohol.png", label: "Alcohol Free" },
  { img: "/choose/cruelty.png", label: "Cruelty Free" },
  { img: "/choose/india.png", label: "Made in India" }
];

export default function Home() {
  return (
    <>
      <SimpleSlider />

      <Container sx={{ py: 8 }}>

        {/* Our Products Section */}
        <Stack spacing={6} textAlign="center">
          <Typography variant="h4" fontWeight={700}>
            Explore Our Ayurvedic Products
          </Typography>
          <Typography variant="body1" color="text.secondary">
            A wide range of trusted Ayurvedic solutions for all your health and wellness needs
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {productCategories.map((item, index) => (
              <Grid key={index} size={{ xs: 6, sm: 4, md: 3 }}>
                <Link href={item.link} style={{ textDecoration: "none" }}>
                  <Card
                    sx={{
                      overflow: "hidden",
                      borderRadius: 3,
                      cursor: "pointer",
                      boxShadow: "0px 4px 15px rgba(0,0,0,0.1)",
                      transition: "all 0.3s",
                      "&:hover img": { transform: "scale(1.1)" },
                      "&:hover": { boxShadow: "0px 8px 25px rgba(0,0,0,0.2)" },
                    }}
                  >
                    <img
                      src={item.img}
                      alt={item.label}
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "contain",
                        transition: "all 0.3s",
                      }}
                    />
                    <Typography
                      variant="h6"
                      sx={{ py: 2, fontWeight: 600, color: "#1F6A36" }}
                    >
                      {item.label}
                    </Typography>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Stack>

        {/* About Us Section */}
        <Grid container spacing={6} alignItems="center" sx={{ py: 10 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <img
              src="/about-section.jpg"
              alt="About Zocveda"
              style={{ width: "100%", borderRadius: 16 }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={3}>
              <Typography variant="h4" fontWeight={700}>
                Zocveda Ayurvedic Franchise Company
              </Typography>
              <Typography variant="body1" textAlign="justify">
                ZOCVEDA, a division of Zoic Group, has been delivering trusted Ayurvedic products for nearly 30 years. We specialize in Ayurvedic PCD Franchise, Third-Party Manufacturing, and Herbal Contract Manufacturing.
              </Typography>
              <Typography variant="body1" textAlign="justify">
                Combining traditional Ayurvedic wisdom with modern scientific research, our formulations provide safe, effective, and result-oriented wellness solutions for all age groups.
              </Typography>
              <Link href="/about" style={{ color: "#1F6A36", fontWeight: 600 }}>
                Read more...
              </Link>
            </Stack>
          </Grid>
        </Grid>

        <AyurvedicCounters />

        {/* Featured Services */}
        <Stack spacing={6} sx={{ py: 8 }}>
          <Typography variant="h4" fontWeight={700} textAlign="center">
            Our Core Services
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                title: "PCD Pharma Franchise",
                text: "Offering 250+ high-quality Ayurvedic products with monopoly rights across India.",
                link: "/pcd-franchise"
              },
              {
                title: "Third Party Manufacturing",
                text: "Full support for manufacturing, formulation development, and packaging as per your brand requirements.",
                link: "/third-party-manufacturing"
              },
              {
                title: "Herbal Contract Manufacturing",
                text: "Customized Ayurvedic production with strict quality control, ISO & GMP certified.",
                link: "/third-party-manufacturing"
              },
            ].map((item, i) => (
              <Grid size={{ xs: 12, md: 4 }} key={i}>
                <Card
                  sx={{
                    p: 4,
                    borderRadius: 3,
                    boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "all 0.3s",
                    "&:hover": { transform: "translateY(-6px)", boxShadow: "0px 8px 30px rgba(0,0,0,0.2)" },
                  }}
                >
                  <Stack spacing={2}>
                    <Typography variant="h5" fontWeight={600}>
                      {item.title}
                    </Typography>
                    <Typography variant="body1" textAlign="justify">
                      {item.text}
                    </Typography>
                  </Stack>
                  <Button
                    href={item.link}
                    component={Link}
                    variant="contained"
                    sx={{
                      mt: 2,
                      backgroundColor: "#1F6A36",
                      "&:hover": { backgroundColor: "#14532D" },
                      fontWeight: 600
                    }}
                  >
                    Enquire Now
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Stack>

        {/* Why Choose Us Section */}
        <Stack spacing={6} sx={{ py: 10, backgroundColor: "#F3FFF8" }}>
          <Typography variant="h4" fontWeight={700} textAlign="center">
            Why Choose Zocveda?
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {whyChoose.map((item, i) => (
              <Grid key={i} size={{ xs: 6, sm: 4, md: 2 }}>
                <Card
                  sx={{
                    p: 4,
                    borderRadius: 3,
                    textAlign: "center",
                    boxShadow: "0px 4px 15px rgba(0,0,0,0.05)",
                    transition: "all 0.3s",
                    "&:hover": { transform: "translateY(-6px)", boxShadow: "0px 8px 25px rgba(0,0,0,0.15)" },
                  }}
                >
                  <img src={item.img} alt={item.label} style={{ width: 60, height: 60, marginBottom: 16 }} />
                  <Typography variant="body1" fontWeight={600}>
                    {item.label}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Stack>

      </Container>

      {/* Testimonials */}
      <Stack spacing={8} sx={{ pt: 10, backgroundColor: "#FFF9F3" }}>
        <Typography variant="h4" fontWeight={700} textAlign="center">
          What Our Partners Say
        </Typography>
        <TestimonialSlider />
      </Stack>
    </>
  );
}
