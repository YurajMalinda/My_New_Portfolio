export interface Skill {
  name: string;
  position: [number, number, number];
  size: number;
  connections: string[];
}

export const skills: Skill[] = [
  {
    name: 'React',
    position: [2, 1, 0],
    size: 0.12,
    connections: ['Next.js', 'Node.js', 'Tailwind CSS']
  },
  {
    name: 'Next.js',
    position: [3.5, 0.5, -1],
    size: 0.11,
    connections: ['React', 'Node.js', 'Firebase']
  },
  {
    name: 'Flutter',
    position: [-2, 2, 1],
    size: 0.12,
    connections: ['Firebase', 'i18next']
  },
  {
    name: 'Unity 3D',
    position: [0, -2, 2],
    size: 0.1,
    connections: []
  },
  {
    name: 'Python',
    position: [-3, 0, -1],
    size: 0.11,
    connections: ['Keras', 'TFLite']
  },
  {
    name: 'Keras',
    position: [-4, -1, 0],
    size: 0.09,
    connections: ['Python', 'TFLite']
  },
  {
    name: 'TFLite',
    position: [-3.5, -2, -1],
    size: 0.08,
    connections: ['Python', 'Keras']
  },
  {
    name: 'Firebase',
    position: [1, 3, -2],
    size: 0.1,
    connections: ['React', 'Flutter', 'Next.js']
  },
  {
    name: 'Java',
    position: [-1, -3, 1],
    size: 0.09,
    connections: []
  },
  {
    name: 'Node.js',
    position: [4, 2, 1],
    size: 0.1,
    connections: ['React', 'Next.js']
  },
  {
    name: 'Figma',
    position: [0, 3, 2],
    size: 0.09,
    connections: ['Adobe Illustrator', 'Adobe Photoshop']
  },
  {
    name: 'Adobe Illustrator',
    position: [-1, 4, 1],
    size: 0.08,
    connections: ['Figma', 'Adobe Photoshop']
  },
  {
    name: 'Adobe Photoshop',
    position: [1, 4, 0],
    size: 0.08,
    connections: ['Figma', 'Adobe Illustrator']
  },
  {
    name: 'Tailwind CSS',
    position: [3, -1, -2],
    size: 0.09,
    connections: ['React']
  },
  {
    name: 'Git',
    position: [-2, -1, -2],
    size: 0.08,
    connections: []
  },
  {
    name: 'SQL',
    position: [2, -3, 0],
    size: 0.08,
    connections: []
  },
  {
    name: 'i18next',
    position: [-3, 3, 2],
    size: 0.07,
    connections: ['Flutter']
  }
];