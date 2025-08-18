# Hitesh Zade - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design** - Works perfectly on all devices
- **Dark/Light Theme** - Toggle between themes
- **Smooth Animations** - GSAP-powered animations and transitions
- **Typewriter Effect** - Dynamic text animation in hero section
- **Modern UI Components** - Built with Radix UI and Tailwind CSS
- **Contact Form** - Integrated with mailto functionality
- **Project Showcase** - Display your work and skills

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **GSAP** - Professional animations
- **Framer Motion** - Additional animation library
- **React Hook Form** - Form handling with validation
- **Zod** - Schema validation

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portFolio/client
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
client/
├── src/
│   ├── components/          # React components
│   │   ├── ui/             # Radix UI components
│   │   ├── hero-section.tsx
│   │   ├── about-section.tsx
│   │   ├── projects-section.tsx
│   │   ├── skills-section.tsx
│   │   ├── contact-section.tsx
│   │   └── ...
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   ├── pages/              # Page components
│   ├── App.tsx             # Main app component
│   └── main.tsx            # Entry point
├── public/                 # Static assets
├── package.json
├── vite.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `src/components/hero-section.tsx` - Name and titles
- `src/components/about-section.tsx` - About description
- `src/components/contact-section.tsx` - Contact details
- `src/components/projects-section.tsx` - Your projects

### Styling
- Modify `tailwind.config.ts` for custom colors and themes
- Update CSS variables in `src/index.css` for theme colors

### Animations
- GSAP animations are configured in individual components
- Typewriter effect can be customized in `src/hooks/use-typewriter.ts`

## 📧 Contact Form

The contact form uses `mailto:` functionality to open the user's default email client with pre-filled information. To change the recipient email, update the email address in `src/components/contact-section.tsx`.

## 🚀 Deployment

This is a static React application that can be deployed to any static hosting service:

- **Netlify**: Connect your GitHub repo for automatic deployments
- **Vercel**: Import your project for seamless deployment
- **GitHub Pages**: Use GitHub Actions for deployment
- **Firebase Hosting**: Deploy with Firebase CLI

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Feel free to submit issues and enhancement requests!
