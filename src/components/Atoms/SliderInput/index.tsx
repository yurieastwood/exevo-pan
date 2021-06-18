import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { debounce } from 'lodash'
import useDrag from 'hooks/useDrag'
import { clampValue } from 'utils'
import { SliderInputProps } from './types'
import * as S from './styles'

const SliderInput = ({
  min,
  max,
  initialValue = min,
  onChange,
  ...props
}: SliderInputProps): JSX.Element => {
  const [value, setValue] = useState<number>(initialValue)
  const [sliderInputValue, setSliderInputValue] = useState<number>(initialValue)
  const [isValid, setIsValid] = useState<boolean>(true)

  const inputRef = useRef<HTMLInputElement | null>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const trackWidth: number = trackRef.current?.offsetWidth ?? 1

  const positionToValue = useCallback(
    (position: number): number => {
      return Math.round((max - min) * (position / trackWidth) + min)
    },
    [min, max, trackWidth],
  )

  const valueToTrackPercentage = (currentValue: number): string =>
    `${(currentValue / max) * 100}%`

  const { binders, isMousePressed, position } = useDrag()

  const cursorPosition = clampValue(position.x, [0, trackWidth])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.replace(/\D/g, '')
    const newValue = parseInt(inputValue, 10)
    if (Number.isNaN(newValue)) return

    if (newValue < min) {
      setIsValid(false)
      setSliderInputValue(newValue)
    } else {
      const boundedValue = newValue > max ? max : newValue
      setValue(boundedValue)
      setIsValid(true)
    }
  }

  const handleKeyPress = (event: React.KeyboardEvent) => {
    const action = {
      ArrowUp: (prev: number) => prev + 1,
      ArrowRight: (prev: number) => prev + 1,
      ArrowDown: (prev: number) => prev - 1,
      ArrowLeft: (prev: number) => prev - 1,
    }[event.code]

    if (!action) return

    event.nativeEvent.preventDefault()
    setValue(prev => clampValue(action(prev), [min, max]))
  }

  useEffect(() => {
    const newValue = positionToValue(cursorPosition)
    setValue(newValue)
  }, [positionToValue, cursorPosition])

  const dispatchSyntheticEvent = useMemo(
    () =>
      debounce(() => {
        const event = new Event('input', { bubbles: true })
        inputRef.current?.dispatchEvent(event)
      }, 250),
    [],
  )

  useEffect(() => {
    setSliderInputValue(value)
    dispatchSyntheticEvent()
  }, [value, dispatchSyntheticEvent])

  return (
    <S.Wrapper>
      <div style={{ width: '100%' }}>
        <S.Track
          ref={trackRef}
          active={isMousePressed}
          tabIndex={0}
          onKeyDown={handleKeyPress}
          {...binders}
        >
          <S.Cursor style={{ left: valueToTrackPercentage(value) }} />
          <S.TrackFill style={{ width: valueToTrackPercentage(value) }} />
        </S.Track>
      </div>
      <S.SliderInput
        valid={isValid}
        type="number"
        min={min}
        max={max}
        value={sliderInputValue}
        onChange={handleInputChange}
      />
      <input
        hidden
        value={value}
        onInput={event =>
          onChange?.(event as React.ChangeEvent<HTMLInputElement>)
        }
        ref={inputRef}
        {...props}
      />
    </S.Wrapper>
  )
}

export default SliderInput
