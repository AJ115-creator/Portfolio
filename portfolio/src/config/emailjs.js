// EmailJS Configuration
// Environment variables are loaded from .env file in development
// and from Vercel environment variables in production

export const EMAILJS_CONFIG = {
  // Get from EmailJS dashboard → Email Services
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  
  // Get from EmailJS dashboard → Email Templates  
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  
  // Get from EmailJS dashboard → Account → General
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  
  // Your email address where you want to receive messages
  TO_EMAIL: import.meta.env.VITE_EMAILJS_TO_EMAIL
};

// Validate that all environment variables are loaded
if (typeof window !== 'undefined') {
  const missingVars = [];
  if (!EMAILJS_CONFIG.SERVICE_ID) missingVars.push('VITE_EMAILJS_SERVICE_ID');
  if (!EMAILJS_CONFIG.TEMPLATE_ID) missingVars.push('VITE_EMAILJS_TEMPLATE_ID');
  if (!EMAILJS_CONFIG.PUBLIC_KEY) missingVars.push('VITE_EMAILJS_PUBLIC_KEY');
  if (!EMAILJS_CONFIG.TO_EMAIL) missingVars.push('VITE_EMAILJS_TO_EMAIL');
  
  if (missingVars.length > 0) {
    console.warn('Missing EmailJS environment variables:', missingVars.join(', '));
  }
}
