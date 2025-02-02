import styled, { css } from 'styled-components'
import { Tooltip as BaseTooltip } from 'components/Organisms'
import Image from 'next/image'
import ServerSvg from 'assets/svgs/server.svg'
import NoServerSvg from 'assets/svgs/noserver.svg'
import euFlag from 'assets/eu-flag.png'
import naFlag from 'assets/na-flag.png'
import brFlag from 'assets/br-flag.png'

export const flags = [euFlag, naFlag, brFlag]
export const Flag = styled(Image).attrs({ width: 16, height: 10 })`
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.14);
`

export const ServerName = styled.span`
  margin-right: auto;
  font-size: 14px;
`

export const Tooltip = styled(BaseTooltip)`
  min-width: 240px;
`

export const TooltipText = styled.span`
  font-size: 12px;
`

const IconStyling = css`
  margin-bottom: -3px;
  width: 16px;
  height: 16px;
  fill: var(--onSurface);
`
export const Server = styled(ServerSvg)`
  ${IconStyling}
`
export const NoServer = styled(NoServerSvg)`
  ${IconStyling}
`
