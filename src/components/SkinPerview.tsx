import React, { FC, useEffect, useRef } from 'react'
import * as skinview3d from 'skinview3d'

interface SkinPerviewProps {
  name?: string
  skin?: string
  width?: number
  height?: number
}

export const SkinPerview: FC<SkinPerviewProps> = ({ name, skin }) => {
  const ref = useRef<HTMLCanvasElement>()
  const viewerRef = useRef<skinview3d.SkinViewer>()

  useEffect(() => {
    if (!ref.current) return

    const viewer = new skinview3d.SkinViewer({
      canvas: ref.current,
      width: 300,
      height: 274,
    })

    viewerRef.current = viewer

    let control = skinview3d.createOrbitControls(viewer)

    control.enableRotate = true
    control.enableZoom = false
    control.enablePan = false
    ;(viewer as any).animations.add((skinview3d as any).WalkingAnimation)
  }, [])

  useEffect(() => {
    if (!viewerRef.current || !skin) return

    viewerRef.current.loadSkin(skin)
  }, [viewerRef, skin])

  return (
    <div className="flex flex-col rounded-15 bg-f7f8fc min-w-[288px] min-h-[322px] overflow-hidden">
      <canvas className="flex-1" ref={(dom) => (ref.current = dom)} />
      <div className="bg-1b2533 text-16 leading-24 text-fff h-48 w-full flex items-center justify-center">
        <p>{name}</p>
      </div>
    </div>
  )
}
