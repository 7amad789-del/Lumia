# خريطة التحويل من Gemini/React إلى Salla Twilight

| مشروع Lumia المحدث | ملف Salla Twilight |
|---|---|
| `App.tsx` | `src/views/pages/index.twig` + `layouts/master.twig` |
| `Header.tsx` | `src/views/components/header/header.twig` |
| `ProductHero.tsx` | `components/home/lumia-hero.twig` + `pages/product/single.twig` |
| `PainReliefAdvisor.tsx` | `components/home/lumia-advisor.twig` + `home.js` |
| `FeaturesSection.tsx` | `components/home/lumia-features.twig` |
| `ComparisonTable.tsx` | `components/home/lumia-comparison.twig` |
| `HowToUse.tsx` | `components/home/lumia-how-to.twig` |
| `ReviewsSection.tsx` | `components/home/lumia-reviews.twig` + تقييمات سلة في صفحة المنتج |
| `FaqSection.tsx` | `components/home/lumia-faq.twig` |
| `CartDrawer.tsx` | صفحة سلة الفعلية `pages/cart.twig` |
| `CheckoutModal.tsx` | الدفع الفعلي في سلة، وليس نافذة React التجريبية |
| `Footer.tsx` | `components/footer/footer.twig` |
| بيانات `productData.ts` | إعدادات مكونات `twilight.json` وبيانات المنتج داخل لوحة سلة |
