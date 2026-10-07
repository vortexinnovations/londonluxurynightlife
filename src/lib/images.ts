/**
 * Image mapping for all pages.
 * All paths are proxied through /gallery/images/ → Supabase bucket.
 * NEVER use the raw Supabase URL in components.
 */

const img = (filename: string) => `/gallery/images/${filename}`;

// ── Homepage ────────────────────────────────────────────────────────
export const HOME_IMAGES = {
  hero: img("fe4414_a94245ac02fb461eb7770b08c25d60dd.jpg"),
  editorial: img("fe4414_9d8870308b1e4940994470819a516c56.jpg"),
  ctaBackground: img("fe4414_8d37c25d1b2f44ed86ce24f0255b64c8.jpg"),
};

// ── Club page hero images ───────────────────────────────────────────
export const CLUB_IMAGES: Record<string, { hero: string; inline: string[] }> = {
  "tape-london": {
    hero: img("fe4414_0671e2a8f6974449a73307a48ce1b12e.jpg"),
    inline: [img("fe4414_70de86cb15744274ba8c6dd7bd79d893.jpg"), img("fe4414_8b702b1e302c49cc8490edc82af6cdda.jpg")],
  },
  "cirque-le-soir": {
    hero: img("fe4414_23e37ad1543140e68e62e62587f7120c.jpg"),
    inline: [img("fe4414_08ffe6ecd7e64958b22d4b1ab42d1722.jpg"), img("fe4414_e8d36bbc2efc4a019f285b39fa00b28f.jpg")],
  },
  "reign-london": {
    hero: img("DSC_7154.jpg"),
    inline: [img("DSC_7164.jpg"), img("DSC_7176.jpg")],
  },
  "tabu-london": {
    hero: img("fe4414_52d6295c80bc46b3b8b13d5eb0c385f5.jpg"),
    inline: [img("fe4414_ab79d0b759bf40809b9f375b219a4b87.jpg"), img("fe4414_b73c59d02559433baf6bdaff91a1bff3.jpg")],
  },
  "funky-buddha": {
    hero: img("fe4414_9bca79c7758d42a48f33bfe38f57e6d0.jpg"),
    inline: [img("fe4414_c0f53cc6cfe84299987ece034fa64e25.jpg"), img("fe4414_f00637f3a2a740078b492ed93e5ec5e5.jpg")],
  },
  "cuckoo-club": {
    hero: img("fe4414_8d1b76fde5204b9d845400d8d6d40739.jpg"),
    inline: [img("fe4414_423495393edf437d9425d453f03729f1.jpg"), img("fe4414_22bea265d7434a9990ce468023444910.jpg")],
  },
  "scotch-of-st-james": {
    hero: img("fe4414_072d223d158244a6815f1ed7b01e900b.jpg"),
    inline: [img("fe4414_9d461c43831448e09e1bdac31fb73748.jpg"), img("fe4414_8b5a36eadc454e18b89e9d4093858634.jpg")],
  },
  "dear-darling": {
    hero: img("fe4414_0cba03ea5abe4657beb2d4e9b87a2f35.jpg"),
    inline: [img("fe4414_49fe694c3d33461193c27d16f731a5df.jpg"), img("fe4414_17b5d83792d8412abf2893e2cdd81941.jpg")],
  },
  maddox: {
    hero: img("fe4414_950de24e4f2b429ba47a022f13479db5.jpg"),
    inline: [img("fe4414_affd1145589143f7a655ebcb34a0a7c8.jpg"), img("fe4414_9bf346cb801649ea839f8fe1bab5182f.jpg")],
  },
  "the-box-london": {
    hero: img("fe4414_f1f26d54e1e14b6384eb337005445fbf.jpg"),
    inline: [img("fe4414_a3ed16e550ee4a7cb8fd937b2d1cbb52.jpg"), img("fe4414_97067774a6b844efbd5fe0c818358b30.jpg")],
  },
  "luna-club-london": {
    hero: img("fe4414_b3ddf2c48c9d49dfbd53bd0710bcf757.jpg"),
    inline: [img("fe4414_b4633e7c60fa491e8c26bea776d3e98c.jpg"), img("fe4414_491c64bede334c11aad784d7517742a7.jpg")],
  },
  "selene-london": {
    hero: img("fe4414_5e23eeafd6314264963165b315a2d5f7.jpg"),
    inline: [img("fe4414_85b9fc90bd9d4311919bf108aa1b75f0.jpg"), img("fe4414_80bf23f50fb443a99d16df14a145ffe5.jpg")],
  },
  "beat-london": {
    hero: img("fe4414_11a552e726fa49a4a469fe4ce46a7272.jpg"),
    inline: [img("fe4414_03e57f432c7d4f689fa9a2d9906ef9d0.jpg"), img("fe4414_016460dc35074665a9f15d051da0d9de.jpg")],
  },
  // Closed clubs
  libertine: {
    hero: img("fe4414_6e2adddf70f24f388d49faeba85db960.jpg"),
    inline: [img("fe4414_8742ffee41884142b564cb9eb73dbd2e.jpg")],
  },
  "luxx-club-london": {
    hero: img("fe4414_cb890a122c024a4ab9ebfd0340633155.jpg"),
    inline: [img("fe4414_d06e7bf2872e4c60853096d8aa8afe24.jpg")],
  },
  "lio-club-london": {
    hero: img("fe4414_af41f902101148d3866c12c28816d0d0.jpg"),
    inline: [img("fe4414_e139c9c3f58a470ba008a1ac6ddbd730.jpg")],
  },
  "ministry-of-sound": {
    hero: img("fe4414_1462f563979d4a04a8a2991d56c3b384.jpg"),
    inline: [img("fe4414_1016cb8f2f854fcba503d8b29d4ebf9d.jpg")],
  },
};

