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
    <div className="min-h-screen bg-primary text-center" data-theme={theme}>
      <div class="navbar bg-base-100">
        <div class="flex-1">
          <a class="btn text-accent normal-case text-xl">daisyUI</a>
        </div>
        <div class="flex-none">
          <ul class="menu menu-horizontal p-0">
            <li><a>Item 1</a></li>
            <li tabindex="0">
              <a>
                Parent
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
              </a>
              <ul class="p-2 bg-base-100">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
    </div>


    <div class="hero min-h-screen bg-base-200">
  <div class="text-center hero-content">
    <div class="max-w-md">
      <h1 class="text-5xl font-bold">{theme}</h1>
      <p class="py-6">This is a way to test out different daisyUI themes.</p>
      <button class="btn btn-primary" onClick={changeTheme}>Change Theme</button>
    </div>
  </div>
</div>
      <footer class="grid-rows-2 p-10 footer bg-neutral text-neutral-content">
  <div>
    <span class="footer-title">Services</span> 
    <a class="link link-hover">Branding</a> 
    <a class="link link-hover">Design</a> 
    <a class="link link-hover">Marketing</a> 
    <a class="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span class="footer-title">Company</span> 
    <a class="link link-hover">About us</a> 
    <a class="link link-hover">Contact</a> 
    <a class="link link-hover">Jobs</a> 
    <a class="link link-hover">Press kit</a>
  </div> 
  <div>
    <span class="footer-title">Legal</span> 
    <a class="link link-hover">Terms of use</a> 
    <a class="link link-hover">Privacy policy</a> 
    <a class="link link-hover">Cookie policy</a>
  </div> 
  <div>
    <span class="footer-title">Social</span> 
    <a class="link link-hover">Twitter</a> 
    <a class="link link-hover">Instagram</a> 
    <a class="link link-hover">Facebook</a> 
    <a class="link link-hover">Github</a>
  </div> 
  <div>
    <span class="footer-title">Explore</span> 
    <a class="link link-hover">Features</a> 
    <a class="link link-hover">Enterprise</a> 
    <a class="link link-hover">Security</a> 
    <a class="link link-hover">Pricing</a>
  </div> 
  <div>
    <span class="footer-title">Apps</span> 
    <a class="link link-hover">Mac</a> 
    <a class="link link-hover">Windows</a> 
    <a class="link link-hover">iPhone</a> 
    <a class="link link-hover">Android</a>
  </div>
</footer>
    </div>

  )
}