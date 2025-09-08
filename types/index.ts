// Experience related types
export interface Experience {
  id: number;
  company: string;
  role: string;
  date: string;
  location: string;
  summary: string;
  skills: string[];
  bullets: string[];
}

// Drawing canvas types
export interface DrawingCanvasProps {
  canvasRef: React.RefObject<HTMLCanvasElement>;
  currentColor: string;
  brushSize: number;
  isEraser: boolean;
}

export interface DrawingControlsProps {
  canvasRef: React.RefObject<HTMLCanvasElement>;
  currentColor: string;
  setCurrentColor: (color: string) => void;
  brushSize: number;
  setBrushSize: (size: number) => void;
  isEraser: boolean;
  setIsEraser: (isEraser: boolean) => void;
}

// Color palette types
export interface ColorOption {
  color: string;
  label: string;
}

// Social link types
export interface SocialLink {
  href: string;
  label: string;
  icon: React.ReactNode;
}

// Animation types
export interface AnimationVariants {
  hidden: Record<string, any>;
  visible: Record<string, any>;
}

// Component props types
export interface HeroProps {
  resume: boolean;
}

export interface FrontPageProps {
  resume: boolean;
}

export interface FooterProps {}

export interface ExperiencesProps {}

export interface SearchFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  yearRange: [number, number];
  setYearRange: (range: [number, number]) => void;
  allSkills: string[];
  selectedSkills: string[];
  toggleSkill: (skill: string) => void;
  sortOrder: 'asc' | 'desc';
  setSortOrder: (order: 'asc' | 'desc') => void;
  setSelectedSkills: (skills: string[]) => void;
}

export interface TimelineCardProps {
  item: Experience;
  selectedSkills: string[];
  toggleSkill: (skill: string) => void;
}

// Page props types
export interface HomePageProps {
  data: Experience[];
  resume: boolean;
}

// Event handler types
export interface MouseEvent {
  clientX: number;
  clientY: number;
  preventDefault: () => void;
}

export interface TouchEvent {
  touches: TouchList;
  preventDefault: () => void;
}

export type DrawingEvent = MouseEvent | TouchEvent;

// Utility types
export type SortOrder = 'asc' | 'desc';

export interface YearRange {
  start: number;
  end: number;
}

// Canvas context types
export interface CanvasContext {
  beginPath: () => void;
  lineWidth: number;
  lineCap: string;
  globalCompositeOperation: string;
  strokeStyle: string;
  moveTo: (x: number, y: number) => void;
  lineTo: (x: number, y: number) => void;
  stroke: () => void;
  clearRect: (x: number, y: number, width: number, height: number) => void;
  getImageData: (x: number, y: number, width: number, height: number) => ImageData;
  putImageData: (imageData: ImageData, x: number, y: number) => void;
}
