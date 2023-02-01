/* eslint-disable prettier/prettier */


import type { Meta, StoryObj } from '@storybook/react'
import { TextProps, Text } from '@ignite-ui/react'


export default {
    title: 'Typograph/Text',
    component: Text,
    args: {
        children: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis error dolores provident ipsam architecto nulla, atque non rem esse sapiente distinctio maiores voluptas assumenda fugiat, repellendus asperiores nihil pariatur! Iure.,'
    }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {}