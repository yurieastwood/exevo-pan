import styled from 'styled-components'
import {
  Drawer as BaseDrawer,
  DrawerFooter as BaseDrawerFooter,
  Input as BaseInput,
  Chip as BaseChip,
} from 'components/Atoms'
import { AutocompleteInput as BaseAutocompleteInput } from 'components/Organisms'
import { Smooth } from 'styles'

export const HeadWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  flex-grow: 1;
`

export const DrawerBody = styled(BaseDrawer.Body)`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
`

export const DrawerFooter = styled(BaseDrawerFooter)`
  flex: none;
`

export const Input = styled(BaseInput)`
  max-width: 200px;
`

export const ChipWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
`

export const IconChip = styled(BaseChip)`
  > span {
    margin-right: 6px !important;
  }
`

export const AutocompleteInput = styled(BaseAutocompleteInput)`
  max-width: 200px;
`

export const InputWrapper = styled(ChipWrapper)`
  margin-bottom: 12px;
  gap: 16px;
`

export const Emoji = styled.span`
  margin-left: 6px;
  font-size: 12px;
`

export const ResetButton = styled.button`
  padding: 4px 12px;
  display: flex;
  align-items: center;
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 700;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.14);
  ${Smooth}

  &:disabled {
    opacity: 0;
    visibility: hidden;
  }

  &:hover {
    box-shadow: 4px 4px 4px 2px rgba(0, 0, 0, 0.14);
  }

  &:active {
    box-shadow: inset 2px 2px rgba(0, 0, 0, 0.14);
  }
`

export const CheckboxWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
`
