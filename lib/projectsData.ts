export interface Project {
  id: string;
  name: string;
  description: string;
  role: string;
  tech: string[];
  link: string;
  shape: 'icosahedron' | 'torus' | 'octahedron' | 'torusknot';
  glowColor: string;
}

export const projects: Project[] = [
  {
    id: 'alpha',
    name: 'Project Alpha',
    description: 'A full-stack web application with real-time collaboration features',
    role: 'Sole Developer',
    tech: ['React', 'Firebase', 'Tailwind CSS'],
    link: '#',
    shape: 'icosahedron',
    glowColor: '#e8a254'
  },
  {
    id: 'beta',
    name: 'Project Beta',
    description: 'A cross-platform mobile app for creative professionals',
    role: 'Lead Developer',
    tech: ['Flutter', 'Firebase', 'Dart'],
    link: '#',
    shape: 'torus',
    glowColor: '#7fffd4'
  },
  {
    id: 'gamma',
    name: 'Project Gamma',
    description: 'An AI/ML classification pipeline for image recognition',
    role: 'ML Engineer',
    tech: ['Python', 'Keras', 'TensorFlow Lite'],
    link: '#',
    shape: 'octahedron',
    glowColor: '#e8a254'
  },
  {
    id: 'delta',
    name: 'Project Delta',
    description: 'A Unity 3D interactive experience with immersive storytelling',
    role: 'Developer & Designer',
    tech: ['Unity', 'C#', 'Blender'],
    link: '#',
    shape: 'torusknot',
    glowColor: '#7fffd4'
  }
];

// TODO: Replace with real projects before deploying