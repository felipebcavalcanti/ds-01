/* eslint-disable prettier/prettier */
import { AvatarContainer, AvatarImage, AvatarFallBack } from './styles'
import { User } from 'phosphor-react'
import { ComponentProps } from 'react'
import  React  from 'react'



export interface AvatarProps extends ComponentProps<typeof AvatarImage>{}

export function Avatar(props: AvatarProps) {
  return (
    <AvatarContainer>
      <AvatarImage {...props} />

      <AvatarFallBack delayMs={600}>
        <User />
      </AvatarFallBack>
    </AvatarContainer>
  )
}

Avatar.displayName = 'Avatar'