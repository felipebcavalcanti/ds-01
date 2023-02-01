/* eslint-disable prettier/prettier */


import type { Meta, StoryObj } from '@storybook/react'
import { AvatarProps, Avatar } from '@ignite-ui/react'


export default {
    title: 'Date display/Avatar',
    component: Avatar,
    args: {
        src: 'https://github.com/felipebcavalcanti.png',
        alt: 'Felipe Cavalcanti',
    }
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallBack: StoryObj<AvatarProps> = {
    args: {
        src: undefined,
    }
}

