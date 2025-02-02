import styled, { StyledComponent, DefaultTheme } from 'styled-components'
import { Checkbox as BaseCheckbox } from 'components/Atoms'
import Image from 'next/image'
import { MaterialCard, Clickable } from 'styles'
import TibiaCoinImage from 'assets/tibiacoin.png'
import ExpandSvg from 'assets/svgs/expand.svg'
import { Nickname } from 'components/CharacterMiniCard/styles'

const FIXED_BODY_HEIGHT = 373

export const Wrapper = styled.article`
  ${MaterialCard}
  padding: 16px;

  &[role='button'] {
    cursor: pointer;
  }

  &[data-highlighted='true'] {
    --surface: var(--kwaiSurface);
    --primary: var(--kwai);
    --primaryVariant: var(--kwaiVariant);

    z-index: 2;

    ${Nickname} {
      color: var(--green);
    }

    @media (min-width: 768px) {
      animation: zoom 0.6s ease-out forwards;
      animation-delay: 1s;

      @keyframes zoom {
        0% {
          transform: scale(1);
        }
        20% {
          transform: scale(1.02);
          box-shadow: 4px 4px 8px 4px rgba(0, 0, 0, 0.1);
        }
        80% {
          transform: scale(1.02);
          box-shadow: 4px 4px 8px 4px rgba(0, 0, 0, 0.1);
        }
        100% {
          transform: scale(1);
        }
      }
    }
  }
` as StyledComponent<'div', DefaultTheme, Record<string, any>, never>

export const Button = styled.button`
  ${Clickable}
  border-radius: 4px;
  display: grid;
  place-items: center;
`

export const Icons = {
  Expand: styled(ExpandSvg)`
    fill: var(--onSurface);
    transition: 0.2s fill ease-out;
  `,
  TibiaCoin: styled(Image).attrs({
    src: TibiaCoinImage,
    alt: 'Tibia Coin',
    unoptimized: true,
  })`
    width: 12px;
    height: 12px;
  `,
}

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 8px;
  grid-row-gap: 12px;
`

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6px;
`

export const FlexFooter = styled.div`
  padding-top: 12px;
  border-top: solid 1px var(--separator);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;
  align-items: flex-start;
`

export const FlexColumn = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 8px;

  color: var(--onSurface);

  > * {
    width: fit-content;
  }

  &[data-store-column='true'] > * {
    height: 18px;
  }
`

export const Checkbox = styled(BaseCheckbox).attrs({
  disabled: true,
  'aria-readonly': true,
})`
  &:checked {
    background-color: var(--primary);
    border-color: var(--primary);
  }
`

export const CheckboxContainer = styled.div`
  width: 16px;
  height: 16px;
  display: grid;
  place-items: center;
`

export const Strong = styled.strong`
  color: var(--primary);
  filter: brightness(130%);
`

export const Body = styled.div`
  padding-top: 6px;
  display: grid;
  gap: 12px;
  margin-bottom: 12px;

  &[data-lazy='true']:not(:hover) {
    content-visibility: auto;
    contain-intrinsic-size: ${FIXED_BODY_HEIGHT}px;
  }

  @media (min-width: 768px) {
    &&[data-lazy='true'] {
      content-visibility: unset;
      contain-intrinsic-size: unset;
    }
  }
`
