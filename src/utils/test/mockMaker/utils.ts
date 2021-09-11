// eslint-disable-next-line import/no-extraneous-dependencies
import * as faker from 'faker'
import { minifiedToObject } from 'utils/dataDictionary'

export function singleSampleFrom<T>(array: Array<T>): T {
  return array[faker.datatype.number({ min: 0, max: array.length - 1 })]
}

export const unminifyCharacterData = (
  initialCharacterData: MinifiedCharacterObject[],
): PartialCharacterObject[] =>
  initialCharacterData.map(
    minifiedToObject,
  ) as unknown as PartialCharacterObject[]

export const filterItemData = (initialItemData: RareItemData): RareItemData => {
  const filteredItemData = {} as RareItemData

  Object.keys(initialItemData).forEach((item) => {
    if (initialItemData[item].length > 0) {
      filteredItemData[item] = initialItemData[item]
    }
  })

  return filteredItemData
}

const getVocationString = (vocationId: number): string => {
  if (vocationId === 1) return 'Elite Knight'
  if (vocationId === 2) return 'Royal Paladin'
  if (vocationId === 3) return 'Master Sorcerer'
  if (vocationId === 4) return 'Elder Druid'

  return 'None'
}

export const unminifyGuildData = (
  guildData: MiniMemberWarData[],
  guildName: string,
  guildId: number,
): MemberWarData[] =>
  guildData.map((member) => {
    const [nickname, vocationId, level, deathCount, kills] = member

    return {
      nickname,
      vocation: getVocationString(vocationId),
      vocationId,
      level,
      deathCount,
      kills,
      guild: guildName,
      guildId,
    }
  })
