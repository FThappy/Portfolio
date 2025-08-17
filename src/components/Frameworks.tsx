import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    'auth0',
    'docker',
    'github',
    'git',
    'css3',
    'html5',
    'javascript',
    'typescript',
    'react',
    'tailwindcss',
    'vitejs',
    'nextjs',
    'microsoft',
    'java',
    'go',
    'spring',
    'node',
    'mongo',
    'mysql'
  ];
  return (
    <div className='relative flex h-[15rem] w-full flex-col items-center justify-center'>
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`assets/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src  } : {src : string}) => <img src={src} className='duration-200 rounded-sm hover:scale-110' />;
