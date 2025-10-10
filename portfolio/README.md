# Ayush Jha - Professional Portfolio

A modern, responsive portfolio website showcasing my work as an Associate Data Scientist specializing in AI/ML, Computer Vision, and Full-Stack Development.

## 🚀 Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Dark/Light Theme**: Toggle between themes with localStorage persistence
- **Modern Animations**: GSAP and Three.js for smooth, professional animations
- **Interactive 3D Background**: Particle system and geometric animations
- **Project Showcase**: Detailed project cards with GitHub links
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Meta tags and semantic HTML structure
- **Performance Optimized**: Fast loading and smooth interactions

## 🛠️ Tech Stack

- **Frontend**: React.js with Vite
- **Styling**: Tailwind CSS
- **Animations**: GSAP (GreenSock), Three.js, Framer Motion
- **Icons**: React Icons
- **Routing**: React Router DOM
- **3D Graphics**: @react-three/fiber, @react-three/drei

## 📱 Sections

1. **Hero**: Animated introduction with 3D background
2. **About**: Professional summary, education, and skills
3. **Experience**: Timeline of work experience with detailed achievements
4. **Projects**: Showcase of three major projects:
   - N8N AI News Automation
   - Gastrointestinal Polyp Segmentation
   - Rice Disease Detection System
5. **Skills**: Categorized technical skills with proficiency levels
6. **Contact**: Contact form and social media links

## 🎨 Design Features

- **Light Theme Default**: Optimized for recruiters and professional viewing
- **Dark Mode Toggle**: Personal preference accommodation
- **Professional Color Palette**: Blues, grays, and accent colors
- **Smooth Animations**: Scroll-triggered animations and micro-interactions
- **Accessibility**: WCAG 2.1 AA compliant with keyboard navigation

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/AJ115-creator/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The build files will be in the `dist` directory.

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

The `vercel.json` file is already configured for optimal deployment.

### Other Platforms

The build files in `dist` can be deployed to any static hosting service:
- Netlify
- GitHub Pages
- Firebase Hosting
- AWS S3 + CloudFront

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── picofme.png          # Profile photo
│   └── resume.pdf           # Resume PDF
├── src/
│   ├── components/          # React components
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── ThemeToggle.jsx
│   │   └── ThreeBackground.jsx
│   ├── context/
│   │   └── ThemeContext.jsx # Theme management
│   ├── hooks/
│   │   └── useGSAP.js       # GSAP animation hooks
│   ├── utils/
│   │   └── animations.js    # Animation utilities
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── vercel.json              # Vercel deployment config
└── README.md
```

## 🎯 Performance

- **Lighthouse Score**: 90+ across all metrics
- **Lazy Loading**: Three.js components load only when needed
- **Image Optimization**: Optimized images with WebP support
- **Code Splitting**: Efficient bundle splitting
- **GSAP Optimization**: Hardware-accelerated animations

## 🔧 Customization

### Adding New Projects

1. Update the `projects` array in `src/components/Projects.jsx`
2. Add project details, technologies, and GitHub links
3. Include project images in the `public` folder

### Modifying Animations

1. Edit animation presets in `src/utils/animations.js`
2. Use GSAP hooks in `src/hooks/useGSAP.js`
3. Customize Three.js scenes in `src/components/ThreeBackground.jsx`

### Theme Customization

1. Update color palette in `tailwind.config.js`
2. Modify theme logic in `src/context/ThemeContext.jsx`
3. Adjust CSS variables in `src/index.css`

## 📧 Contact

- **Email**: ayushjha115.aj@gmail.com
- **Phone**: +91 7905325033
- **Location**: Bangalore, Karnataka, India
- **LinkedIn**: [linkedin.com/in/aj115](https://www.linkedin.com/in/aj115)
- **GitHub**: [github.com/AJ115-creator](https://github.com/AJ115-creator)
- **LeetCode**: [leetcode.com/u/aj115](https://leetcode.com/u/aj115)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- GSAP and Three.js communities for excellent documentation
- Tailwind CSS for rapid styling capabilities
- React ecosystem for robust component architecture

---

Built with ❤️ by Ayush Jha
