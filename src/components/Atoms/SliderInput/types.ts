import { HTMLAttributes } from 'react'

export interface SliderInputProps {
  min: number
  max: number
  initialValue?: number
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  props?: HTMLAttributes<HTMLInputElement>
}

export interface TrackStyleProps {
  active?: boolean
}

export interface SliderInputStyleProps {
  valid: boolean
}