// ── Club card thumbnails (for homepage grid + listings) ─────────────
export const CLUB_THUMBNAILS: Record<string, string> = {
  "tape-london": img("fe4414_c01ffefe47204db4837e42c2d0ace275.jpg"),
  "cirque-le-soir": img("fe4414_e922024731294a3ea658c81cc1c1c77f.jpg"),
  "reign-london": img("DSC_7155.jpg"),
  "tabu-london": img("fe4414_1700d1cd0c8f417493e5e7a301dbcfa7.jpg"),
  "funky-buddha": img("fe4414_5dd524d974ed4435b62b0b022ff2d04a.jpg"),
  "cuckoo-club": img("fe4414_25212b50087449d0b99b5afa8c93287d.jpg"),
  "scotch-of-st-james": img("fe4414_4f8ffd1c85424160acecfb2179b112e5.jpg"),
  "dear-darling": img("fe4414_abfb3ef6a9794a8ab2e27779ebfab3f5.jpg"),
  maddox: img("fe4414_344fbd63598246e7aa317196b7721a0c.jpg"),
  "the-box-london": img("fe4414_73a4e6bb3bd84387ad1f114751e321a5.jpg"),
  "luna-club-london": img("fe4414_9584be9cd3af42b28799afa2a52a64ec.jpg"),
  "selene-london": img("fe4414_486e18bdbca0451bb2f8be457b112419.jpg"),
  "beat-london": img("fe4414_243e282bb43f4d2cb03320ddb0cf5549.jpg"),
};

