export interface Artwork {
  id: number;
  title: string;
  artist: string;
  year: string;
  medium: string;
  style: string;
  description: string;
  longDescription: string;
  artistBio: string;
  image: string;
  featured: boolean;
  dimensions: string;
  price: string;
}

// Using picsum.photos for consistent, high-quality art-style images
export const artworks: Artwork[] = [
  {
    id: 1,
    title: "Ethereal Sunset",
    artist: "Elena Vasquez",
    year: "2023",
    medium: "Oil on Canvas",
    style: "Impressionism",
    description: "A breathtaking capture of golden light dissolving into twilight hues.",
    longDescription: "Ethereal Sunset represents Vasquez's masterful command of light and color. The painting captures that fleeting moment when day surrenders to night, with warm golden tones bleeding into deep purples and blues. Each brushstroke carries intention and emotion, creating a landscape that feels both familiar and dreamlike. The work invites viewers to pause and reflect on the transient beauty of natural light, a theme that has defined Vasquez's career for over two decades.",
    artistBio: "Elena Vasquez is a Spanish-born painter known for her luminous landscapes and masterful use of color. Having studied at the Royal Academy of Fine Arts in Madrid, she has exhibited in galleries across Europe and North America. Her work explores the intersection of memory and perception.",
    image: "https://picsum.photos/seed/art1/800/1000",
    featured: true,
    dimensions: "48\" × 36\"",
    price: "$12,500"
  },
  {
    id: 2,
    title: "Urban Fragments",
    artist: "Marcus Chen",
    year: "2024",
    medium: "Mixed Media",
    style: "Contemporary",
    description: "Fragmented cityscapes reconstructed through layers of texture and color.",
    longDescription: "Urban Fragments is a powerful commentary on modern city life, where Chen deconstructs and reassembles urban landscapes through layers of paint, collage, and found materials. The work challenges our perception of the built environment, revealing hidden patterns and rhythms within the urban fabric. Each fragment tells its own story while contributing to a larger narrative about community, isolation, and the spaces we inhabit.",
    artistBio: "Marcus Chen is a Chinese-American mixed media artist based in New York City. His work draws from his experiences navigating between cultures, using urban landscapes as metaphors for identity and belonging. He has been featured in Art Forum, Juxtapoz, and numerous international exhibitions.",
    image: "https://picsum.photos/seed/art2/800/600",
    featured: true,
    dimensions: "60\" × 48\"",
    price: "$18,000"
  },
  {
    id: 3,
    title: "Whispers of the Forest",
    artist: "Ingrid Holmström",
    year: "2023",
    medium: "Watercolor",
    style: "Naturalism",
    description: "Delicate watercolor capturing the mystical atmosphere of Nordic woodlands.",
    longDescription: "Whispers of the Forest transports viewers into the heart of a Scandinavian woodland, where light filters through ancient trees and mist clings to moss-covered stones. Holmström's delicate watercolor technique creates an atmosphere of reverence and wonder, capturing the spiritual quality of these primordial landscapes. The painting is part of her acclaimed 'Nordic Light' series, which has been praised for its ability to convey the profound silence and beauty of untouched nature.",
    artistBio: "Ingrid Holmström is a Swedish watercolorist whose work celebrates the natural landscapes of Scandinavia. Trained at the Royal Institute of Art in Stockholm, she has developed a distinctive style that combines traditional watercolor techniques with contemporary sensibilities. Her work is held in collections across Northern Europe.",
    image: "https://picsum.photos/seed/art3/800/1100",
    featured: false,
    dimensions: "30\" × 22\"",
    price: "$7,800"
  },
  {
    id: 4,
    title: "Digital Consciousness",
    artist: "Aisha Patel",
    year: "2024",
    medium: "Digital Art",
    style: "Abstract",
    description: "An exploration of human consciousness through digital abstraction.",
    longDescription: "Digital Consciousness pushes the boundaries between technology and artistic expression. Patel uses custom algorithms and generative processes to create compositions that mirror the complexity of human thought. The swirling forms and vibrant colors suggest neural pathways and synaptic connections, while the overall composition evokes the vast, interconnected nature of consciousness itself. This piece represents the cutting edge of digital art, where code becomes brush and screen becomes canvas.",
    artistBio: "Aisha Patel is a British-Indian digital artist and creative technologist. With degrees in both Fine Art and Computer Science from the Royal College of Art, she creates works that bridge the gap between human creativity and artificial intelligence. Her installations have been exhibited at the Tate Modern, MoMA, and the Venice Biennale.",
    image: "https://picsum.photos/seed/art4/800/800",
    featured: true,
    dimensions: "4K Digital Print, 40\" × 40\"",
    price: "$9,200"
  },
  {
    id: 5,
    title: "The Last Garden",
    artist: "François Dubois",
    year: "2022",
    medium: "Acrylic on Canvas",
    style: "Surrealism",
    description: "A surreal garden where reality and dreams intertwine in vivid color.",
    longDescription: "The Last Garden is Dubois's magnum opus—a sprawling, richly detailed painting that imagines a garden at the end of time. Flowers of impossible colors bloom alongside architectural ruins, while celestial bodies hover low in a twilight sky. The work draws on the traditions of surrealism while incorporating contemporary concerns about environmental loss and the fragility of natural beauty. Every inch of the canvas rewards close inspection, revealing hidden symbols and narratives.",
    artistBio: "François Dubois is a French surrealist painter working from his studio in Provence. His work combines classical painting techniques with surrealist philosophy, creating dreamlike worlds that challenge perception and invite contemplation. He has been awarded the Prix de Rome and exhibited at the Centre Pompidou.",
    image: "https://picsum.photos/seed/art5/800/1000",
    featured: false,
    dimensions: "72\" × 54\"",
    price: "$28,000"
  },
  {
    id: 6,
    title: "Steel Reflections",
    artist: "Tomoko Yamazaki",
    year: "2024",
    medium: "Sculpture",
    style: "Minimalism",
    description: "Polished steel forms reflecting light and space in perfect harmony.",
    longDescription: "Steel Reflections is a sculptural meditation on light, space, and material. Yamazaki's meticulously crafted steel forms capture and redirect ambient light, creating an ever-changing interplay of reflections that transforms with the viewer's movement and the time of day. The piece embodies the minimalist principle that less is more, achieving profound visual and emotional impact through the simplest of means—polished metal and empty space.",
    artistBio: "Tomoko Yamazaki is a Japanese sculptor known for her minimalist works in steel and glass. Based in Kyoto, she draws inspiration from traditional Japanese aesthetics, particularly the concepts of ma (negative space) and wabi-sabi (beauty in imperfection). Her sculptures are installed in public spaces and private collections worldwide.",
    image: "https://picsum.photos/seed/art6/800/700",
    featured: false,
    dimensions: "36\" × 24\" × 18\"",
    price: "$15,500"
  },
  {
    id: 7,
    title: "Carnival of Souls",
    artist: "Diego Rivera Martinez",
    year: "2023",
    medium: "Oil on Canvas",
    style: "Expressionism",
    description: "Bold, expressive figures celebrating life amidst chaos and color.",
    longDescription: "Carnival of Souls explodes with energy and emotion. Martinez's bold, gestural brushwork brings to life a cast of characters caught in a whirlwind of celebration and melancholy. The painting draws from Mexican folk traditions and the Day of the Dead, creating a vivid tableau where joy and sorrow dance together. The rich palette of reds, oranges, and deep blues creates a sense of heat and passion that is almost palpable.",
    artistBio: "Diego Rivera Martinez is a Mexican painter whose expressionist works celebrate the rich cultural heritage of Latin America. Named after the legendary muralist, Martinez has forged his own path, combining traditional Mexican imagery with contemporary expressionist techniques. His work has been featured in galleries from Mexico City to Berlin.",
    image: "https://picsum.photos/seed/art7/800/950",
    featured: true,
    dimensions: "54\" × 42\"",
    price: "$22,000"
  },
  {
    id: 8,
    title: "Arctic Silence",
    artist: "Ingrid Holmström",
    year: "2024",
    medium: "Watercolor",
    style: "Naturalism",
    description: "The profound stillness of the Arctic captured in ethereal washes of blue.",
    longDescription: "Arctic Silence continues Holmström's exploration of Nordic landscapes, this time venturing to the extreme north. The painting captures the otherworldly quality of the Arctic—vast expanses of ice and snow rendered in subtle gradations of white, blue, and pale violet. The absence of any living figure heightens the sense of solitude and grandeur, inviting viewers to contemplate humanity's place within the vastness of the natural world.",
    artistBio: "Ingrid Holmström is a Swedish watercolorist whose work celebrates the natural landscapes of Scandinavia. Trained at the Royal Institute of Art in Stockholm, she has developed a distinctive style that combines traditional watercolor techniques with contemporary sensibilities. Her work is held in collections across Northern Europe.",
    image: "https://picsum.photos/seed/art8/800/600",
    featured: false,
    dimensions: "36\" × 24\"",
    price: "$8,500"
  },
  {
    id: 9,
    title: "Neon Dreams",
    artist: "Aisha Patel",
    year: "2024",
    medium: "Digital Art",
    style: "Contemporary",
    description: "A hypnotic digital landscape pulsing with neon light and electric energy.",
    longDescription: "Neon Dreams immerses viewers in a digital landscape where reality dissolves into pure light and color. Patel's algorithmic compositions create environments that are simultaneously futuristic and organic, suggesting cities that grow like living organisms. The neon palette references both the aesthetics of cyberpunk fiction and the bioluminescent phenomena found in the deep ocean, creating a unique visual language that speaks to our increasingly digital existence.",
    artistBio: "Aisha Patel is a British-Indian digital artist and creative technologist. With degrees in both Fine Art and Computer Science from the Royal College of Art, she creates works that bridge the gap between human creativity and artificial intelligence. Her installations have been exhibited at the Tate Modern, MoMA, and the Venice Biennale.",
    image: "https://picsum.photos/seed/art9/800/900",
    featured: false,
    dimensions: "4K Digital Print, 48\" × 36\"",
    price: "$11,000"
  },
  {
    id: 10,
    title: "Broken Symmetry",
    artist: "Marcus Chen",
    year: "2023",
    medium: "Mixed Media",
    style: "Abstract",
    description: "Geometric forms fractured and reassembled in a meditation on order and chaos.",
    longDescription: "Broken Symmetry explores the tension between order and disorder through geometric abstraction. Chen begins with precise, mathematical forms—circles, triangles, hexagons—then deliberately disrupts and fragments them, creating compositions that teeter on the edge between structure and chaos. The work incorporates found materials from demolished buildings, adding layers of history and meaning to the abstract forms. It's a powerful statement about the impermanence of human constructions.",
    artistBio: "Marcus Chen is a Chinese-American mixed media artist based in New York City. His work draws from his experiences navigating between cultures, using urban landscapes as metaphors for identity and belonging. He has been featured in Art Forum, Juxtapoz, and numerous international exhibitions.",
    image: "https://picsum.photos/seed/art10/800/800",
    featured: false,
    dimensions: "48\" × 48\"",
    price: "$16,500"
  },
  {
    id: 11,
    title: "Metamorphosis",
    artist: "Elena Vasquez",
    year: "2024",
    medium: "Oil on Canvas",
    style: "Impressionism",
    description: "A landscape in transformation, capturing the essence of seasonal change.",
    longDescription: "Metamorphosis captures the magical moment of seasonal transition, when autumn surrenders to winter. Vasquez's impressionistic technique perfectly conveys the transience of this transformation—leaves mid-fall, light shifting from warm to cool, the landscape simultaneously dying and preparing for renewal. The painting is a meditation on change itself, rendered with the artist's characteristic sensitivity to light and color.",
    artistBio: "Elena Vasquez is a Spanish-born painter known for her luminous landscapes and masterful use of color. Having studied at the Royal Academy of Fine Arts in Madrid, she has exhibited in galleries across Europe and North America. Her work explores the intersection of memory and perception.",
    image: "https://picsum.photos/seed/art11/800/1050",
    featured: false,
    dimensions: "42\" × 30\"",
    price: "$14,000"
  },
  {
    id: 12,
    title: "Temple of Light",
    artist: "Tomoko Yamazaki",
    year: "2023",
    medium: "Sculpture",
    style: "Minimalism",
    description: "An architectural sculpture that transforms space through carefully directed light.",
    longDescription: "Temple of Light is Yamazaki's most ambitious sculptural work—a walk-through installation that uses precisely angled steel and glass panels to create a sacred space defined entirely by light. As visitors move through the piece, they experience constantly shifting patterns of illumination and shadow. The work draws on the traditional Japanese concept of light as a spiritual force, creating a contemplative environment that transcends cultural boundaries.",
    artistBio: "Tomoko Yamazaki is a Japanese sculptor known for her minimalist works in steel and glass. Based in Kyoto, she draws inspiration from traditional Japanese aesthetics, particularly the concepts of ma (negative space) and wabi-sabi (beauty in imperfection). Her sculptures are installed in public spaces and private collections worldwide.",
    image: "https://picsum.photos/seed/art12/800/650",
    featured: false,
    dimensions: "96\" × 48\" × 48\"",
    price: "$45,000"
  }
];

export const categories = {
  medium: ["All", "Oil on Canvas", "Mixed Media", "Watercolor", "Digital Art", "Acrylic on Canvas", "Sculpture"],
  style: ["All", "Impressionism", "Contemporary", "Naturalism", "Abstract", "Surrealism", "Minimalism", "Expressionism"],
  artist: ["All", "Elena Vasquez", "Marcus Chen", "Ingrid Holmström", "Aisha Patel", "François Dubois", "Tomoko Yamazaki", "Diego Rivera Martinez"]
};
