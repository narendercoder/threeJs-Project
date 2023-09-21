import {proxy} from 'valtio';
const state = proxy({
 intro: true,
 color: "#efbd48",
 isLogoTexture: true,
 isFullTexture: false,
 logoDecal: './threejs.png',
 fullDecal: './threejs.png',
 decals: ['./threejs.png', "./react.png"],
 isTabActive: false,
})

export default state;