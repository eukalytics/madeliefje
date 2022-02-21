import { useState } from "react";

export default function App() {

  const [theme, setTheme] = useState('retro');

  const themes = [
    'light',
    'dark',
    'cupcake',
    'bumblebee',
    'emerald',
    'corporate',
    'synthwave',
    'retro',
    'cyberpunk',
    'valentine',
    'halloween',
    'garden',
    'forest',
    'aqua',
    'lowfi',
    'pastel',
    'fantasy',
    'wireframe',
    'black',
    'luxury',
    'dracula',
    'cmyk',
  ];

  const changeTheme = () => {
    const rand = Math.floor(Math.random() * themes.length);
    setTheme(themes[rand]);
  }

  return (
    <div className="min-h-screen bg-primary p-20 text-center" data-theme={theme}>
      <button 
        className="btn btn-secondary"
        onClick={changeTheme}
      >
        Change Theme
      </button>
    </div>
  )
}