// ── Guide / editorial page hero images ──────────────────────────────
export const GUIDE_IMAGES: Record<string, string> = {
  // Guides section
  "complete-guide-london-luxury-nightlife": img("fe4414_66d11cfc01954bc08e72f39cff100b13.jpg"),
  "celebrity-clubs-london": img("fe4414_1075cb5077704dcfbe926cec4270ba09.jpg"),
  "corporate-entertainment-london": img("fe4414_07f1808f9ba84bdd8fe93d124ef624ae.jpg"),
  "dinner-and-nightclub-london": img("fe4414_e21b0c7b60694081b5a518042936b4a9.jpg"),
  "london-nightlife-international-visitors": img("fe4414_8736c3fa5a0c46c6ae844af5dfd7ef3b.jpg"),
  // Pillar pages
  "luxury-nightclubs-london": img("fe4414_743e96da652441c29eaa8123fe09b765.jpg"),
  "exclusive-clubs-london": img("fe4414_fc4a1ef840984a7bb84667b22fb43180.jpg"),
  "vip-nightlife-london": img("fe4414_886a7574a4284548acf1de5ec0e7407d.jpg"),
  "celebrity-nightclubs-london": img("fe4414_0528f444f562494791e99146e727f269.jpg"),
  "london-nightlife-guide": img("fe4414_20197e48d24f4ddeb4a565334d72c89c.jpg"),
  "how-to-get-into-tape-london": img("fe4414_3c79137e95e34451a943f64c8df6d166.jpg"),
  // Editorial pages
  "london-club-dress-code-guide": img("fe4414_ea0f3fcb4f4f40b0a544bd40b712de87.jpg"),
  "guestlist-vs-table-booking-london": img("fe4414_cd22eeb1cc2a45b6b7a23eb2d1bfac9e.jpg"),
  "how-london-nightclub-door-policy-works": img("fe4414_c73240a359b04bea89f5ca5d4dbdd648.jpg"),
  "best-hip-hop-clubs-london": img("fe4414_079171b00717438b8594796362b0247d.jpg"),
  "best-house-music-clubs-london": img("fe4414_c83ebb5b00154b68bdc9742e7d0f13cc.jpg"),
  "best-nightclubs-for-high-spenders-london": img("fe4414_d8644c78fa964b6a859d42ef082c36a2.jpg"),
  "how-to-plan-a-luxury-night-out-in-london": img("fe4414_99bf3b3a0ec64c50a4a7912a053c9b2b.jpg"),
  "romantic-nightlife-london-couples": img("fe4414_555c4a7c78c74811bb7f4153dda1d60e.jpg"),
  "london-vs-dubai-nightlife": img("fe4414_c254e1f4304344cfb8b6af7fff37e11e.jpg"),
  "london-vs-new-york-nightlife": img("fe4414_a13d781f5e24493ebc3133845efa340e.jpg"),
  "london-vs-paris-nightlife": img("fe4414_cc6dbdf3f4f64d35892a1cb459f71d22.jpg"),
  // Utility
  about: img("fe4414_480e75dc0b9a4f4c82f775fae5c74e8a.jpg"),
  contact: img("fe4414_be5e18d6a4f44adea772e3df9bf8337a.jpg"),
};

// ── Blog post featured images ───────────────────────────────────────
/** A post's featured image: its own (database posts), else the slug map. */
export function postImage(post: { slug: string; image?: string }): string {
  return post.image || BLOG_IMAGES[post.slug] || "";
}

