import Glide from '@glidejs/glide'
import { Controls } from '@glidejs/glide/dist/glide.modular.esm'

console.log(Controls)
export function slideIndex(){
new Glide('.glide',{
    type: 'carousel',
  startAt: 0,
  perView: 1, 
  focusAt: 'center',
  animationDuration: 4000,
  gap: 5,
  // breakpoints: {
  //   1024: {
  //     perView: 1
  //   },
  //   600: {
  //     perView: 1
  //   }
  // },
  autoplay: 6000
}).mount(
  {Controls}
)

}