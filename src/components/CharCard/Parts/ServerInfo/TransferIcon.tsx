import * as S from './styles'

interface TransferIconProps {
  transfer: boolean
  nickname: string
}

const TransferIcon = ({ transfer, nickname }: TransferIconProps): JSX.Element =>
  transfer ? (
    <S.Tooltip
      aria-labelledby={`transfer-availability-${nickname}`}
      content={
        <S.TooltipText id={`transfer-availability-${nickname}`}>
          Regular World Transfer available
        </S.TooltipText>
      }
    >
      <S.Server />
    </S.Tooltip>
  ) : (
    <S.Tooltip
      aria-labelledby={`transfer-availability-${nickname}`}
      content={
        <S.TooltipText id={`transfer-availability-${nickname}`}>
          Regular World Transfer NOT available
        </S.TooltipText>
      }
    >
      <S.NoServer />
    </S.Tooltip>
  )

export default TransferIcon
