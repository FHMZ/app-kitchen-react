import { useState } from 'react'

export const useExpand = () => {
  const [expand, setExpand] = useState<boolean>(true)
  const onExpand = () => setExpand(!expand)
  return { onExpand, expand }
}
