import * as S from './styles'
import { EmptyStateProps } from './types'

const EmptyState = ({
  buttonAction,
  ...props
}: EmptyStateProps): JSX.Element => (
  <S.Wrapper {...props}>
    <S.Text>Sorry, no auction was found</S.Text>
    <S.NotFound />
    <S.Chip overrideStatus onClick={buttonAction}>
      Change filters
    </S.Chip>
  </S.Wrapper>
)

export default EmptyState
