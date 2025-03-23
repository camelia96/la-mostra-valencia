import { HorizontalLoopConfig } from '@/interfaces/interfaces';
import gsap from 'gsap';


/** GSAP Horizontal Loop Helper (edited from forums) */
function horizontalLoop(items: HTMLElement[] | NodeListOf<HTMLElement>, config?: HorizontalLoopConfig) {
    items = gsap.utils.toArray(items) as HTMLElement[];
    config = config || {};
  
    const tl = gsap.timeline({
      repeat: config.repeat,
      paused: config.paused,
      defaults: { ease: "none" },
      onReverseComplete: () => {
        tl.totalTime(tl.rawTime() + tl.duration() * 100); // Ajusta el tiempo sin devolver un valor
      },
    });
  
    const length = items.length;
    const startX = items[0].offsetLeft;
    const times: number[] = [];
    const widths: number[] = [];
    const xPercents: number[] = [];
    let curIndex = 0;
    const pixelsPerSecond = (config.speed || 1) * 200;
    const snap = config.snap === false ? (v: number) => v : gsap.utils.snap(config.snap === true ? 1 : config.snap || 1);
  
    let totalWidth: number;
    let curX: number;
    let distanceToStart: number;
    let distanceToLoop: number;
    let item: HTMLElement;
    let i: number;
  
    // Configura las propiedades iniciales de los elementos
    gsap.set(items, {
      xPercent: (i: number, el: HTMLElement) => {
        const w = (widths[i] = parseFloat(gsap.getProperty(el, "width", "px") as string));
        xPercents[i] = snap(
          (parseFloat(gsap.getProperty(el, "x", "px") as string) / w) * 100 +
          parseFloat(gsap.getProperty(el, "xPercent") as string)
        );
        return xPercents[i];
      },
    });
  
    gsap.set(items, { x: 0 });
  
    // Calcula el ancho total del loop
    totalWidth =
      items[length - 1].offsetLeft +
      (xPercents[length - 1] / 100) * widths[length - 1] -
      startX +
      items[length - 1].offsetWidth *
      parseFloat(gsap.getProperty(items[length - 1], "scaleX") as string) +
      (config.paddingRight || 0); // Usa config.paddingRight o 0 si es undefined
  console.log(totalWidth)

    // Configura la animación para cada elemento
    for (i = 0; i < length; i++) {
      item = items[i];
      curX = (xPercents[i] / 100) * widths[i];
      distanceToStart = item.offsetLeft + curX - startX;
      distanceToLoop = distanceToStart + widths[i] * parseFloat(gsap.getProperty(item, "scaleX") as string);
  
      tl.to(
        item,
        {
          xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
          duration: distanceToLoop / pixelsPerSecond,
        },
        0
      )
        .fromTo(
          item,
          {
            xPercent: snap(((curX - distanceToLoop + totalWidth) / widths[i]) * 100),
          },
          {
            xPercent: xPercents[i],
            duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
            immediateRender: false,
          },
          distanceToLoop / pixelsPerSecond
        )
        .add("label" + i, distanceToStart / pixelsPerSecond);
  
      times[i] = distanceToStart / pixelsPerSecond;
    }
  
    // Función para mover el loop a un índice específico
    function toIndex(index: number, vars?: gsap.TweenVars) {
      vars = vars || {};
      Math.abs(index - curIndex) > length / 2 &&
        (index += index > curIndex ? -length : length); // siempre ir en la dirección más corta
  
      const newIndex = gsap.utils.wrap(0, length, index);
      let time = times[newIndex];
  
      if (time > tl.time() !== index > curIndex) {
        // si estamos envolviendo la cabeza de reproducción de la línea de tiempo, hacer los ajustes necesarios
        vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
        time += tl.duration() * (index > curIndex ? 1 : -1);
      }
  
      curIndex = newIndex;
      vars.overwrite = true;
      return tl.tweenTo(time, vars);
    }
  
    // Métodos adicionales para controlar el loop
    tl.next = (vars?: gsap.TweenVars) => toIndex(curIndex + 1, vars);
    tl.previous = (vars?: gsap.TweenVars) => toIndex(curIndex - 1, vars);
    tl.current = () => curIndex;
    tl.toIndex = (index: number, vars?: gsap.TweenVars) => toIndex(index, vars);
    tl.times = times;
  
    // Pre-renderizar para mejorar el rendimiento
    tl.progress(1, true).progress(0, true);
  
    // Si la configuración está en reversa, invertir la animación
    if (config.reversed) {
      tl.vars.onReverseComplete?.();
      tl.reverse();
    }
  
    return tl;
  }
  
  export default horizontalLoop;