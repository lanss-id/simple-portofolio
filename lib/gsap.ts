// Lazy GSAP loader — call inside useEffect only, never at top level
export async function loadGSAP() {
  const [{ gsap }, { ScrollTrigger }] = await Promise.all([
    import('gsap'),
    import('gsap/ScrollTrigger'),
  ])
  gsap.registerPlugin(ScrollTrigger)
  return { gsap, ScrollTrigger }
}
