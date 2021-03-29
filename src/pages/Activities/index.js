import React from 'react';

import {Image} from '../../styles'

import { ActivityWrapper, ActivityGridComponent, Title, Text, Line } from './style';
import { BLACK_HEX, GREEEN_HEX, ORANGE_HEX, WHITE_HEX } from '../../config/constants';

const Activities = () => {
    const data = [
        {
            title: 'lab equipment and consumables',
            text: "Gravida in fermentum et sollicitudin ac orci. Enim ut tellus elementum sagittis vitae. Ac turpis egestas sed tempus urna. Nisi porta lorem mollis aliquam ut porttitor. Nulla facilisi nullam vehicula ipsum a arcu. Tincidunt vitae semper quis lectus nulla at volutpat diam ut. Molestie a iaculis at erat. Et malesuada fames ac turpis egestas integer eget. Urna condimentum mattis pellentesque id nibh. Tristique risus nec feugiat in fermentum posuere urna nec tincidunt. Habitant morbi tristique senectus et netus et malesuada fames ac. Tempus urna et pharetra pharetra. Et malesuada fames ac turpis egestas. Ac felis donec et odio pellentesque. Dignissim diam quis enim lobortis scelerisque. Diam sit amet nisl suscipit adipiscing bibendum est ultricies integer. Aliquet porttitor lacus luctus accumsan. At augue eget arcu dictum varius duis at consectetur. Pretium viverra suspendisse potenti nullam ac tortor. Diam ut venenatis tellus in metus vulputate eu scelerisque",
            backgroundColor: GREEEN_HEX,
            color: WHITE_HEX
        },
        {
            title: 'Mining and exploration',
            text: 'Gravida in fermentum et sollicitudin ac orci. Enim ut tellus elementum sagittis vitae. Ac turpis egestas sed tempus urna. Nisi porta lorem mollis aliquam ut porttitor. Nulla facilisi nullam vehicula ipsum a arcu. Tincidunt vitae semper quis lectus nulla at volutpat diam ut. Molestie a iaculis at erat. Et malesuada fames ac turpis egestas integer eget. Urna condimentum mattis pellentesque id nibh. Tristique risus nec feugiat in fermentum posuere urna nec tincidunt. Habitant morbi tristique senectus et netus et malesuada fames ac. Tempus urna et pharetra pharetra. Et malesuada fames ac turpis egestas. Ac felis donec et odio pellentesque. Dignissim diam quis enim lobortis scelerisque. Diam sit amet nisl suscipit adipiscing bibendum est ultricies integer. Aliquet porttitor lacus luctus accumsan. At augue eget arcu dictum varius duis at consectetur. Pretium viverra suspendisse potenti nullam ac tortor. Diam ut venenatis tellus in metus vulputate eu scelerisque',
            backgroundColor: BLACK_HEX,
            color: WHITE_HEX
        },
        {
            title: 'yeast and yeast derivatives',
            text: 'Gravida in fermentum et sollicitudin ac orci. Enim ut tellus elementum sagittis vitae. Ac turpis egestas sed tempus urna. Nisi porta lorem mollis aliquam ut porttitor. Nulla facilisi nullam vehicula ipsum a arcu. Tincidunt vitae semper quis lectus nulla at volutpat diam ut. Molestie a iaculis at erat. Et malesuada fames ac turpis egestas integer eget. Urna condimentum mattis pellentesque id nibh. Tristique risus nec feugiat in fermentum posuere urna nec tincidunt. Habitant morbi tristique senectus et netus et malesuada fames ac. Tempus urna et pharetra pharetra. Et malesuada fames ac turpis egestas. Ac felis donec et odio pellentesque. Dignissim diam quis enim lobortis scelerisque. Diam sit amet nisl suscipit adipiscing bibendum est ultricies integer. Aliquet porttitor lacus luctus accumsan. At augue eget arcu dictum varius duis at consectetur. Pretium viverra suspendisse potenti nullam ac tortor. Diam ut venenatis tellus in metus vulputate eu scelerisque',
            backgroundColor: ORANGE_HEX,
            color: WHITE_HEX
        },
        {
            title: 'trainings and consultancy',
            text: 'Gravida in fermentum et sollicitudin ac orci. Enim ut tellus elementum sagittis vitae. Ac turpis egestas sed tempus urna. Nisi porta lorem mollis aliquam ut porttitor. Nulla facilisi nullam vehicula ipsum a arcu. Tincidunt vitae semper quis lectus nulla at volutpat diam ut. Molestie a iaculis at erat. Et malesuada fames ac turpis egestas integer eget. Urna condimentum mattis pellentesque id nibh. Tristique risus nec feugiat in fermentum posuere urna nec tincidunt. Habitant morbi tristique senectus et netus et malesuada fames ac. Tempus urna et pharetra pharetra. Et malesuada fames ac turpis egestas. Ac felis donec et odio pellentesque. Dignissim diam quis enim lobortis scelerisque. Diam sit amet nisl suscipit adipiscing bibendum est ultricies integer. Aliquet porttitor lacus luctus accumsan. At augue eget arcu dictum varius duis at consectetur. Pretium viverra suspendisse potenti nullam ac tortor. Diam ut venenatis tellus in metus vulputate eu scelerisque',
            backgroundColor: WHITE_HEX,
            color: BLACK_HEX
        },
    ];
    const images = [
        {
            src: 'https://previews.dropbox.com/p/thumb/ABGa5zNNhi1Dllc0n9qOYHEXAvCS03NRUsfNU6voUp61sIGHUD09JVg_qzd58jCTnM2I-DmnNJdJMptUvPAKVwz9pkpBueCeIidomZ_CYDUlawwLU6ba2NFngNoN1KThDB9G9PNMK9q83va3vgsidht3oh-FeX9OiVr9wPfXBTRFejTJjOkhB13Qi-gF4oKJvkUJHPfMkB6xLCxYaajQEfhAz7_CqAWH8Ol8qf6O-7RnMT68ZYeDCd9-mIezOnsOkPUwhynn-_NfA_gVFL-TXpa9UuA_HuhRlb3EH3Jn4Jn9sw--lcDmuYdvaIYfARgMUlIPKvfgSApmatVoo76kI20le8AclBgOdI9H8cs6jvu54A/p.jpeg?fv_content=true&size_mode=5',
            id: '1234'
        },
        {
            src: 'https://previews.dropbox.com/p/thumb/ABGLFwkrsFR09rTi5ojwID4fYY9f7zac5boNO9Hm37-TO0GbTrW8HZp_acmSXJbX8bHnzWCxQYl5kDl76niGBTH6LSWA-zwQxcZd0gqapT5h5ZrdTn8JAYTZ3B2Bjt4xr-eXLQpqxGfCcoEznkNcEPC9sW-wIsZ427Od4qAG9GJ2usBqbvLor0-AmNVXaNvuhLVefPeJdF0cN9zg5dVZo4IWSlZ1w3Fm9IZtCLVR0xAb8BzA70Aih9x3o5lFiEYe11pSbd9-4C3OmFJJGkp97STHjVQQf3OB3NXZpAZzyAvwlkiOcOv8vEMLHAvbdFaf16xc1bxELebDAhVa5zSKym26DHUs-GmwgmB1g8Iw9Y8Y9w/p.jpeg?size=2048x1536&size_mode=3',
            id: '123'
        },
        {
            src: 'https://previews.dropbox.com/p/thumb/ABGoYYLhTG565dsCBRJpKndQT5RXXEEg-_K2cMZBK6aD5LmyvXhGOwsdnh8N8f00U4rG9TOf8oZQUJtGLqkR3orYPS3mqN9ZOAR6lsQZ1wFuiGP-n7DEKuXMPW-Hw8tPJXSHtpAnEhJZi5-tY72bE2TSsytbWskCTu4n-hphcuQXAAh4_cK8cuzDfTRfmfXt4DhsWNVGwgVe3Kv1CSnwUVGQNaq25-UK9cDMr5XwDqmHfwklJYVkj6llJKYvVgg4fb0ZDIIQEaIFDK2kP5fSFZUlNGPCuTr3JH1Nov9GIU7XIE-hW1LHvLECDX9t8N4NgcAUu4FnftgyeUgFrKD5jo0akznXQKPbyXYclgJGOd3UVg/p.jpeg?fv_content=true&size_mode=5',
            id: '123456'
        },
        {
            src: 'https://previews.dropbox.com/p/thumb/ABH-9CUkVHBS94KN-BvChfs679shxZ5mXKfHAVKJy7fY4s2Hfp6W96E9MzYOXF6RBVQaBPV-5kFixoGncy1QswZ2K5WAvRcdy3Hpz7yWyHBU3di2LUZzmJU5WY2Nmz7NXUlClviswtgnhJsjWeqNMkDB7tvUrRXgUmhHXMDaWNcgMPziyA5M1iROyKR6mFQ6ufjgChqgpH30XPwiLh-rPeVlFXyABBqPQuo9oO2-luU-UF5f8KVcshefYRrPj5ufysn-Yrmtx96qtYSrKgV376Ih0Qx8nw2SI_sJPvwaIlEMtkm9QUERPNFLikijJ6U1UB3b3erxGPYuJoMLKaOX9KaigNCEaKvA0tto6oMuF8NttA/p.jpeg?size=2048x1536&size_mode=3',
            id: '1232134245'
        },
    ];
    return(
        <ActivityWrapper>
            {data.map((item, index) => {
                return (
                    <ActivityGridComponent 
                        key = {item.id} 
                        padding = {71}
                        startHeight = {index<=1?index+1:index+2} 
                        endHeight = {index<=1?index+3:index+4}  
                        backgroundColor = {item.backgroundColor} 
                        startWidth = {index%2?1:2} 
                        endWidth = {index%2?2:3}
                        mobileStartHeight = {(index+1)*2}
                        mobileStartWidth = {1}
                        mobileEndHeight = {(index+1)*2+1}
                        mobileEndWidth = {2} 
                    >
                        <Title color = {item.color} >
                            {item.title}
                            <Line color = {item.color} ></Line>
                        </Title>
                        <Text color = {item.color} >{item.text}</Text>
                    </ActivityGridComponent>
                );
            })}
            {images.map((item, index) => {
                return (
                    <ActivityGridComponent 
                        key = {item.id} 
                        startHeight = {index<=1?index%2?index+2:index+1:index%2?index+3:index+2} 
                        endHeight = {index<=1?index%2?index+3:index+2:index%2?index+4:index+3}  
                        startWidth = {index%2?2:1} 
                        endWidth = {index%2?3:2}
                        mobileStartHeight = {index*2+1}
                        mobileStartWidth = {1}
                        mobileEndHeight = {(index+1)*2}
                        mobileEndWidth = {2}
                    >
                        <Image src = {item.src} noMargin = {true} maxWidth = '50vw ' maxHeight = '50vh' mobileWidth = '100vw' mobileHeight = '50vh' />
                    </ActivityGridComponent>
                )
            })}
        </ActivityWrapper>
    )
}

export default Activities;