export const BLOG_IMAGES: Record<string, string> = {
  "london-supercar-season-nightlife": img("maison-close-382.jpg"),
  "fight-night-london-nightlife": img("maison-close-420.jpg"),
  "henley-regatta-london-nightlife": img("maison-close-303.jpg"),
  "british-grand-prix-london-nightlife": img("maison-close-042.jpg"),
  "how-much-does-night-out-mayfair-cost": img("fe4414_ae4e1af2acbc4ebd9e058cc104b07933.jpg"),
  "bottle-service-london-explained": img("fe4414_fa4f218533a449be8b8b4e000f425300.jpg"),
  "new-years-eve-london-luxury-guide": img("fe4414_a5dd778100da407aafdb91bf7dcc1453.jpg"),
  "birthday-night-out-london-planning-guide": img("fe4414_e337aea78df64aa49a43b349af76eeaa.jpg"),
  "best-clubs-london-large-groups": img("fe4414_14215a177bd145bc8a61ed0ee4b18217.jpg"),
  "mayfair-vs-shoreditch-nightlife-compared": img("fe4414_db3dcbfe2b0a4601a5a4af6dac9082ad.jpg"),
  "saturday-night-mayfair-guide": img("fe4414_7dbdf5ed43004438868b9407b4e14146.jpg"),
  "london-late-night-venues-open-past-3am": img("fe4414_acdf2a4fa9c84dbc97b1bc7d35e637e6.jpg"),
  "london-nightlife-2025-whats-new": img("fe4414_a543e3bada6841d880fc0c4ab560c2b5.jpg"),
  "funky-buddha-london-review": img("fe4414_938458d67f614f5cb736ac0e2e4fe1f9.jpg"),
  "the-box-london-what-to-expect": img("fe4414_dd9694e452204ef99a0b6c2dc693faf9.jpg"),
  "best-clubs-mayfair-complete-ranking": img("fe4414_1c3722895a874a6b99b368ecfd004be1.jpg"),
  "reign-london-showclub-experience": img("DSC_6827.jpg"),
  "scotch-of-st-james-history-legacy": img("fe4414_4ebd9c3941ed440f997e51cb8fc2c279.jpg"),
  "dear-darling-maddox-cocktail-clubs-mayfair": img("fe4414_d98580822591406082db347183f9192a.jpg"),
  "tape-london-inside-mayfairs-most-exclusive-club": img("fe4414_9aad49408a0f4a57b95f42d24fb5ed1f.jpg"),
  "cirque-le-soir-circus-nightclub-london": img("fe4414_141a8e5a0dc0400caa5217cf2d206ba5.jpg"),
  "tabu-london-japanese-underground-nightclub": img("fe4414_7fd0b80992234fc6be62b06ab7d8ccac.jpg"),
  "cuckoo-club-mayfair-two-floors-one-night": img("fe4414_2b0b9405f5084a1bb087854db63c68ab.jpg"),
  "beat-london-sound-system-fitzrovia": img("fe4414_f06a962e34d74d8d88f62e3607c5dab0.jpg"),
  "luna-selene-new-mayfair-clubs-2025": img("fe4414_54a8200c73ae49e7a5ee7170777de8bf.jpg"),
  "stag-night-mayfair-guide": img("fe4414_250ad5247e7546dcbe9f0c7b4e2fcbaf.jpg"),
  "best-thursday-night-clubs-london": img("fe4414_a70d49c35c0843e39348d4e4b5f02f62.jpg"),
  "best-friday-night-clubs-london": img("fe4414_10b096491888432598b5a27177f140f9.jpg"),
  "london-nightlife-etiquette-unwritten-rules": img("fe4414_281a5650e67a47fca8d2610ee3b66d1e.jpg"),
  "best-cocktail-bars-mayfair-before-clubbing": img("fe4414_48867584a5004b01a8653964ec5823d9.jpg"),
  "private-members-clubs-vs-nightclubs-london": img("fe4414_62305106cc704481bbe1e1f491623aa6.jpg"),
  "best-london-clubs-over-30s": img("fe4414_837f6eb245464b1993e9d10efb3df4d7.jpg"),
  "soho-nightlife-guide": img("fe4414_9ab97d0f95934c2bbf1f6cbba615f30b.jpg"),
  "london-nightlife-mistakes-first-timers": img("fe4414_b4688c8e4e75435ea5dbb8b257cccb8a.jpg"),
  "how-london-vip-clubs-work-behind-scenes": img("fe4414_cd791cc0715e4c7581fcec2e3b9030c3.jpg"),
  "london-fashion-week-nightlife-guide": img("fe4414_e2f0482a8a69492e892195e6e4455f86.jpg"),
  "london-clubs-going-cashless": img("fe4414_554e531fc3bb4def96ed41ade5b0d3a8.jpg"),
  "host-private-event-london-nightclub": img("TapeSaturdayNYE311222-114.jpg"),
  "wimbledon-season-nightlife-london": img("maison-close-976.jpg"),
  "anniversary-night-out-london-planning": img("maison-close-801.jpg"),
  "quiet-luxury-london-nightlife": img("maison-close-704.jpg"),
  "london-to-mykonos-club-scene-summer": img("maison-close-540.jpg"),
  "royal-ascot-week-nightlife-london": img("maison-close-292.jpg"),
  "frieze-week-london-nightlife": img("maison-close-388.jpg"),
  "london-film-premiere-after-parties": img("maison-close-180.jpg"),
  "glorious-goodwood-london-season-finale": img("fe4414_d2deed200e764c838ba29b12be5dde53.jpg"),
  "luxury-night-transport-london": img("maison-close-590.jpg"),
  "private-views-london-art-world": img("maison-close-526.jpg"),
};

// ── Section break / atmospheric images ──────────────────────────────
export const SECTION_IMAGES = {
  neonLights: img("fe4414_2b63e378623d4fb9ab305854ebc0e7c0.jpg"),
  danceFloor: img("fe4414_e1f2fd914f9242519de6a80616cdf5ce.jpg"),
  vipArea: img("fe4414_46f66a79ce954aa3b93d8276b7f33ab0.jpg"),
  djBooth: img("fe4414_2107b337ac804698b2950ce330519049.jpg"),
  champagne: img("fe4414_c8917e9b64714d4293f49977efc98aad.jpg"),
  entrance: img("fe4414_12418cd5e5264ad0aaff1cb8bdfe39ba.jpg"),
  crowd: img("fe4414_27f834dc205f48d394f6757bc73550b4.jpg"),
  bottles: img("fe4414_bb3fa2c87a4a4de1bc65543ad26ecad0.jpg"),
  interior: img("fe4414_943f8f6d08ad4832b9b65d77acbe0ba3.jpg"),
  lighting: img("fe4414_556d6f1de0fe45cc9f898a07c1a0c9f3.jpg"),
};
