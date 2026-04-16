import React from 'react';

const instagramImages = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDjAG9BAQPWPceAn_2OOIoXidgWW79Nke8sianduIsrC7dlMlWvLibMjwe6YUhNhSEIdMOHtxBhw6GQSnpCqmilSxesZQrUiU4Hwv9ptkGVR_mWHxTBx0UKj7L5Gjs9dkvttSQCdxzPGh2FxQvJJedfpTQTpM56x3AAT-v0zFYaur0e2p5umEseVs2bm2AIJnSasPGDlQ3fi8JTZf7NQpv-0uGhVZVDDLuzS4mIyTSBOn18FC60bJ1bjtSty-mivoD_OSxdojY0xQYo',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDk5zBIUtZ2TxdKr63hAWQAo9RZOY03u3JxlYdVGnjq70DcXBXzn_Y2HSh-rqouodl1O1OHf2DDNE54VCv8ApNrtova-3tG1yGlWFjwTCE-EEUqOU7imkDxsqa8qG1zHhoK3fmq4a4iMfymfCXC-E2cqq49MpYUhVRuNTodbAuwH3mG4Bx2vu3pz9rxcuIkfP9U9oTVLzvfLjVLBYsBys6EaOLxmxrchK_muhGPMpbLFsHe3yC8PGXwQDUmj4PL0kPtmGrz2W0v1fUl',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAGSSc6v9XiGxGynifY_PYZ6DjD5eChO9d76dx4kZSFFoK5HsA70QTm97c8BI_ea8edqmGQQx9CDr8jom-W1COBIv1FeaUvNAa3_xXHMPDRSGeKqLlj05lt87SJqtN_7IPbAMHdENk18Bm_nAT0O1F4abH6NuZ397JoqrB-eSiMsBtPvxDY9KDSfaLOVf98lVo4w1hH-x1sXp9YTfxSgtLfRbulBfHiluMuQPaaDGDS5-lh8bVwc0zJ0_Ynjx54IhlZ1aMpkXJclij2',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBBEWUk9VEavT_In7jYRyuWrcEEr0QvIIXmkvMu8DQZ3b4QCLAnI3WXfPeWoLrPZoWH9SaCDq2qKpw_g6kSrS3FeyYWtftC8EFHcttiytSJiRZlBizdtmCM2-E_h2niaGnhtpdZTVB6U6c2u6p9T1VeJzjFcduWUu1-NCOfMUQg48pJ2-0A1UoD0huPuE1WhY3i_HgfIRB1gRgZeG9Sv3JuUXT1Vvr1A6FTO_UyYuNpvjLBA2MFxzaC8itg5kixciUwrmskCEd22Vo3',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAZp5y7KoFk93hIX6C2vj3yPAKluc8lCCpmOXhxYzwovHcxJ_Jj4mxZLMVfQLDwVF58sEIAIxQ4L40qY79zJn53xDYwbZyBVqrf7UsH9C-NmGj6KFO7zKIqpKrvvwAfvXuk-wJ9B7zzmo3mapmoLmIpV1e2pIZXiK1Ih4AHhCS3OpQ33J4CveevpRHNpgBoAOoYp_Wk5ULfaAV9HE48Pkp1bdqVeyjM2C5DXNxtwAeibhHZEn4FlUJOAdXGfaYl5g5cgxBSSrCnhj5t',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAokwy-d4d3Nnkvy2_ZDh4THz-r7RgUXExSgEMgzmurfATIJXyn2oKyEvMbcNs-WLIY0x7Y26e_QAhrKvD-apFmwqJvSJcINOoVjQR5qGeTalnk0fnF9DpHhI2LeH21GiUZ0SwfeEJXZhlCWP0TRT_wrCnnxUs_0umZi4jj-QFqWEMnMRAxoFwiwYTQVoHPI1qiR30ORuFrkUQus1bdiNQxLzpEaRIN3Cc4P0O9gUV7C1WM1p8LH-hEahhesyKvngSDrEAGWjAbcfkx'
];

const InstagramGrid = () => {
  return (
    <section className="py-24 bg-surface">
      <div className="text-center mb-16 px-8">
        <h2 className="font-serif text-4xl mb-4">Shop the Glow</h2>
        <p className="body-md text-on-surface-variant">Tagged by our community #DigitalAtelierBeauty</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
        {instagramImages.map((img, index) => (
          <img 
            key={index}
            className="aspect-square object-cover hover:opacity-90 transition-opacity cursor-pointer" 
            alt={`Instagram post ${index + 1}`} 
            src={img}
          />
        ))}
      </div>
    </section>
  );
};

export default InstagramGrid;