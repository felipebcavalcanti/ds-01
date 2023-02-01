/* eslint-disable prettier/prettier */


import type { Meta, StoryObj } from '@storybook/react'
import { HeadingProps, Heading } from '@ignite-ui/react'


export default {
    title: 'Typograph/Heading',
    component: Heading,
    args: {
        children: 'Custom Title'
    }
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
    args: {
        children: 'h1 heading',
        as: 'h1',
    },
    parameters: {
        docs: {
            description: {
                story: 'Por Padrao oHeading sempre será um `h2`, mas podemos alterar isso sempre com a propriedade `as`'            }
        }
    }
}