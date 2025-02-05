import { motion } from 'framer-motion';

// Smooth button animation settings
const buttonVariants = {
  initial: { y: 0, scale: 1 },
  hover: { scale: 1.06, y: -2, transition: { duration: 0.3 } },
  tap: { scale: 0.95, transition: { duration: 0.2 } },
};

const callToActionButtons = [
  {
    label: 'View My Work',
    bgColor: 'bg-blue-200',
    textColor: 'text-blue-900',
    hoverColor: 'hover:bg-blue-300',
    ringColor: 'focus:ring-blue-300',
    onClick: () =>
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' }),
  },
  {
    label: 'View Resume',
    bgColor: 'bg-purple-200',
    textColor: 'text-purple-900',
    hoverColor: 'hover:bg-purple-300',
    ringColor: 'focus:ring-purple-300',
    onClick: () => window.open('/Bigya_Bajracharya_Resume.pdf', '_blank'),
  },
  {
    label: 'Download Resume',
    bgColor: 'bg-green-200',
    textColor: 'text-green-900',
    hoverColor: 'hover:bg-green-300',
    ringColor: 'focus:ring-green-300',
    onClick: () => {
      const link = document.createElement('a');
      link.href = '/Bigya_Bajracharya_Resume.pdf';
      link.download = 'Bigya_Bajracharya_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
  },
];

export default function CTAButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
      {callToActionButtons.map(
        ({ label, bgColor, textColor, hoverColor, ringColor, onClick }, idx) => (
          <motion.button
            key={idx}
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            className={`flex-1 sm:flex-none w-48 px-6 py-3 ${bgColor} ${textColor} font-semibold rounded-lg ${hoverColor} transition-all duration-300 shadow-md focus:outline-none focus:ring-4 ${ringColor}`}
            onClick={onClick}
          >
            {label}
          </motion.button>
        )
      )}
    </div>
  );
}