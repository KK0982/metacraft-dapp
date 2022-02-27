import React, { useRef, useEffect } from 'react';
import * as skinview3d from 'skinview3d';

const PreviewSkin = React.memo(() => {
  const skin = '/skins/Default_Steve_Skin.png'
  const ref = useRef<HTMLCanvasElement>()
  const viewerRef = useRef<skinview3d.SkinViewer>()

  useEffect(() => {
    if (!ref.current) return

    const viewer = new skinview3d.SkinViewer({
      canvas: ref.current,
      width: 300,
      height: 500,
    })

    viewerRef.current = viewer

    // const control = skinview3d.createOrbitControls(viewer)

    // control.enableRotate = true
    // control.enableZoom = false
    // control.enablePan = false
    // ;(viewer as any).animations.add((skinview3d as any).WalkingAnimation)
  }, [])

  useEffect(() => {
    if (!viewerRef.current || !skin) return

    viewerRef.current.loadSkin(skin)
  }, [viewerRef, skin])
  return (
    <section className='w-screen h-screen'>
      <canvas className='w-screen h-screen' ref={(dom) => ref.current = dom} />
    </section>
  );
})

export default PreviewSkin