// Animation constants
export const ANIMATION_DURATION = {
  FAST: 0.3,
  NORMAL: 0.5,
  SLOW: 0.6,
  VERY_SLOW: 0.8,
};

export const ANIMATION_DELAY = {
  SHORT: 0.1,
  MEDIUM: 0.2,
  LONG: 0.4,
};

// Drawing canvas constants
export const DRAWING_CONFIG = {
  DEFAULT_COLOR: '#000000',
  DEFAULT_BRUSH_SIZE: 4,
  BRUSH_SIZES: [2, 6, 10, 14],
  CANVAS_Z_INDEX: 10,
  CONTROLS_Z_INDEX: 20,
};

// Color palette for drawing
export const COLOR_PALETTE = [
  { color: '#000000', label: 'Black' },
  { color: '#FF8A8A', label: 'Light Red' },
  { color: '#BC9F8B', label: 'Light Brown' },
  { color: '#A1D6B2', label: 'Light Green' },
  { color: '#A594F9', label: 'Light Purple' },
  { color: '#295F98', label: 'Dark Blue' },
  { color: '#A0E9FF', label: 'Light Blue' },
  { color: '#FFD700', label: 'Gold' },
  { color: '#FF6F61', label: 'Coral' },
  { color: '#8A2BE2', label: 'Blue Violet' },
  { color: '#00CED1', label: 'Dark Turquoise' },
  { color: '#FF69B4', label: 'Hot Pink' },
  { color: '#32CD32', label: 'Lime Green' },
  { color: '#FFA07A', label: 'Light Salmon' },
  { color: '#6A5ACD', label: 'Slate Blue' },
  { color: '#FFC0CB', label: 'Pink' },
  { color: '#362FD9', label: 'Dark Purple' },
];

// Social links
export const SOCIAL_LINKS = {
  GITHUB: {
    href: 'https://github.com/bigyaa',
    label: 'GitHub',
  },
  LINKEDIN: {
    href: 'https://www.linkedin.com/in/bigyabajracharya',
    label: 'LinkedIn',
  },
  EMAIL: {
    href: 'mailto:bigya.js@gmail.com',
    label: 'Email',
  },
};

// Layout constants
export const LAYOUT = {
  MAX_WIDTH: 'max-w-4xl',
  MAX_WIDTH_LARGE: 'max-w-6xl',
  CONTAINER_PADDING: 'px-6',
  SECTION_PADDING: 'py-16 md:py-20',
};

// Text content
export const TEXT_CONTENT = {
  HERO: {
    NAME: 'Bigya Bajracharya',
    TITLE: 'Software Engineer | Full-Stack Developer',
    BIO_NOTE: 'PS: the background is a drawing board 🎨🖌️',
  },
  FOOTER: {
    TITLE: "Let's Build Something Amazing Together!",
    DESCRIPTION: "I'm actively seeking new opportunities and available to start immediately. Let's connect and discuss how I can contribute to your team's success.",
    CTA_BUTTON: 'Get In Touch',
    COPYRIGHT: 'Bigya Bajracharya. All rights reserved.',
    BUILT_WITH: 'Built with ❤️ and ☕ by Bigya',
  },
  EXPERIENCES: {
    TITLE: 'Experience',
    NO_RESULTS: 'No matching experiences found.',
    RESULTS_COUNT: (count) => `${count} matching experience${count > 1 ? 's' : ''} found`,
  },
};

// ARIA labels
export const ARIA_LABELS = {
  COLOR_PALETTE: 'Color Palette',
  BRUSH_SIZE_SELECTOR: 'Brush Size Selector',
  TOGGLE_ERASER: 'Toggle Eraser',
  CLEAR_CANVAS: 'Clear Canvas',
  PROFESSIONAL_SUMMARY: 'Professional Summary',
  CONNECT_WITH_ME: 'Connect with Me',
};

// Animation variants
export const ANIMATION_VARIANTS = {
  fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  staggerChildren: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  },
};
